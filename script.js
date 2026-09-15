const SUPABASE_URL = "https://zalrujwcdrpeyibaoxss.supabase.co";

const SUPABASE_KEY =
  "sb_publishable_kfRGV3Ugx0HtFfO_atcU_Q_tsKMm_BB";

let supabaseClient = null;

if (window.supabase) {
  supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
  );
}


/* MOBILE MENU */

function toggleMenu() {
  const nav = document.querySelector(".nav");

  if (!nav) return;

  if (nav.style.display === "flex") {
    nav.style.display = "";
  } else {
    nav.style.display = "flex";
    nav.style.flexDirection = "column";
    nav.style.position = "absolute";
    nav.style.top = "68px";
    nav.style.right = "15px";
    nav.style.left = "15px";
    nav.style.padding = "20px";
    nav.style.background = "#0b0b0b";
    nav.style.border = "1px solid rgba(255,255,255,.08)";
    nav.style.borderRadius = "15px";
  }
}


/* ESCAPE HTML */

function escapeHTML(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}


/* DATE */

function formatDate(date) {
  if (!date) return "امروز";

  try {
    return new Date(date).toLocaleDateString("fa-IR");
  } catch {
    return "امروز";
  }
}


/* NEWS CARD */

function createNewsCard(news) {

  const image = news.image_url
    ? `
      <div class="news-image"
           style="
             background:
             linear-gradient(rgba(0,0,0,.25),rgba(0,0,0,.55)),
             url('${escapeHTML(news.image_url)}')
             center/cover;
           ">
        <span class="news-category">
          ${escapeHTML(news.category || "⚽ فوتبال")}
        </span>
      </div>
    `
    : `
      <div class="news-image">
        <span class="news-category">
          ${escapeHTML(news.category || "⚽ فوتبال")}
        </span>
        <span class="news-icon">⚽</span>
      </div>
    `;

  return `
    <article class="news-card">

      ${image}

      <div class="news-content">

        <span class="date">
          ${formatDate(news.published_at)}
        </span>

        <h3>
          ${escapeHTML(news.title)}
        </h3>

        <p>
          ${escapeHTML(news.content)}
        </p>

        <a href="#" class="read-more">
          ادامه خبر ←
        </a>

      </div>

    </article>
  `;
}


/* LOAD NEWS */

async function loadNews() {

  if (!supabaseClient) return;

  const grid = document.getElementById("newsGrid");

  if (!grid) return;

  try {

    const { data, error } = await supabaseClient
      .from("news")
      .select("*")
      .eq("is_published", true)
      .order("published_at", {
        ascending: false
      });

    if (error) {
      console.error("Supabase:", error);
      return;
    }

    if (!data || data.length === 0) return;

    grid.innerHTML = data
      .map(createNewsCard)
      .join("");

  } catch (error) {
    console.error(error);
  }
}


/* SEARCH */

function filterNews() {

  const input = document
    .getElementById("searchInput");

  const cards = document
    .querySelectorAll(".news-card");

  if (!input) return;

  const query = input.value
    .trim()
    .toLowerCase();

  cards.forEach(card => {

    const text = card
      .innerText
      .toLowerCase();

    card.style.display =
      text.includes(query)
        ? ""
        : "none";
  });
}


/* START */

document.addEventListener("DOMContentLoaded", () => {

  loadNews();

});