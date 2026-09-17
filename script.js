/* =========================================================
   FOOTBALLIA — MAIN SCRIPT
   Supabase + News + Players + Matches + League Table
========================================================= */

const SUPABASE_URL =
  "https://zalrujwcdrpeyibaoxss.supabase.co";

const SUPABASE_KEY =
  "sb_publishable_kfRGV3Ugx0HtFfO_atcU_Q_tsKMm_BB";

const {
  createClient
} = supabase;

const db = createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);


/* =========================================================
   HELPERS
========================================================= */

const $ = (selector) =>
  document.querySelector(selector);

const $$ = (selector) =>
  document.querySelectorAll(selector);


function escapeHTML(value) {

  if (value === null || value === undefined) {
    return "";
  }

  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}


function safeURL(url) {

  if (!url) return "";

  try {

    const parsed =
      new URL(url);

    if (
      parsed.protocol === "http:" ||
      parsed.protocol === "https:"
    ) {
      return parsed.href;
    }

  } catch (_) {}

  return "";
}


function formatNumber(number) {

  return new Intl.NumberFormat(
    "fa-IR"
  ).format(number || 0);

}


function formatDate(date) {

  if (!date) return "";

  const d =
    new Date(date);

  if (Number.isNaN(d.getTime())) {
    return "";
  }

  return new Intl.DateTimeFormat(
    "fa-IR",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    }
  ).format(d);

}


/* =========================================================
   EMPTY / ERROR STATES
========================================================= */

function showEmpty(id, show = true) {

  const element =
    document.getElementById(id);

  if (!element) return;

  element.hidden = !show;

}


function showError(
  containerId,
  message
) {

  const container =
    document.getElementById(containerId);

  if (!container) return;

  container.innerHTML = `
    <div class="empty-box">
      <span>⚠️</span>
      <p>${escapeHTML(message)}</p>
    </div>
  `;

}


/* =========================================================
   MOBILE MENU
========================================================= */

const menuButton =
  $("#menuButton");

const mainNav =
  $("#mainNav");


if (menuButton && mainNav) {

  menuButton.addEventListener(
    "click",
    () => {

      mainNav.classList.toggle(
        "open"
      );

    }
  );


  mainNav.addEventListener(
    "click",
    (event) => {

      if (
        event.target.tagName === "A"
      ) {

        mainNav.classList.remove(
          "open"
        );

      }

    }
  );

}


/* =========================================================
   NEWS
========================================================= */

let allNews = [];


async function loadNews() {

  const grid =
    $("#newsGrid");

  if (!grid) return;

  try {

    const {
      data,
      error
    } = await db
      .from("news")
      .select(`
        id,
        title,
        category,
        content,
        image_url,
        is_published,
        published_at,
        created_at
      `)
      .eq(
        "is_published",
        true
      )
      .order(
        "published_at",
        {
          ascending: false,
          nullsFirst: false
        }
      )
      .limit(50);


    if (error) {
      throw error;
    }


    allNews =
      data || [];


    renderNews(
      allNews
    );


    const counter =
      $("#newsCount");

    if (counter) {

      counter.textContent =
        formatNumber(
          allNews.length
        );

    }

  } catch (error) {

    console.error(
      "News error:",
      error
    );

    showError(
      "newsGrid",
      "دریافت اخبار با مشکل روبه‌رو شد."
    );

  }

}


function renderNews(newsList) {

  const grid =
    $("#newsGrid");

  const empty =
    $("#newsEmpty");

  if (!grid) return;


  if (!newsList.length) {

    grid.innerHTML = "";

    if (empty) {
      empty.hidden = false;
    }

    return;

  }


  if (empty) {
    empty.hidden = true;
  }


  const html =
    newsList
      .map((news) => {

        const image =
          safeURL(
            news.image_url
          );

        const title =
          escapeHTML(
            news.title
          );

        const category =
          escapeHTML(
            news.category ||
            "فوتبال"
          );

        const content =
          escapeHTML(
            news.content ||
            ""
          );


        return `
          <article class="news-card reveal">

            ${
              image
                ? `
                  <div class="news-image">
                    <img
                      src="${image}"
                      alt="${title}"
                      loading="lazy"
                      decoding="async"
                    >
                  </div>
                `
                : `
                  <div class="news-image news-image-placeholder">
                    ⚽
                  </div>
                `
            }

            <div class="news-content">

              <div class="news-meta">
                <span>
                  ${category}
                </span>

                <small>
                  ${formatDate(
                    news.published_at ||
                    news.created_at
                  )}
                </small>
              </div>

              <h3>
                ${title}
              </h3>

              <p>
                ${content}
              </p>

            </div>

          </article>
        `;

      })
      .join("");


  grid.innerHTML =
    html;


  observeReveals();

}


/* =========================================================
   NEWS SEARCH
========================================================= */

const searchInput =
  $("#searchInput");


if (searchInput) {

  searchInput.addEventListener(
    "input",
    () => {

      const query =
        searchInput.value
          .trim()
          .toLowerCase();


      if (!query) {

        renderNews(
          allNews
        );

        return;

      }


      const filtered =
        allNews.filter(
          (news) => {

            const text =
              [
                news.title,
                news.category,
                news.content
              ]
                .filter(Boolean)
                .join(" ")
                .toLowerCase();


            return text.includes(
              query
            );

          }
        );


      renderNews(
        filtered
      );

    }
  );

}


/* =========================================================
   PLAYERS
========================================================= */

async function loadPlayers() {

  const grid =
    $("#playersGrid");

  if (!grid) return;


  try {

    const {
      data,
      error
    } = await db
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
      .eq(
        "is_published",
        true
      )
      .order(
        "created_at",
        {
          ascending: false
        }
      )
      .limit(50);


    if (error) {
      throw error;
    }


    const players =
      data || [];


    const counter =
      $("#playerCount");

    if (counter) {

      counter.textContent =
        formatNumber(
          players.length
        );

    }


    renderPlayers(
      players
    );

  } catch (error) {

    console.error(
      "Players error:",
      error
    );

    showError(
      "playersGrid",
      "دریافت بازیکنان با مشکل روبه‌رو شد."
    );

  }

}


function renderPlayers(players) {

  const grid =
    $("#playersGrid");

  const empty =
    $("#playersEmpty");

  if (!grid) return;


  if (!players.length) {

    grid.innerHTML = "";

    if (empty) {
      empty.hidden = false;
    }

    return;

  }


  if (empty) {
    empty.hidden = true;
  }


  grid.innerHTML =
    players
      .map((player) => {

        const image =
          safeURL(
            player.image_url
          );

        const name =
          escapeHTML(
            player.name
          );

        const country =
          escapeHTML(
            player.country ||
            "—"
          );

        const position =
          escapeHTML(
            player.position ||
            "بازیکن"
          );

        const number =
          escapeHTML(
            player.number ||
            ""
          );

        const icon =
          escapeHTML(
            player.icon ||
            "⭐"
          );


        return `
          <article class="player-card reveal">

            <div class="player-top">

              <div class="player-number">
                ${
                  number ||
                  "#"
                }
              </div>

              <div class="player-icon">
                ${icon}
              </div>

            </div>


            <div class="player-photo">

              ${
                image
                  ? `
                    <img
                      src="${image}"
                      alt="${name}"
                      loading="lazy"
                      decoding="async"
                    >
                  `
                  : `
                    <div class="player-placeholder">
                      ${icon}
                    </div>
                  `
              }

            </div>


            <div class="player-info">

              <span>
                ${position}
              </span>

              <h3>
                ${name}
              </h3>

              <p>
                🌍 ${country}
              </p>

            </div>

          </article>
        `;

      })
      .join("");


  observeReveals();

}


/* =========================================================
   MATCHES
========================================================= */

async function loadMatches() {

  const grid =
    $("#matchesGrid");

  if (!grid) return;


  try {

    const {
      data,
      error
    } = await db
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
        status,
        is_published
      `)
      .eq(
        "is_published",
        true
      )
      .order(
        "match_date",
        {
          ascending: true
        }
      )
      .limit(50);


    if (error) {
      throw error;
    }


    renderMatches(
      data || []
    );

  } catch (error) {

    console.error(
      "Matches error:",
      error
    );

    showError(
      "matchesGrid",
      "هنوز بازی‌ای ثبت نشده یا دریافت بازی‌ها ممکن نیست."
    );

  }

}


function matchStatusText(status) {

  switch (status) {

    case "live":
      return "🔴 زنده";

    case "finished":
      return "پایان‌یافته";

    case "postponed":
      return "به تعویق افتاده";

    default:
      return "آینده";

  }

}


function renderMatches(matches) {

  const grid =
    $("#matchesGrid");

  const empty =
    $("#matchesEmpty");

  if (!grid) return;


  if (!matches.length) {

    grid.innerHTML = "";

    if (empty) {
      empty.hidden = false;
    }

    return;

  }


  if (empty) {
    empty.hidden = true;
  }


  grid.innerHTML =
    matches
      .map((match) => {

        const homeLogo =
          safeURL(
            match.home_logo
          );

        const awayLogo =
          safeURL(
            match.away_logo
          );

        const homeTeam =
          escapeHTML(
            match.home_team
          );

        const awayTeam =
          escapeHTML(
            match.away_team
          );

        const league =
          escapeHTML(
            match.league ||
            "مسابقه فوتبال"
          );


        const hasScore =
          match.home_score !== null &&
          match.away_score !== null;


        return `
          <article class="match-card reveal">

            <div class="match-head">

              <span>
                ${league}
              </span>

              <b class="match-status status-${escapeHTML(
                match.status
              )}">
                ${matchStatusText(
                  match.status
                )}
              </b>

            </div>


            <div class="match-date">
              🕒 ${formatDate(
                match.match_date
              )}
            </div>


            <div class="match-teams">

              <div class="match-team">

                ${
                  homeLogo
                    ? `
                      <img
                        src="${homeLogo}"
                        alt="${homeTeam}"
                        loading="lazy"
                      >
                    `
                    : `
                      <div class="team-logo-placeholder">
                        ⚽
                      </div>
                    `
                }

                <strong>
                  ${homeTeam}
                </strong>

              </div>


              <div class="match-score">

                ${
                  hasScore
                    ? `
                      <strong>
                        ${escapeHTML(
                          match.home_score
                        )}
                        -
                        ${escapeHTML(
                          match.away_score
                        )}
                      </strong>
                    `
                    : `
                      <strong>
                        VS
                      </strong>
                    `
                }

              </div>


              <div class="match-team">

                ${
                  awayLogo
                    ? `
                      <img
                        src="${awayLogo}"
                        alt="${awayTeam}"
                        loading="lazy"
                      >
                    `
                    : `
                      <div class="team-logo-placeholder">
                        ⚽
                      </div>
                    `
                }

                <strong>
                  ${awayTeam}
                </strong>

              </div>

            </div>

          </article>
        `;

      })
      .join("");


  observeReveals();

}


/* =========================================================
   LEAGUE TABLE
========================================================= */

async function loadLeagueTable() {

  const body =
    $("#leagueTableBody");

  if (!body) return;


  try {

    const {
      data,
      error
    } = await db
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
      .eq(
        "is_published",
        true
      )
      .order(
        "position",
        {
          ascending: true,
          nullsFirst: false
        }
      )
      .order(
        "points",
        {
          ascending: false
        }
      )
      .limit(50);


    if (error) {
      throw error;
    }


    renderLeagueTable(
      data || []
    );

  } catch (error) {

    console.error(
      "League table error:",
      error
    );

    body.innerHTML = "";

    showEmpty(
      "tableEmpty",
      true
    );

  }

}


function renderLeagueTable(teams) {

  const body =
    $("#leagueTableBody");

  if (!body) return;


  if (!teams.length) {

    body.innerHTML = "";

    showEmpty(
      "tableEmpty",
      true
    );

    return;

  }


  showEmpty(
    "tableEmpty",
    false
  );


  body.innerHTML =
    teams
      .map((team, index) => {

        const logo =
          safeURL(
            team.logo_url
          );

        const position =
          team.position ||
          index + 1;


        return `
          <tr class="reveal">

            <td>
              <strong>
                ${formatNumber(
                  position
                )}
              </strong>
            </td>


            <td>

              <div class="table-team">

                ${
                  logo
                    ? `
                      <img
                        src="${logo}"
                        alt="${escapeHTML(
                          team.team
                        )}"
                        loading="lazy"
                      >
                    `
                    : `
                      <span class="table-team-icon">
                        ⚽
                      </span>
                    `
                }

                <strong>
                  ${escapeHTML(
                    team.team
                  )}
                </strong>

              </div>

            </td>


            <td>
              ${formatNumber(
                team.played
              )}
            </td>

            <td>
              ${formatNumber(
                team.wins
              )}
            </td>

            <td>
              ${formatNumber(
                team.draws
              )}
            </td>

            <td>
              ${formatNumber(
                team.losses
              )}
            </td>

            <td>
              <strong class="points">
                ${formatNumber(
                  team.points
                )}
              </strong>
            </td>

          </tr>
        `;

      })
      .join("");


  observeReveals();

}


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const navLinks =
  $$(".nav a[href^='#']");

const sections =
  $$("main section[id]");


if (
  navLinks.length &&
  sections.length
) {

  const navObserver =
    new IntersectionObserver(
      (entries) => {

        entries.forEach(
          (entry) => {

            if (!entry.isIntersecting) {
              return;
            }


            navLinks.forEach(
              (link) => {

                link.classList.remove(
                  "active"
                );

                if (
                  link.getAttribute(
                    "href"
                  ) ===
                  `#${entry.target.id}`
                ) {

                  link.classList.add(
                    "active"
                  );

                }

              }
            );

          }
        );

      },
      {
        rootMargin:
          "-35% 0px -55% 0px"
      }
    );


  sections.forEach(
    (section) => {

      navObserver.observe(
        section
      );

    }
  );

}


/* =========================================================
   REVEAL ANIMATIONS
========================================================= */

let revealObserver = null;


function observeReveals() {

  const elements =
    $$(".reveal:not(.revealed)");

  if (!elements.length) {
    return;
  }


  if (!revealObserver) {

    revealObserver =
      new IntersectionObserver(
        (entries) => {

          entries.forEach(
            (entry) => {

              if (
                entry.isIntersecting
              ) {

                entry.target.classList.add(
                  "revealed"
                );

                revealObserver.unobserve(
                  entry.target
                );

              }

            }
          );

        },
        {
          threshold: 0.08
        }
      );

  }


  elements.forEach(
    (element) => {

      revealObserver.observe(
        element
      );

    }
  );

}


/* =========================================================
   SMOOTH ANCHOR SCROLL
========================================================= */

$$('a[href^="#"]').forEach(
  (link) => {

    link.addEventListener(
      "click",
      (event) => {

        const targetId =
          link
            .getAttribute("href")
            ?.substring(1);

        if (!targetId) return;

        const target =
          document.getElementById(
            targetId
          );

        if (!target) return;

        event.preventDefault();

        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

      }
    );

  }
);


/* =========================================================
   IMAGE ERROR HANDLING
========================================================= */

document.addEventListener(
  "error",
  (event) => {

    const element =
      event.target;

    if (
      element &&
      element.tagName === "IMG"
    ) {

      element.style.display =
        "none";

    }

  },
  true
);


/* =========================================================
   INITIAL LOAD
========================================================= */

async function initFootballia() {

  observeReveals();


  /*
    همه درخواست‌ها هم‌زمان اجرا می‌شوند
    تا سایت سریع‌تر بالا بیاید.
  */

  await Promise.allSettled([

    loadNews(),

    loadPlayers(),

    loadMatches(),

    loadLeagueTable()

  ]);

}


initFootballia();


/* =========================================================
   REFRESH WHEN PAGE BECOMES VISIBLE
========================================================= */

document.addEventListener(
  "visibilitychange",
  () => {

    if (
      document.visibilityState ===
      "visible"
    ) {

      /*
        فقط داده‌های سبک را دوباره می‌گیریم.
      */

      loadNews();
      loadMatches();
      loadLeagueTable();

    }

  }
);