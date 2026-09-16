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
   ESCAPE HTML
========================= */

function escapeHTML(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

/* =========================
   DATE
========================= */

function formatDate(value) {
  if (!value) {
    return "امروز";
  }

  try {
    return new Date(value)
      .toLocaleDateString("fa-IR");
  } catch {
    return "امروز";
  }
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

  let coverHTML = "";

  if (news.image_url) {
    const imageURL =
      escapeHTML(news.image_url);

    coverHTML = `
      <div
        class="news-cover"
        style="
          background:
          linear-gradient(
            rgba(0,0,0,.18),
            rgba(0,0,0,.68)
          ),
          url('${imageURL}')
          center/cover no-repeat;
        "
      >
        <span class="category">
          ${category}
        </span>
      </div>
    `;
  } else {
    coverHTML = `
      <div class="news-cover">
        <span class="cover-icon">⚽</span>
        <span class="category">
          ${category}
        </span>
      </div>
    `;
  }

  return `
    <article class="news-card">
      ${coverHTML}

      <div class="news-body">
        <span class="news-date">
          ${date}
        </span>

        <h3>
          ${title}
        </h3>

        <p>
          ${content}
        </p>
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
      .eq(
        "is_published",
        true
      )
      .order(
        "published_at",
        {
          ascending: false
        }
      );

    if (error) {
      console.error(
        "Supabase news error:",
        error
      );
      return;
    }

    if (!data || data.length === 0) {
      return;
    }

    newsGrid.innerHTML =
      data
        .map(createNewsCard)
        .join("");

    if (emptyMessage) {
      emptyMessage.hidden = true;
    }

  } catch (error) {
    console.error(
      "News loading error:",
      error
    );
  }
}

/* =========================
   50 FOOTBALL PLAYERS
========================= */

const players = [

  /* ===== REAL MADRID ===== */

  {
    name: "Cristiano Ronaldo",
    country: "PORTUGAL",
    number: "07",
    icon: "👑",
    position: "Forward"
  },

  {
    name: "Kylian Mbappé",
    country: "FRANCE",
    number: "10",
    icon: "⚡",
    position: "Forward"
  },

  {
    name: "Vinícius Júnior",
    country: "BRAZIL",
    number: "07",
    icon: "🔥",
    position: "Forward"
  },

  {
    name: "Jude Bellingham",
    country: "ENGLAND",
    number: "05",
    icon: "⭐",
    position: "Midfielder"
  },

  {
    name: "Rodrygo",
    country: "BRAZIL",
    number: "11",
    icon: "⚽",
    position: "Forward"
  },

  {
    name: "Federico Valverde",
    country: "URUGUAY",
    number: "08",
    icon: "💥",
    position: "Midfielder"
  },

  {
    name: "Eduardo Camavinga",
    country: "FRANCE",
    number: "06",
    icon: "✨",
    position: "Midfielder"
  },

  {
    name: "Aurélien Tchouaméni",
    country: "FRANCE",
    number: "14",
    icon: "🛡️",
    position: "Midfielder"
  },

  {
    name: "Arda Güler",
    country: "TURKEY",
    number: "15",
    icon: "✨",
    position: "Midfielder"
  },

  {
    name: "Brahim Díaz",
    country: "MOROCCO",
    number: "21",
    icon: "⚡",
    position: "Forward"
  },

  {
    name: "Thibaut Courtois",
    country: "BELGIUM",
    number: "01",
    icon: "🧤",
    position: "Goalkeeper"
  },

  {
    name: "Andriy Lunin",
    country: "UKRAINE",
    number: "13",
    icon: "🧤",
    position: "Goalkeeper"
  },

  {
    name: "Éder Militão",
    country: "BRAZIL",
    number: "03",
    icon: "🧱",
    position: "Defender"
  },

  {
    name: "Antonio Rüdiger",
    country: "GERMANY",
    number: "22",
    icon: "🛡️",
    position: "Defender"
  },

  {
    name: "Dani Carvajal",
    country: "SPAIN",
    number: "02",
    icon: "🛡️",
    position: "Defender"
  },

  {
    name: "Ferland Mendy",
    country: "FRANCE",
    number: "23",
    icon: "💨",
    position: "Defender"
  },

  {
    name: "Fran García",
    country: "SPAIN",
    number: "20",
    icon: "💨",
    position: "Defender"
  },

  {
    name: "Dean Huijsen",
    country: "SPAIN",
    number: "24",
    icon: "🧱",
    position: "Defender"
  },

  {
    name: "Dani Ceballos",
    country: "SPAIN",
    number: "19",
    icon: "🎯",
    position: "Midfielder"
  },

  {
    name: "Endrick",
    country: "BRAZIL",
    number: "16",
    icon: "🔥",
    position: "Forward"
  },

  /* ===== OTHER STARS ===== */

  {
    name: "Lionel Messi",
    country: "ARGENTINA",
    number: "10",
    icon: "⭐",
    position: "Forward"
  },

  {
    name: "Erling Haaland",
    country: "NORWAY",
    number: "09",
    icon: "🤖",
    position: "Forward"
  },

  {
    name: "Lamine Yamal",
    country: "SPAIN",
    number: "10",
    icon: "🌟",
    position: "Forward"
  },

  {
    name: "Ousmane Dembélé",
    country: "FRANCE",
    number: "10",
    icon: "⚡",
    position: "Forward"
  },

  {
    name: "Mohamed Salah",
    country: "EGYPT",
    number: "11",
    icon: "🔥",
    position: "Forward"
  },

  {
    name: "Harry Kane",
    country: "ENGLAND",
    number: "09",
    icon: "🎯",
    position: "Forward"
  },

  {
    name: "Jamal Musiala",
    country: "GERMANY",
    number: "10",
    icon: "✨",
    position: "Midfielder"
  },

  {
    name: "Florian Wirtz",
    country: "GERMANY",
    number: "07",
    icon: "🎩",
    position: "Midfielder"
  },

  {
    name: "Bukayo Saka",
    country: "ENGLAND",
    number: "07",
    icon: "🔥",
    position: "Forward"
  },

  {
    name: "Pedri",
    country: "SPAIN",
    number: "08",
    icon: "🧠",
    position: "Midfielder"
  },

  {
    name: "Robert Lewandowski",
    country: "POLAND",
    number: "09",
    icon: "🎯",
    position: "Forward"
  },

  {
    name: "Raphinha",
    country: "BRAZIL",
    number: "11",
    icon: "⚡",
    position: "Forward"
  },

  {
    name: "Kevin De Bruyne",
    country: "BELGIUM",
    number: "08",
    icon: "🎯",
    position: "Midfielder"
  },

  {
    name: "Virgil van Dijk",
    country: "NETHERLANDS",
    number: "04",
    icon: "🧱",
    position: "Defender"
  },

  {
    name: "William Saliba",
    country: "FRANCE",
    number: "02",
    icon: "🛡️",
    position: "Defender"
  },

  {
    name: "Achraf Hakimi",
    country: "MOROCCO",
    number: "02",
    icon: "💨",
    position: "Defender"
  },

  {
    name: "Khvicha Kvaratskhelia",
    country: "GEORGIA",
    number: "07",
    icon: "🔥",
    position: "Forward"
  },

  {
    name: "Lautaro Martínez",
    country: "ARGENTINA",
    number: "10",
    icon: "🎯",
    position: "Forward"
  },

  {
    name: "Julián Álvarez",
    country: "ARGENTINA",
    number: "19",
    icon: "⚡",
    position: "Forward"
  },

  {
    name: "Cole Palmer",
    country: "ENGLAND",
    number: "10",
    icon: "✨",
    position: "Midfielder"
  },

  {
    name: "Phil Foden",
    country: "ENGLAND",
    number: "47",
    icon: "⚡",
    position: "Midfielder"
  },

  {
    name: "Rodri",
    country: "SPAIN",
    number: "16",
    icon: "🧠",
    position: "Midfielder"
  },

  {
    name: "Martin Ødegaard",
    country: "NORWAY",
    number: "08",
    icon: "🎩",
    position: "Midfielder"
  },

  {
    name: "Declan Rice",
    country: "ENGLAND",
    number: "41",
    icon: "🛡️",
    position: "Midfielder"
  },

  {
    name: "Victor Osimhen",
    country: "NIGERIA",
    number: "45",
    icon: "🔥",
    position: "Forward"
  },

  {
    name: "Rúben Dias",
    country: "PORTUGAL",
    number: "03",
    icon: "🧱",
    position: "Defender"
  },

  {
    name: "Bernardo Silva",
    country: "PORTUGAL",
    number: "20",
    icon: "✨",
    position: "Midfielder"
  },

  {
    name: "Antoine Griezmann",
    country: "FRANCE",
    number: "07",
    icon: "🎯",
    position: "Forward"
  },

  {
    name: "Neymar",
    country: "BRAZIL",
    number: "10",
    icon: "🇧🇷",
    position: "Forward"
  },

  {
    name: "Vincent Aboubakar",
    country: "CAMEROON",
    number: "10",
    icon: "⚽",
    position: "Forward"
  },

  {
    name: "Sandro Tonali",
    country: "ITALY",
    number: "08",
    icon: "🎯",
    position: "Midfielder"
  },

  {
    name: "Alessandro Bastoni",
    country: "ITALY",
    number: "95",
    icon: "🛡️",
    position: "Defender"
  },

  {
    name: "Mike Maignan",
    country: "FRANCE",
    number: "16",
    icon: "🧤",
    position: "Goalkeeper"
  }
];

/* =========================
   LOAD PLAYERS
========================= */

function loadPlayers() {

  const playersGrid =
    document.querySelector(".players-grid");

  if (!playersGrid) {
    console.error(
      "players-grid پیدا نشد!"
    );
    return;
  }

  playersGrid.innerHTML =
    players.map(player => {

      return `
        <article class="player-card">

          <span class="player-number">
            ${player.number}
          </span>

          <div class="player-light"></div>

          <div class="player-symbol">
            ${player.icon}
          </div>

          <div class="player-details">

            <span>
              ${player.country}
            </span>

            <h3>
              ${escapeHTML(player.name)}
            </h3>

            <small>
              ${player.position}
            </small>

          </div>

        </article>
      `;

    }).join("");

  console.log(
    "Footballia players:",
    players.length
  );
}

/* =========================
   SEARCH
========================= */

function filterNews() {

  const input =
    document.getElementById(
      "searchInput"
    );

  const cards =
    document.querySelectorAll(
      ".news-card"
    );

  const emptyMessage =
    document.getElementById(
      "newsEmpty"
    );

  if (!input) {
    return;
  }

  const query =
    input.value
      .trim()
      .toLowerCase();

  let visibleCount = 0;

  cards.forEach(card => {

    const text =
      card.innerText.toLowerCase();

    const visible =
      text.includes(query);

    card.style.display =
      visible ? "" : "none";

    if (visible) {
      visibleCount++;
    }

  });

  if (emptyMessage) {
    emptyMessage.hidden =
      visibleCount !== 0;
  }
}

/* =========================
   SEARCH EVENT
========================= */

const searchInput =
  document.getElementById(
    "searchInput"
  );

if (searchInput) {

  searchInput.addEventListener(
    "input",
    filterNews
  );

}

/* =========================
   START
========================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    loadNews();

    loadPlayers();

  }
);