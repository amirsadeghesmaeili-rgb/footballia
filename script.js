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
   SEARCH
========================= */
function filterNews() {
  const input =
    document.getElementById("searchInput");
  const cards =
    document.querySelectorAll(
      ".news-card"
    );
  const emptyMessage =
    document.getElementById("newsEmpty");
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
  }
);
/* =========================
   FOOTBALL PLAYERS
========================= */

const players = [
  // REAL MADRID
  {
    name: "Kylian Mbappé",
    country: "France",
    position: "Forward",
    number: 10,
    club: "Real Madrid",
    icon: "⚡"
  },
  {
    name: "Vinícius Júnior",
    country: "Brazil",
    position: "Forward",
    number: 7,
    club: "Real Madrid",
    icon: "🔥"
  },
  {
    name: "Jude Bellingham",
    country: "England",
    position: "Midfielder",
    number: 5,
    club: "Real Madrid",
    icon: "⭐"
  },
  {
    name: "Federico Valverde",
    country: "Uruguay",
    position: "Midfielder",
    number: 8,
    club: "Real Madrid",
    icon: "💨"
  },
  {
    name: "Rodrygo",
    country: "Brazil",
    position: "Forward",
    number: 11,
    club: "Real Madrid",
    icon: "⚡"
  },
  {
    name: "Eduardo Camavinga",
    country: "France",
    position: "Midfielder",
    number: 6,
    club: "Real Madrid",
    icon: "💎"
  },
  {
    name: "Aurélien Tchouaméni",
    country: "France",
    position: "Midfielder",
    number: 14,
    club: "Real Madrid",
    icon: "🛡️"
  },
  {
    name: "Arda Güler",
    country: "Türkiye",
    position: "Midfielder",
    number: 15,
    club: "Real Madrid",
    icon: "🎯"
  },
  {
    name: "Brahim Díaz",
    country: "Morocco",
    position: "Forward",
    number: 21,
    club: "Real Madrid",
    icon: "✨"
  },
  {
    name: "Thibaut Courtois",
    country: "Belgium",
    position: "Goalkeeper",
    number: 1,
    club: "Real Madrid",
    icon: "🧤"
  },
  {
    name: "Andriy Lunin",
    country: "Ukraine",
    position: "Goalkeeper",
    number: 13,
    club: "Real Madrid",
    icon: "🧤"
  },
  {
    name: "Antonio Rüdiger",
    country: "Germany",
    position: "Defender",
    number: 22,
    club: "Real Madrid",
    icon: "🛡️"
  },
  {
    name: "Éder Militão",
    country: "Brazil",
    position: "Defender",
    number: 3,
    club: "Real Madrid",
    icon: "🛡️"
  },
  {
    name: "Dean Huijsen",
    country: "Spain",
    position: "Defender",
    number: 4,
    club: "Real Madrid",
    icon: "🛡️"
  },
  {
    name: "Ferland Mendy",
    country: "France",
    position: "Defender",
    number: 23,
    club: "Real Madrid",
    icon: "🛡️"
  },
  {
    name: "Trent Alexander-Arnold",
    country: "England",
    position: "Defender",
    number: 12,
    club: "Real Madrid",
    icon: "🎯"
  },

  // OTHER WORLD STARS
  {
    name: "Lamine Yamal",
    country: "Spain",
    position: "Forward",
    number: 10,
    club: "Barcelona",
    icon: "⚡"
  },
  {
    name: "Lionel Messi",
    country: "Argentina",
    position: "Forward",
    number: 10,
    club: "Inter Miami",
    icon: "👑"
  },
  {
    name: "Cristiano Ronaldo",
    country: "Portugal",
    position: "Forward",
    number: 7,
    club: "Al Nassr",
    icon: "👑"
  },
  {
    name: "Erling Haaland",
    country: "Norway",
    position: "Forward",
    number: 9,
    club: "Manchester City",
    icon: "💥"
  },
  {
    name: "Harry Kane",
    country: "England",
    position: "Forward",
    number: 9,
    club: "Bayern Munich",
    icon: "🎯"
  },
  {
    name: "Ousmane Dembélé",
    country: "France",
    position: "Forward",
    number: 10,
    club: "PSG",
    icon: "⚡"
  },
  {
    name: "Mohamed Salah",
    country: "Egypt",
    position: "Forward",
    number: 11,
    club: "Liverpool",
    icon: "👑"
  },
  {
    name: "Kevin De Bruyne",
    country: "Belgium",
    position: "Midfielder",
    number: 17,
    club: "Napoli",
    icon: "🎯"
  },
  {
    name: "Rodri",
    country: "Spain",
    position: "Midfielder",
    number: 16,
    club: "Barcelona",
    icon: "🧠"
  },
  {
    name: "Declan Rice",
    country: "England",
    position: "Midfielder",
    number: 41,
    club: "Arsenal",
    icon: "🛡️"
  },
  {
    name: "Bruno Fernandes",
    country: "Portugal",
    position: "Midfielder",
    number: 8,
    club: "Manchester United",
    icon: "🎯"
  },
  {
    name: "Vitinha",
    country: "Portugal",
    position: "Midfielder",
    number: 17,
    club: "PSG",
    icon: "✨"
  },
  {
    name: "Khvicha Kvaratskhelia",
    country: "Georgia",
    position: "Forward",
    number: 7,
    club: "PSG",
    icon: "🔥"
  },
  {
    name: "Michael Olise",
    country: "France",
    position: "Forward",
    number: 17,
    club: "Bayern Munich",
    icon: "⚡"
  },
  {
    name: "Rafael Leão",
    country: "Portugal",
    position: "Forward",
    number: 10,
    club: "AC Milan",
    icon: "🔥"
  },
  {
    name: "Bukayo Saka",
    country: "England",
    position: "Forward",
    number: 7,
    club: "Arsenal",
    icon: "⭐"
  },
  {
    name: "Cole Palmer",
    country: "England",
    position: "Midfielder",
    number: 10,
    club: "Chelsea",
    icon: "🎯"
  },
  {
    name: "William Saliba",
    country: "France",
    position: "Defender",
    number: 2,
    club: "Arsenal",
    icon: "🛡️"
  },
  {
    name: "Achraf Hakimi",
    country: "Morocco",
    position: "Defender",
    number: 2,
    club: "PSG",
    icon: "💨"
  },
  {
    name: "Alisson Becker",
    country: "Brazil",
    position: "Goalkeeper",
    number: 1,
    club: "Liverpool",
    icon: "🧤"
  },
  {
    name: "Gianluigi Donnarumma",
    country: "Italy",
    position: "Goalkeeper",
    number: 1,
    club: "Manchester City",
    icon: "🧤"
  },
  {
    name: "Victor Osimhen",
    country: "Nigeria",
    position: "Forward",
    number: 9,
    club: "Galatasaray",
    icon: "💥"
  },
  {
    name: "Jamal Musiala",
    country: "Germany",
    position: "Midfielder",
    number: 10,
    club: "Bayern Munich",
    icon: "✨"
  },
  {
    name: "Florian Wirtz",
    country: "Germany",
    position: "Midfielder",
    number: 10,
    club: "Liverpool",
    icon: "🎯"
  },
  {
    name: "Pedri",
    country: "Spain",
    position: "Midfielder",
    number: 8,
    club: "Barcelona",
    icon: "🧠"
  },
  {
    name: "Pau Cubarsí",
    country: "Spain",
    position: "Defender",
    number: 2,
    club: "Barcelona",
    icon: "🛡️"
  },
  {
    name: "Nuno Mendes",
    country: "Portugal",
    position: "Defender",
    number: 25,
    club: "PSG",
    icon: "💨"
  },
  {
    name: "William Saliba",
    country: "France",
    position: "Defender",
    number: 2,
    club: "Arsenal",
    icon: "🛡️"
  },
  {
    name: "Alessandro Bastoni",
    country: "Italy",
    position: "Defender",
    number: 95,
    club: "Inter",
    icon: "🛡️"
  },
  {
    name: "Lautaro Martínez",
    country: "Argentina",
    position: "Forward",
    number: 10,
    club: "Inter",
    icon: "🔥"
  },
  {
    name: "Julián Álvarez",
    country: "Argentina",
    position: "Forward",
    number: 19,
    club: "Atlético Madrid",
    icon: "⚡"
  },
  {
    name: "Fabián Ruiz",
    country: "Spain",
    position: "Midfielder",
    number: 8,
    club: "PSG",
    icon: "🧠"
  },
  {
    name: "Achraf Hakimi",
    country: "Morocco",
    position: "Defender",
    number: 2,
    club: "PSG",
    icon: "💨"
  },
  {
    name: "Khvicha Kvaratskhelia",
    country: "Georgia",
    position: "Forward",
    number: 7,
    club: "PSG",
    icon: "🔥"
  },
  {
    name: "Rúben Dias",
    country: "Portugal",
    position: "Defender",
    number: 3,
    club: "Manchester City",
    icon: "🛡️"
  },
  {
    name: "Martin Ødegaard",
    country: "Norway",
    position: "Midfielder",
    number: 8,
    club: "Arsenal",
    icon: "🎯"
  },
  {
    name: "Robert Lewandowski",
    country: "Poland",
    position: "Forward",
    number: 9,
    club: "Barcelona",
    icon: "💥"
  },
  {
    name: "Antoine Griezmann",
    country: "France",
    position: "Forward",
    number: 7,
    club: "Atlético Madrid",
    icon: "⭐"
  },
  {
    name: "Son Heung-min",
    country: "South Korea",
    position: "Forward",
    number: 7,
    club: "LAFC",
    icon: "⚡"
  }
];

/* =========================
   RENDER PLAYERS
========================= */

function createPlayerCard(player) {
  return `
    <article class="player-card">

      <span class="player-number">
        ${escapeHTML(player.number)}
      </span>

      <div class="player-light"></div>

      <div class="player-symbol">
        ${escapeHTML(player.icon)}
      </div>

      <div class="player-details">

        <span>
          ${escapeHTML(player.country)}
        </span>

        <h3>
          ${escapeHTML(player.name)}
        </h3>

        <small>
          ${escapeHTML(player.position)}
          •
          ${escapeHTML(player.club)}
        </small>

      </div>

    </article>
  `;
}

function loadPlayers() {
  const playersGrid =
    document.querySelector(".players-grid");

  if (!playersGrid) return;

  playersGrid.innerHTML =
    players
      .map(createPlayerCard)
      .join("");
}