"use strict";

/* =========================
   SUPABASE
========================= */

const SUPABASE_URL =
  "https://zalrujwcdrpeyibaoxss.supabase.co";

const SUPABASE_KEY =
  "sb_publishable_kfRGV3Ugx0HtFfO_atcU_Q_tsKMm_BB";

let supabaseClient = null;

if (window.supabase) {
  supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
  );
}


/* =========================
   HELPERS
========================= */

function escapeHTML(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}


function formatDate(value) {
  if (!value) return "امروز";

  try {
    return new Date(value).toLocaleDateString("fa-IR");
  } catch {
    return "امروز";
  }
}


/* =========================
   MOBILE MENU
========================= */

const menuButton =
  document.getElementById("menuButton");

const mainNav =
  document.getElementById("mainNav");

if (menuButton && mainNav) {

  menuButton.addEventListener("click", () => {
    mainNav.classList.toggle("open");
  });

  mainNav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("open");
    });
  });
}


/* =========================
   NEWS CARD
========================= */

function createNewsCard(news) {

  const title =
    escapeHTML(news.title || "بدون عنوان");

  const category =
    escapeHTML(news.category || "⚽ فوتبال");

  const content =
    escapeHTML(news.content || "");

  const date =
    formatDate(news.published_at);

  let coverHTML = `
    <div class="news-cover">
      <span class="cover-icon">⚽</span>
      <span class="category">${category}</span>
    </div>
  `;

  if (news.image_url) {

    const imageURL =
      escapeHTML(news.image_url);

    coverHTML = `
      <div
        class="news-cover"
        style="
          background-image:
          linear-gradient(
            rgba(0,0,0,.12),
            rgba(0,0,0,.72)
          ),
          url('${imageURL}');
          background-size: cover;
          background-position: center;
        "
      >
        <span class="category">
          ${category}
        </span>
      </div>
    `;
  }

  return `
    <article class="news-card reveal">

      ${coverHTML}

      <div class="news-body">

        <span class="news-date">
          ${date}
        </span>

        <h3>${title}</h3>

        <p>${content}</p>

      </div>

    </article>
  `;
}


/* =========================
   LOAD NEWS
========================= */

async function loadNews() {

  const newsGrid =
    document.getElementById("newsGrid");

  const emptyMessage =
    document.getElementById("newsEmpty");

  if (!newsGrid || !supabaseClient) {
    return;
  }

  try {

    const {
      data,
      error
    } = await supabaseClient
      .from("news")
      .select(
        "id,title,category,content,image_url,published_at"
      )
      .eq("is_published", true)
      .order("published_at", {
        ascending: false
      });

    if (error) {
      console.error("News error:", error);
      return;
    }

    if (!data || data.length === 0) {

      if (emptyMessage) {
        emptyMessage.hidden = false;
      }

      return;
    }

    newsGrid.innerHTML =
      data.map(createNewsCard).join("");

    const count =
      document.getElementById("newsCount");

    if (count) {
      count.textContent =
        data.length.toLocaleString("fa-IR");
    }

    if (emptyMessage) {
      emptyMessage.hidden = true;
    }

    observeReveals();

  } catch (error) {

    console.error(
      "News loading error:",
      error
    );
  }
}


/* =========================
   PLAYER CARD
========================= */

function createPlayerCard(player) {

  const name =
    escapeHTML(player.name || "بازیکن");

  const country =
    escapeHTML(player.country || "");

  const number =
    escapeHTML(player.number || "");

  const position =
    escapeHTML(player.position || "");

  const icon =
    escapeHTML(player.icon || "⚽");

  let imageHTML = "";

  if (player.image_url) {

    const imageURL =
      escapeHTML(player.image_url);

    imageHTML = `
      <div
        class="player-image"
        style="
          background-image:
          linear-gradient(
            rgba(0,0,0,.08),
            rgba(0,0,0,.58)
          ),
          url('${imageURL}');
        "
      ></div>
    `;
  }

  return `
    <article class="player-card reveal">

      <span class="player-number">
        ${number}
      </span>

      <div class="player-light"></div>

      ${imageHTML}

      <div class="player-symbol">
        ${icon}
      </div>

      <div class="player-details">

        <span>${country}</span>

        <h3>${name}</h3>

        <small>${position}</small>

      </div>

    </article>
  `;
}


/* =========================
   LOAD PLAYERS
========================= */

async function loadPlayers() {

  const playersGrid =
    document.getElementById("playersGrid");

  if (!playersGrid || !supabaseClient) {
    return;
  }

  try {

    const {
      data,
      error
    } = await supabaseClient
      .from("players")
      .select(
        "id,name,country,number,position,icon,image_url"
      )
      .eq("is_published", true)
      .order("created_at", {
        ascending: false
      });

    if (error) {
      console.error(
        "Players error:",
        error
      );
      return;
    }

    if (!data || data.length === 0) {
      return;
    }

    /*
      بازیکنان Supabase بعد از بازیکنان
      پیش‌فرض قرار می‌گیرند.
    */

    const fragment =
      document.createDocumentFragment();

    const temp =
      document.createElement("div");

    temp.innerHTML =
      data.map(createPlayerCard).join("");

    while (temp.firstElementChild) {
      fragment.appendChild(
        temp.firstElementChild
      );
    }

    playersGrid.appendChild(fragment);

    const count =
      document.getElementById("playerCount");

    if (count) {
      count.textContent =
        data.length.toLocaleString("fa-IR");
    }

    observeReveals();

  } catch (error) {

    console.error(
      "Players loading error:",
      error
    );
  }
}


/* =========================
   SEARCH
========================= */

function filterNews() {

  const input =
    document.getElementById("searchInput");

  const cards =
    document.querySelectorAll(".news-card");

  const emptyMessage =
    document.getElementById("newsEmpty");

  if (!input) return;

  const query =
    input.value
      .trim()
      .toLowerCase();

  let visible = 0;

  cards.forEach(card => {

    const text =
      card.innerText.toLowerCase();

    const show =
      text.includes(query);

    card.style.display =
      show ? "" : "none";

    if (show) {
      visible++;
    }
  });

  if (emptyMessage) {
    emptyMessage.hidden =
      visible !== 0;
  }
}


const searchInput =
  document.getElementById("searchInput");

if (searchInput) {

  searchInput.addEventListener(
    "input",
    filterNews
  );
}


/* =========================
   REVEAL OBSERVER
========================= */

let revealObserver = null;

function observeReveals() {

  const elements =
    document.querySelectorAll(
      ".reveal:not(.visible)"
    );

  if (!("IntersectionObserver" in window)) {

    elements.forEach(element => {
      element.classList.add("visible");
    });

    return;
  }

  if (!revealObserver) {

    revealObserver =
      new IntersectionObserver(
        entries => {

          entries.forEach(entry => {

            if (!entry.isIntersecting) {
              return;
            }

            entry.target.classList.add(
              "visible"
            );

            revealObserver.unobserve(
              entry.target
            );

          });

        },
        {
          threshold: .08,
          rootMargin: "0px 0px -40px 0px"
        }
      );
  }

  elements.forEach(element => {
    revealObserver.observe(element);
  });
}


/* =========================
   ACTIVE NAV
========================= */

const sections =
  document.querySelectorAll(
    "main section[id]"
  );

const navLinks =
  document.querySelectorAll(
    ".main-nav a[href^='#']"
  );

if ("IntersectionObserver" in window) {

  const sectionObserver =
    new IntersectionObserver(
      entries => {

        entries.forEach(entry => {

          if (!entry.isIntersecting) {
            return;
          }

          navLinks.forEach(link => {
            link.classList.remove("active");
          });

          const active =
            document.querySelector(
              `.main-nav a[href="#${entry.target.id}"]`
            );

          if (active) {
            active.classList.add("active");
          }

        });

      },
      {
        threshold: .35
      }
    );

  sections.forEach(section => {
    sectionObserver.observe(section);
  });
}


/* =========================
   START
========================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    observeReveals();

    loadNews();

    loadPlayers();

  }
);