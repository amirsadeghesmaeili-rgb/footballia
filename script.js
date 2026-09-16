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