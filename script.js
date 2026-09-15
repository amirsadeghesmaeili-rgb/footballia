const SUPABASE_URL =
  "https://zalrujwcdrpeyibaoxss.supabase.co";

const SUPABASE_KEY =
  "sb_publishable_kfRGV3Ugx0HtFfO_atcU_Q_tsKMm_BB";


const supabaseClient =
  window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
  );


let allNews = [];


/* =========================
   PAGE NAVIGATION
========================= */

function showPage(pageId){

  document
    .querySelectorAll(".page")
    .forEach(page => {
      page.classList.remove("active");
    });


  const page =
    document.getElementById(pageId);

  if(page){
    page.classList.add("active");
  }


  document
    .querySelectorAll(".nav-link")
    .forEach(button => {

      button.classList.toggle(
        "active",
        button.getAttribute("onclick")
          ?.includes(`'${pageId}'`)
      );

    });


  document
    .querySelector(".header")
    ?.classList.remove("menu-open");


  window.scrollTo({
    top:0,
    behavior:"smooth"
  });

}


/* =========================
   MOBILE MENU
========================= */

function toggleMenu(){

  document
    .querySelector(".header")
    ?.classList.toggle("menu-open");

}


/* =========================
   SECURITY
========================= */

function escapeHTML(value){

  return String(value ?? "")
    .replace(/&/g,"&amp;")
    .replace(/</g,"&lt;")
    .replace(/>/g,"&gt;")
    .replace(/"/g,"&quot;")
    .replace(/'/g,"&#039;");

}


/* =========================
   DATE
========================= */

function formatDate(date){

  try{

    return new Date(date)
      .toLocaleDateString(
        "fa-IR",
        {
          year:"numeric",
          month:"long",
          day:"numeric"
        }
      );

  }catch{

    return "امروز";

  }

}


/* =========================
   NEWS CARD
========================= */

function createNewsCard(news){

  return `

    <article
      class="news-card"
      data-search="${escapeHTML(
        `${news.title || ""}
         ${news.content || ""}
         ${news.category || ""}`
      ).toLowerCase()}"
    >

      <span class="news-tag">

        ${escapeHTML(
          news.category || "⚽ فوتبال"
        )}

      </span>


      <h3>
        ${escapeHTML(
          news.title || "بدون عنوان"
        )}
      </h3>


      <p>
        ${escapeHTML(
          news.content || ""
        )}
      </p>


      <small>
        ${formatDate(news.published_at)}
      </small>

    </article>

  `;

}


/* =========================
   RENDER NEWS
========================= */

function renderNews(newsList){

  const html =
    newsList.length > 0

      ? newsList
          .map(createNewsCard)
          .join("")

      : `
        <div class="loading">
          📰 خبری پیدا نشد.
        </div>
      `;


  const newsGrid =
    document.getElementById("newsGrid");

  const homeNews =
    document.getElementById("homeNews");


  if(newsGrid){
    newsGrid.innerHTML = html;
  }


  if(homeNews){

    homeNews.innerHTML =
      newsList.slice(0,3)
        .map(createNewsCard)
        .join("");

  }

}


/* =========================
   LOAD NEWS
========================= */

async function loadNews(){

  const {
    data,
    error
  } = await supabaseClient

    .from("news")

    .select(`
      id,
      title,
      category,
      content,
      image_url,
      is_published,
      published_at
    `)

    .eq(
      "is_published",
      true
    )

    .order(
      "published_at",
      {
        ascending:false
      }
    );


  if(error){

    console.error(
      "Supabase error:",
      error
    );


    const errorHTML = `

      <div class="error">

        ❌ دریافت اخبار با مشکل مواجه شد.

        <br><br>

        لطفاً اتصال Supabase را بررسی کنید.

      </div>

    `;


    const newsGrid =
      document.getElementById("newsGrid");

    const homeNews =
      document.getElementById("homeNews");


    if(newsGrid){
      newsGrid.innerHTML =
        errorHTML;
    }


    if(homeNews){
      homeNews.innerHTML =
        errorHTML;
    }


    return;

  }


  allNews = data || [];


  renderNews(allNews);

}


/* =========================
   SEARCH
========================= */

function filterNews(){

  const input =
    document.getElementById(
      "searchInput"
    );


  const query =
    input?.value
      ?.trim()
      ?.toLowerCase() || "";


  const filtered =
    allNews.filter(news => {

      const text = `

        ${news.title || ""}

        ${news.content || ""}

        ${news.category || ""}

      `.toLowerCase();


      return text.includes(query);

    });


  renderNews(filtered);

}


/* =========================
   START
========================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    showPage("home");

    loadNews();

  }
);