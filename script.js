/* =========================================================
   FOOTBALLIA — MAIN SCRIPT
   Fast • Smooth • Supabase • Mobile Friendly
========================================================= */

const SUPABASE_URL = "https://zalrujwcdrpeyibaoxss.supabase.co";
const SUPABASE_KEY = "sb_publishable_kfRGV3Ugx0HtFfO_atcU_Q_tsKMm_BB";

const { createClient } = supabase;
const db = createClient(SUPABASE_URL, SUPABASE_KEY);


/* =========================================================
   HELPERS
========================================================= */

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

function escapeHTML(value) {
  if (value === null || value === undefined) return "";

  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function persianNumber(value) {
  if (value === null || value === undefined) return "۰";

  return String(value).replace(/\d/g, (digit) => {
    return "۰۱۲۳۴۵۶۷۸۹"[digit];
  });
}

function formatDate(date) {
  if (!date) return "";

  const d = new Date(date);

  if (Number.isNaN(d.getTime())) return "";

  return new Intl.DateTimeFormat("fa-IR", {
    year: "numeric",
    month: "long",
    day: "numeric"
  }).format(d);
}

function imageOrFallback(url, fallback = "⚽") {
  if (!url) {
    return `<div class="image-fallback">${fallback}</div>`;
  }

  return `
    <img
      src="${escapeHTML(url)}"
      alt=""
      loading="lazy"
      decoding="async"
      onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
    >
    <div class="image-fallback" style="display:none">${fallback}</div>
  `;
}


/* =========================================================
   DOM
========================================================= */

const newsGrid = $("#newsGrid");
const playersGrid = $("#playersGrid");
const matchesGrid = $("#matchesGrid");
const leagueTableBody = $("#leagueTableBody");

const newsEmpty = $("#newsEmpty");
const playersEmpty = $("#playersEmpty");
const matchesEmpty = $("#matchesEmpty");
const tableEmpty = $("#tableEmpty");

const newsCount = $("#newsCount");
const playerCount = $("#playerCount");

const searchInput = $("#searchInput");
const menuButton = $("#menuButton");
const mainNav = $("#mainNav");


/* =========================================================
   MOBILE MENU
========================================================= */

if (menuButton && mainNav) {

  menuButton.addEventListener("click", () => {
    mainNav.classList.toggle("open");
    menuButton.classList.toggle("active");
  });

  mainNav.addEventListener("click", (event) => {

    if (event.target.closest("a")) {
      mainNav.classList.remove("open");
      menuButton.classList.remove("active");
    }

  });
}


/* =========================================================
   NAVIGATION
========================================================= */

const navLinks = [...$$(".nav a[href^='#']")];

if (navLinks.length) {

  navLinks.forEach((link) => {

    link.addEventListener("click", () => {

      navLinks.forEach((item) => {
        item.classList.remove("active");
      });

      link.classList.add("active");

    });

  });

}


/* =========================================================
   REVEAL ANIMATION
========================================================= */

function setupRevealAnimation() {

  const elements = $$(".news-card, .player-card, .match-card, .table-card, .stat-card");

  if (!elements.length) return;

  if (!("IntersectionObserver" in window)) {

    elements.forEach((element) => {
      element.classList.add("visible");
    });

    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {

      entries.forEach((entry) => {

        if (!entry.isIntersecting) return;

        entry.target.classList.add("visible");

        obs.unobserve(entry.target);

      });

    },
    {
      threshold: 0.08,
      rootMargin: "0px 0px -40px 0px"
    }
  );

  elements.forEach((element) => {
    element.classList.add("reveal");
    observer.observe(element);
  });

}


/* =========================================================
   NEWS
========================================================= */

let allNews = [];

async function loadNews() {

  if (!newsGrid) return;

  try {

    const { data, error } = await db
      .from("news")
      .select(`
        id,
        title,
        category,
        content,
        image_url,
        published_at,
        created_at
      `)
      .eq("is_published", true)
      .order("published_at", {
        ascending: false,
        nullsFirst: false
      })
      .limit(50);

    if (error) throw error;

    allNews = data || [];

    if (newsCount) {
      newsCount.textContent = persianNumber(allNews.length);
    }

    renderNews(allNews);

  } catch (error) {

    console.error("News error:", error);

    allNews = [];

    if (newsCount) {
      newsCount.textContent = "۰";
    }

    newsGrid.innerHTML = `
      <div class="error-card">
        <span>⚠️</span>
        <p>دریافت اخبار با مشکل مواجه شد.</p>
      </div>
    `;

  }

}


function renderNews(news) {

  if (!newsGrid) return;

  if (!news.length) {

    newsGrid.innerHTML = "";

    if (newsEmpty) {
      newsEmpty.hidden = false;
    }

    return;
  }

  if (newsEmpty) {
    newsEmpty.hidden = true;
  }

  const fragment = document.createDocumentFragment();

  news.forEach((item) => {

    const article = document.createElement("article");

    article.className = "news-card";

    const category = item.category || "فوتبال";

    const date =
      item.published_at ||
      item.created_at;

    const content =
      item.content ||
      "جزئیات این خبر به‌زودی منتشر می‌شود.";

    article.innerHTML = `

      <div class="news-image">

        ${imageOrFallback(item.image_url, "📰")}

        <span class="news-category">
          ${escapeHTML(category)}
        </span>

      </div>

      <div class="news-content">

        <div class="news-date">
          🕒 ${escapeHTML(formatDate(date))}
        </div>

        <h3>
          ${escapeHTML(item.title)}
        </h3>

        <p>
          ${escapeHTML(content)}
        </p>

        <div class="news-more">
          ادامه خبر
          <span>←</span>
        </div>

      </div>

    `;

    fragment.appendChild(article);

  });

  newsGrid.innerHTML = "";
  newsGrid.appendChild(fragment);

  requestAnimationFrame(setupRevealAnimation);

}


/* =========================================================
   NEWS SEARCH
========================================================= */

if (searchInput) {

  let searchTimer;

  searchInput.addEventListener("input", () => {

    clearTimeout(searchTimer);

    searchTimer = setTimeout(() => {

      const query = searchInput.value
        .trim()
        .toLowerCase();

      if (!query) {

        renderNews(allNews);
        return;

      }

      const filtered = allNews.filter((item) => {

        const title = String(item.title || "").toLowerCase();
        const category = String(item.category || "").toLowerCase();
        const content = String(item.content || "").toLowerCase();

        return (
          title.includes(query) ||
          category.includes(query) ||
          content.includes(query)
        );

      });

      renderNews(filtered);

    }, 120);

  });

}


/* =========================================================
   PLAYERS
========================================================= */

async function loadPlayers() {

  if (!playersGrid) return;

  try {

    const { data, error } = await db
      .from("players")
      .select(`
        id,
        name,
        country,
        number,
        position,
        icon,
        image_url,
        created_at
      `)
      .eq("is_published", true)
      .order("created_at", {
        ascending: false
      })
      .limit(50);

    if (error) throw error;

    const players = data || [];

    if (playerCount) {
      playerCount.textContent = persianNumber(players.length);
    }

    renderPlayers(players);

  } catch (error) {

    console.error("Players error:", error);

    if (playerCount) {
      playerCount.textContent = "۰";
    }

    playersGrid.innerHTML = `
      <div class="error-card">
        <span>⚠️</span>
        <p>دریافت بازیکنان با مشکل مواجه شد.</p>
      </div>
    `;

  }

}


function renderPlayers(players) {

  if (!playersGrid) return;

  if (!players.length) {

    playersGrid.innerHTML = "";

    if (playersEmpty) {
      playersEmpty.hidden = false;
    }

    return;
  }

  if (playersEmpty) {
    playersEmpty.hidden = true;
  }

  const fragment = document.createDocumentFragment();

  players.forEach((player) => {

    const card = document.createElement("article");

    card.className = "player-card";

    const number =
      player.number !== null &&
      player.number !== undefined &&
      player.number !== ""
        ? player.number
        : "—";

    const position =
      player.position ||
      "بازیکن";

    const country =
      player.country ||
      "جهان";

    const icon =
      player.icon ||
      "⭐";

    card.innerHTML = `

      <div class="player-image">

        ${imageOrFallback(player.image_url, icon)}

        <div class="player-number">
          ${escapeHTML(number)}
        </div>

        <div class="player-glow"></div>

      </div>

      <div class="player-info">

        <div class="player-position">
          ${escapeHTML(position)}
        </div>

        <h3>
          ${escapeHTML(player.name)}
        </h3>

        <p>
          🌍 ${escapeHTML(country)}
        </p>

      </div>

    `;

    fragment.appendChild(card);

  });

  playersGrid.innerHTML = "";
  playersGrid.appendChild(fragment);

  requestAnimationFrame(setupRevealAnimation);

}


/* =========================================================
   MATCHES
========================================================= */

async function loadMatches() {

  if (!matchesGrid) return;

  try {

    const { data, error } = await db
      .from("matches")
      .select(`
        id,
        league,
        home_team,
        away_team,
        home_logo,
        away_logo,
        match_date,
        home_score,
        away_score,
        status
      `)
      .eq("is_published", true)
      .order("match_date", {
        ascending: true
      })
      .limit(30);

    /*
      اگر جدول matches هنوز ساخته نشده باشد،
      سایت خراب نمی‌شود و فقط حالت خالی نشان داده می‌شود.
    */

    if (error) {

      console.warn("Matches table is unavailable:", error.message);

      renderMatches([]);

      return;
    }

    renderMatches(data || []);

  } catch (error) {

    console.error("Matches error:", error);

    renderMatches([]);

  }

}


function renderMatches(matches) {

  if (!matchesGrid) return;

  if (!matches.length) {

    matchesGrid.innerHTML = "";

    if (matchesEmpty) {
      matchesEmpty.hidden = false;
    }

    return;
  }

  if (matchesEmpty) {
    matchesEmpty.hidden = true;
  }

  const fragment = document.createDocumentFragment();

  matches.forEach((match) => {

    const card = document.createElement("article");

    card.className = "match-card";

    const date = formatDate(match.match_date);

    const time = match.match_date
      ? new Intl.DateTimeFormat("fa-IR", {
          hour: "2-digit",
          minute: "2-digit"
        }).format(new Date(match.match_date))
      : "--:--";

    const homeScore =
      match.home_score !== null &&
      match.home_score !== undefined
        ? persianNumber(match.home_score)
        : "—";

    const awayScore =
      match.away_score !== null &&
      match.away_score !== undefined
        ? persianNumber(match.away_score)
        : "—";

    let statusText = "آینده";

    if (match.status === "live") {
      statusText = "🔴 زنده";
    } else if (match.status === "finished") {
      statusText = "پایان";
    } else if (match.status === "postponed") {
      statusText = "به تعویق افتاده";
    }

    card.innerHTML = `

      <div class="match-top">

        <span>
          ${escapeHTML(match.league || "مسابقات فوتبال")}
        </span>

        <b>
          ${escapeHTML(statusText)}
        </b>

      </div>

      <div class="match-date">
        ${escapeHTML(date)} • ${escapeHTML(time)}
      </div>

      <div class="match-teams">

        <div class="match-team">

          ${imageOrFallback(match.home_logo, "⚽")}

          <strong>
            ${escapeHTML(match.home_team)}
          </strong>

        </div>

        <div class="match-score">

          <span>${homeScore}</span>

          <small>VS</small>

          <span>${awayScore}</span>

        </div>

        <div class="match-team">

          ${imageOrFallback(match.away_logo, "⚽")}

          <strong>
            ${escapeHTML(match.away_team)}
          </strong>

        </div>

      </div>

    `;

    fragment.appendChild(card);

  });

  matchesGrid.innerHTML = "";
  matchesGrid.appendChild(fragment);

  requestAnimationFrame(setupRevealAnimation);

}


/* =========================================================
   LEAGUE TABLE
========================================================= */

async function loadLeagueTable() {

  if (!leagueTableBody) return;

  try {

    const { data, error } = await db
      .from("league_table")
      .select(`
        id,
        team,
        logo_url,
        played,
        wins,
        draws,
        losses,
        goals_for,
        goals_against,
        points,
        position
      `)
      .eq("is_published", true)
      .order("position", {
        ascending: true,
        nullsFirst: false
      })
      .order("points", {
        ascending: false
      })
      .limit(50);

    /*
      اگر جدول league_table هنوز ساخته نشده باشد،
      فقط حالت خالی نمایش داده می‌شود.
    */

    if (error) {

      console.warn(
        "League table is unavailable:",
        error.message
      );

      renderLeagueTable([]);

      return;
    }

    renderLeagueTable(data || []);

  } catch (error) {

    console.error("League table error:", error);

    renderLeagueTable([]);

  }

}


function renderLeagueTable(teams) {

  if (!leagueTableBody) return;

  if (!teams.length) {

    leagueTableBody.innerHTML = "";

    if (tableEmpty) {
      tableEmpty.hidden = false;
    }

    return;
  }

  if (tableEmpty) {
    tableEmpty.hidden = true;
  }

  const fragment = document.createDocumentFragment();

  teams.forEach((team, index) => {

    const row = document.createElement("tr");

    const position =
      team.position ||
      index + 1;

    row.innerHTML = `

      <td>
        <strong class="table-position">
          ${persianNumber(position)}
        </strong>
      </td>

      <td>

        <div class="table-team">

          ${imageOrFallback(team.logo_url, "⚽")}

          <strong>
            ${escapeHTML(team.team)}
          </strong>

        </div>

      </td>

      <td>
        ${persianNumber(team.played || 0)}
      </td>

      <td>
        ${persianNumber(team.wins || 0)}
      </td>

      <td>
        ${persianNumber(team.draws || 0)}
      </td>

      <td>
        ${persianNumber(team.losses || 0)}
      </td>

      <td>
        <strong class="table-points">
          ${persianNumber(team.points || 0)}
        </strong>
      </td>

    `;

    fragment.appendChild(row);

  });

  leagueTableBody.innerHTML = "";
  leagueTableBody.appendChild(fragment);

}


/* =========================================================
   ACTIVE SECTION NAV
========================================================= */

function setupScrollNavigation() {

  const sections = [
    ...$$("main section[id]")
  ];

  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver(
    (entries) => {

      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort(
          (a, b) =>
            b.intersectionRatio -
            a.intersectionRatio
        );

      if (!visible.length) return;

      const id = visible[0].target.id;

      navLinks.forEach((link) => {

        link.classList.toggle(
          "active",
          link.getAttribute("href") === `#${id}`
        );

      });

    },
    {
      threshold: [0.15, 0.35, 0.6],
      rootMargin: "-15% 0px -55% 0px"
    }
  );

  sections.forEach((section) => {
    observer.observe(section);
  });

}


/* =========================================================
   HEADER SCROLL EFFECT
========================================================= */

function setupHeaderEffect() {

  const header = $(".header");

  if (!header) return;

  let ticking = false;

  window.addEventListener(
    "scroll",
    () => {

      if (ticking) return;

      ticking = true;

      requestAnimationFrame(() => {

        header.classList.toggle(
          "scrolled",
          window.scrollY > 20
        );

        ticking = false;

      });

    },
    {
      passive: true
    }
  );

}


/* =========================================================
   SMOOTH ANCHOR SCROLL
========================================================= */

$$('a[href^="#"]').forEach((link) => {

  link.addEventListener("click", (event) => {

    const targetId =
      link.getAttribute("href");

    if (
      !targetId ||
      targetId === "#"
    ) {
      return;
    }

    const target =
      document.querySelector(targetId);

    if (!target) return;

    event.preventDefault();

    const header =
      $(".header");

    const offset =
      header
        ? header.offsetHeight + 10
        : 0;

    const top =
      target.getBoundingClientRect().top +
      window.scrollY -
      offset;

    window.scrollTo({
      top,
      behavior: "smooth"
    });

  });

});


/* =========================================================
   INITIAL LOAD
========================================================= */

async function initFootballia() {

  console.log("⚽ Footballia starting...");

  /*
    همه درخواست‌ها همزمان اجرا می‌شوند
    تا صفحه سریع‌تر بالا بیاید.
  */

  await Promise.allSettled([
    loadNews(),
    loadPlayers(),
    loadMatches(),
    loadLeagueTable()
  ]);

  setupScrollNavigation();
  setupHeaderEffect();

  requestAnimationFrame(() => {
    setupRevealAnimation();
  });

  console.log("⚽ Footballia ready!");
}


/* =========================================================
   START
========================================================= */

if (document.readyState === "loading") {

  document.addEventListener(
    "DOMContentLoaded",
    initFootballia
  );

} else {

  initFootballia();

}