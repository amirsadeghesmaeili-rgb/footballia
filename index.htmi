<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>⚽ فوتبالیا | دنیای فوتبال، همین‌جا</title>

  <link rel="stylesheet" href="style.css">

  <!-- Supabase -->
  <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
</head>

<body>

  <!-- HEADER -->
  <header class="header">
    <div class="logo">
      ⚽ فوتبالیا
    </div>

    <div class="subtitle">
      دنیای فوتبال، همین‌جا
    </div>

    <nav class="nav">
      <button onclick="showPage('home')">🏠 خانه</button>
      <button onclick="showPage('news')">📰 اخبار</button>
      <button onclick="showPage('matches')">⚽ بازی‌ها</button>
      <button onclick="showPage('table')">🏆 جدول</button>
      <button onclick="showPage('players')">👤 بازیکنان</button>
    </nav>

    <div class="search-box">
      <input
        type="text"
        id="searchInput"
        placeholder="🔍 جستجو..."
        oninput="searchNews()"
      >
    </div>
  </header>


  <!-- HOME -->
  <main>

    <section id="home" class="page active">

      <div class="hero">
        <div class="hero-content">
          <h1>⚽ فوتبالیا</h1>

          <h2>
            دنیای فوتبال، همین‌جا
          </h2>

          <p>
            جدیدترین اخبار، بازی‌ها، جدول لیگ‌ها و ستاره‌های فوتبال
          </p>

          <button onclick="showPage('news')" class="hero-button">
            📰 مشاهده اخبار
          </button>
        </div>
      </div>


      <div class="section-title">
        <span>🔥</span>
        <h2>آخرین اخبار</h2>
      </div>

      <div id="homeNewsContainer" class="news-container">
        <p>⏳ در حال دریافت اخبار...</p>
      </div>


      <div class="section-title">
        <span>⚽</span>
        <h2>بازی‌های مهم</h2>
      </div>

      <div class="matches-container">

        <div class="match-card">
          <div>🏆 لیگ برتر</div>
          <strong>تیم A</strong>
          <span>VS</span>
          <strong>تیم B</strong>
          <small>امشب</small>
        </div>

        <div class="match-card">
          <div>🌍 مسابقات اروپا</div>
          <strong>تیم C</strong>
          <span>VS</span>
          <strong>تیم D</strong>
          <small>فردا</small>
        </div>

      </div>

    </section>


    <!-- NEWS -->
    <section id="news" class="page">

      <div class="section-title">
        <span>📰</span>
        <h2>آخرین اخبار</h2>
      </div>

      <div id="newsContainer" class="news-container">
        <p>⏳ در حال دریافت اخبار...</p>
      </div>

    </section>


    <!-- MATCHES -->
    <section id="matches" class="page">

      <div class="section-title">
        <span>⚽</span>
        <h2>بازی‌ها</h2>
      </div>

      <div class="matches-container">

        <div class="match-card">
          <div>🏆 لیگ قهرمانان</div>
          <strong>تیم A</strong>
          <span>VS</span>
          <strong>تیم B</strong>
          <small>امشب</small>
        </div>

        <div class="match-card">
          <div>⚽ لیگ برتر</div>
          <strong>تیم C</strong>
          <span>VS</span>
          <strong>تیم D</strong>
          <small>فردا</small>
        </div>

      </div>

    </section>


    <!-- TABLE -->
    <section id="table" class="page">

      <div class="section-title">
        <span>🏆</span>
        <h2>جدول لیگ</h2>
      </div>

      <div class="table-wrapper">

        <table>
          <thead>
            <tr>
              <th>رتبه</th>
              <th>تیم</th>
              <th>بازی</th>
              <th>امتیاز</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>1</td>
              <td>🏆 تیم اول</td>
              <td>10</td>
              <td>25</td>
            </tr>

            <tr>
              <td>2</td>
              <td>⚽ تیم دوم</td>
              <td>10</td>
              <td>22</td>
            </tr>

            <tr>
              <td>3</td>
              <td>⚽ تیم سوم</td>
              <td>10</td>
              <td>20</td>
            </tr>

          </tbody>
        </table>

      </div>

    </section>


    <!-- PLAYERS -->
    <section id="players" class="page">

      <div class="section-title">
        <span>⭐</span>
        <h2>ستاره‌های فوتبال</h2>
      </div>

      <div class="players-container">

        <div class="player-card">
          <div class="player-image">🐐</div>
          <h3>Cristiano Ronaldo</h3>
          <p>ستاره فوتبال جهان</p>
        </div>

        <div class="player-card">
          <div class="player-image">⭐</div>
          <h3>Lionel Messi</h3>
          <p>ستاره فوتبال جهان</p>
        </div>

        <div class="player-card">
          <div class="player-image">🔥</div>
          <h3>Kylian Mbappé</h3>
          <p>ستاره نسل جدید</p>
        </div>

      </div>

    </section>

  </main>


  <!-- FOOTER -->
  <footer class="footer">
    <p>⚽ فوتبالیا</p>
    <p>دنیای فوتبال، همین‌جا</p>
  </footer>


  <!-- SUPABASE + SITE SCRIPT -->
  <script>

    /* =========================
       SUPABASE
    ========================= */

    const SUPABASE_URL =
      "https://zalrujwcdrpeyibaoxss.supabase.co";

    const SUPABASE_KEY =
      "sb_publishable_kfRGV3Ugx0HtFfO_atcU_Q_tsKMm_BB";

    const supabaseClient =
      window.supabase.createClient(
        SUPABASE_URL,
        SUPABASE_KEY
      );


    /* =========================
       PAGE NAVIGATION
    ========================= */

    function showPage(pageId) {

      const pages =
        document.querySelectorAll(".page");

      pages.forEach(page => {
        page.classList.remove("active");
      });

      const selectedPage =
        document.getElementById(pageId);

      if (selectedPage) {
        selectedPage.classList.add("active");
      }

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }


    /* =========================
       ESCAPE HTML
    ========================= */

    function escapeHtml(text) {

      if (text === null || text === undefined) {
        return "";
      }

      return String(text)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
    }


    /* =========================
       DATE
    ========================= */

    function formatDate(date) {

      if (!date) {
        return "امروز";
      }

      try {

        return new Date(date).toLocaleDateString(
          "fa-IR",
          {
            year: "numeric",
            month: "long",
            day: "numeric"
          }
        );

      } catch (error) {

        return "امروز";

      }
    }


    /* =========================
       NEWS CARD
    ========================= */

    function createNewsCard(news) {

      const title =
        escapeHtml(news.title);

      const category =
        escapeHtml(news.category || "⚽ فوتبال");

      const content =
        escapeHtml(news.content || "");

      const date =
        formatDate(news.published_at);

      let image = "";

      if (news.image_url) {

        image = `
          <img
            src="${escapeHtml(news.image_url)}"
            alt="${title}"
            class="news-image"
            loading="lazy"
          >
        `;
      }

      return `
        <article class="news-card">

          ${image}

          <span class="news-tag">
            ${category}
          </span>

          <h3>
            ${title}
          </h3>

          <p>
            ${content}
          </p>

          <small>
            ${date}
          </small>

        </article>
      `;
    }


    /* =========================
       LOAD NEWS
    ========================= */

    async function loadNews() {

      const containers = [
        document.getElementById("newsContainer"),
        document.getElementById("homeNewsContainer")
      ];

      try {

        const {
          data,
          error
        } = await supabaseClient

          .from("news")

          .select(
            "id,title,category,content,image_url,is_published,published_at"
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

          containers.forEach(container => {

            if (container) {

              container.innerHTML = `
                <p>
                  ❌ دریافت اخبار با مشکل مواجه شد.
                </p>
              `;

            }

          });

          return;
        }


        if (!data || data.length === 0) {

          containers.forEach(container => {

            if (container) {

              container.innerHTML = `
                <p>
                  📰 هنوز خبری منتشر نشده است.
                </p>
              `;

            }

          });

          return;
        }


        const newsHTML =
          data.map(createNewsCard).join("");


        containers.forEach(container => {

          if (container) {
            container.innerHTML = newsHTML;
          }

        });


      } catch (error) {

        console.error(
          "Unexpected error:",
          error
        );

        containers.forEach(container => {

          if (container) {

            container.innerHTML = `
              <p>
                ❌ خطایی هنگام دریافت اخبار رخ داد.
              </p>
            `;

          }

        });

      }

    }


    /* =========================
       SEARCH NEWS
    ========================= */

    function searchNews() {

      const input =
        document.getElementById("searchInput");

      const query =
        input.value.trim().toLowerCase();

      const cards =
        document.querySelectorAll(".news-card");

      cards.forEach(card => {

        const text =
          card.innerText.toLowerCase();

        if (
          query === "" ||
          text.includes(query)
        ) {

          card.style.display = "";

        } else {

          card.style.display = "none";

        }

      });

    }


    /* =========================
       START
    ========================= */

    document.addEventListener(
      "DOMContentLoaded",
      function () {

        showPage("home");

        loadNews();

      }
    );

  </script>

</body>
</html>