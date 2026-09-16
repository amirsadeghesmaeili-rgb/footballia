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
    escapeHTML(
      news.title || "بدون عنوان"
    );

  const category =
    escapeHTML(
      news.category || "⚽ فوتبال"
    );

  const content =
    escapeHTML(
      news.content || ""
    );

  const date =
    formatDate(
      news.published_at
    );

  let coverHTML = "";


  if (news.image_url) {

    const imageURL =
      escapeHTML(
        news.image_url
      );

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

        <span class="cover-icon">
          ⚽
        </span>

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
    document.getElementById(
      "newsGrid"
    );

  const emptyMessage =
    document.getElementById(
      "newsEmpty"
    );


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
   CREATE SUPABASE PLAYER CARD
========================= */

function createPlayerCard(player) {

  const name =
    escapeHTML(
      player.name || "بازیکن"
    );

  const country =
    escapeHTML(
      player.country || ""
    );

  const number =
    escapeHTML(
      player.number || ""
    );

  const position =
    escapeHTML(
      player.position || ""
    );

  const icon =
    escapeHTML(
      player.icon || "⚽"
    );


  let imageHTML = "";


  if (player.image_url) {

    const imageURL =
      escapeHTML(
        player.image_url
      );

    imageHTML = `
      <div
        class="player-image"
        style="
          background-image:
          linear-gradient(
            rgba(0,0,0,.10),
            rgba(0,0,0,.55)
          ),
          url('${imageURL}');
        "
      ></div>
    `;

  }


  return `
    <article class="player-card">

      <span class="player-number">
        ${number}
      </span>

      <div class="player-light"></div>

      ${imageHTML}

      <div class="player-symbol">
        ${icon}
      </div>

      <div class="player-details">

        <span>
          ${country}
        </span>

        <h3>
          ${name}
        </h3>

        <small>
          ${position}
        </small>

      </div>

    </article>
  `;

}


/* =========================
   LOAD PLAYERS FROM SUPABASE
========================= */

async function loadPlayers() {

  const playersGrid =
    document.getElementById(
      "playersGrid"
    );


  if (!playersGrid) {

    console.error(
      "playersGrid پیدا نشد!"
    );

    return;

  }


  if (!supabaseClient) {

    console.error(
      "Supabase متصل نیست!"
    );

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

      .eq(
        "is_published",
        true
      )

      .order(
        "created_at",
        {
          ascending: false
        }
      );


    /* =========================
       ERROR
    ========================= */

    if (error) {

      console.error(
        "Supabase players error:",
        error
      );

      return;

    }


    /* =========================
       NO NEW PLAYERS
       
       کارت‌های ۵۰تایی index.html
       دست‌نخورده باقی می‌مانند.
    ========================= */

    if (!data || data.length === 0) {

      console.log(
        "بازیکن جدیدی در Supabase وجود ندارد."
      );

      return;

    }


    /* =========================
       ADD NEW PLAYERS
       
       مهم:
       innerHTML استفاده نمی‌کنیم.
       
       چون innerHTML کارت‌های قبلی
       را پاک می‌کند.
    ========================= */

    data.forEach(player => {

      const cardHTML =
        createPlayerCard(player);

      playersGrid.insertAdjacentHTML(
        "beforeend",
        cardHTML
      );

    });


    console.log(
      "Supabase players added:",
      data.length
    );


  } catch (error) {

    console.error(
      "Players loading error:",
      error
    );

  }

}


/* =========================
   NEWS SEARCH
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