<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>فوتبالیا | دنیای فوتبال</title>

  <link rel="stylesheet" href="style.css">

  <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
</head>

<body>

<header class="header">

  <a href="#" class="logo">
    <span class="logo-ball">⚽</span>

    <div>
      <strong>فوتبالیا</strong>
      <small>دنیای فوتبال، همین‌جا</small>
    </div>
  </a>

  <nav class="nav">

    <button class="nav-link active" onclick="showPage('home')">
      خانه
    </button>

    <button class="nav-link" onclick="showPage('news')">
      اخبار
    </button>

    <button class="nav-link" onclick="showPage('matches')">
      بازی‌ها
    </button>

    <button class="nav-link" onclick="showPage('table')">
      جدول
    </button>

    <button class="nav-link" onclick="showPage('players')">
      ستاره‌ها
    </button>

  </nav>

  <button class="mobile-menu" onclick="toggleMenu()">☰</button>

</header>


<main>

<!-- ================= HOME ================= -->

<section id="home" class="page active">

  <div class="hero">

    <div class="hero-content">

      <span class="hero-label">
        ⚡ FOOTBALLIA
      </span>

      <h1>
        فوتبال<br>
        <span>همین‌جاست.</span>
      </h1>

      <p>
        جدیدترین اخبار، بازی‌ها، جدول لیگ‌ها و ستاره‌های فوتبال
        را در فوتبالیا دنبال کن.
      </p>

      <div class="hero-buttons">

        <button class="gold-button" onclick="showPage('news')">
          📰 آخرین اخبار
        </button>

        <button class="outline-button" onclick="showPage('matches')">
          ⚽ بازی‌ها
        </button>

      </div>

    </div>


    <div class="hero-ball">

      <div class="orbit"></div>

      <div class="big-ball">
        ⚽
      </div>

      <span>FOOTBALLIA</span>

    </div>

  </div>


  <div class="quick-cards">

    <div class="quick-card">
      <span>📰</span>
      <div>
        <strong>اخبار</strong>
        <small>تازه‌ترین خبرها</small>
      </div>
    </div>

    <div class="quick-card">
      <span>⚽</span>
      <div>
        <strong>بازی‌ها</strong>
        <small>مسابقات فوتبال</small>
      </div>
    </div>

    <div class="quick-card">
      <span>🏆</span>
      <div>
        <strong>جدول</strong>
        <small>جدول لیگ‌ها</small>
      </div>
    </div>

    <div class="quick-card">
      <span>⭐</span>
      <div>
        <strong>ستاره‌ها</strong>
        <small>بازیکنان برتر</small>
      </div>
    </div>

  </div>


  <div class="section-title">

    <div>
      <span>FOOTBALL NEWS</span>
      <h2>آخرین اخبار</h2>
    </div>

    <button onclick="showPage('news')">
      همه اخبار ←
    </button>

  </div>


  <div id="homeNews" class="news-grid">

    <div class="loading">
      در حال دریافت اخبار...
    </div>

  </div>

</section>



<!-- ================= NEWS ================= -->

<section id="news" class="page">

  <div class="page-heading">

    <div class="heading-icon">
      📰
    </div>

    <div>
      <span>FOOTBALL NEWS</span>
      <h2>آخرین اخبار فوتبال</h2>
    </div>

  </div>


  <div class="search-box">

    <input
      id="searchInput"
      type="search"
      placeholder="🔎 جستجوی خبر..."
      oninput="filterNews()"
    >

  </div>


  <div id="newsGrid" class="news-grid">

    <div class="loading">
      در حال دریافت اخبار...
    </div>

  </div>

</section>



<!-- ================= MATCHES ================= -->

<section id="matches" class="page">

  <div class="page-heading">

    <div class="heading-icon">
      ⚽
    </div>

    <div>
      <span>FIXTURES</span>
      <h2>بازی‌های فوتبال</h2>
    </div>

  </div>


  <div class="matches-grid">

    <article class="match-card featured">

      <span>🏆 لیگ قهرمانان</span>

      <div class="teams">

        <strong>Real Madrid</strong>

        <b>VS</b>

        <strong>Barcelona</strong>

      </div>

      <small>امشب · ۲۱:۳۰</small>

    </article>


    <article class="match-card">

      <span>⚽ Premier League</span>

      <div class="teams">

        <strong>Arsenal</strong>

        <b>VS</b>

        <strong>Chelsea</strong>

      </div>

      <small>فردا · ۱۹:۰۰</small>

    </article>


    <article class="match-card">

      <span>🌍 La Liga</span>

      <div class="teams">

        <strong>Atlético</strong>

        <b>VS</b>

        <strong>Valencia</strong>

      </div>

      <small>جمعه · ۲۲:۰۰</small>

    </article>

  </div>

</section>



<!-- ================= TABLE ================= -->

<section id="table" class="page">

  <div class="page-heading">

    <div class="heading-icon">
      🏆
    </div>

    <div>
      <span>LEAGUE TABLE</span>
      <h2>جدول لیگ</h2>
    </div>

  </div>


  <div class="table-container">

    <table>

      <thead>

        <tr>
          <th>#</th>
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

        <tr>
          <td>4</td>
          <td>⚽ تیم چهارم</td>
          <td>10</td>
          <td>18</td>
        </tr>

      </tbody>

    </table>

  </div>

</section>



<!-- ================= PLAYERS ================= -->

<section id="players" class="page">

  <div class="page-heading">

    <div class="heading-icon">
      ⭐
    </div>

    <div>
      <span>FOOTBALL STARS</span>
      <h2>ستاره‌های فوتبال</h2>
    </div>

  </div>


  <div class="players-grid">


    <article class="player-card">

      <div class="player-number">
        07
      </div>

      <div class="player-photo ronaldo">
        CR7
      </div>

      <div class="player-info">

        <small>🇵🇹 PORTUGAL</small>

        <h3>Cristiano Ronaldo</h3>

        <span>LEGEND</span>

      </div>

    </article>



    <article class="player-card">

      <div class="player-number">
        10
      </div>

      <div class="player-photo messi">
        LM10
      </div>

      <div class="player-info">

        <small>🇦🇷 ARGENTINA</small>

        <h3>Lionel Messi</h3>

        <span>LEGEND</span>

      </div>

    </article>



    <article class="player-card">

      <div class="player-number">
        09
      </div>

      <div class="player-photo mbappe">
        KM9
      </div>

      <div class="player-info">

        <small>🇫🇷 FRANCE</small>

        <h3>Kylian Mbappé</h3>

        <span>STAR</span>

      </div>

    </article>

  </div>

</section>

</main>



<footer>

  <strong>⚽ فوتبالیا</strong>

  <span>
    دنیای فوتبال، همین‌جا
  </span>

</footer>


<script src="script.js"></script>

</body>
</html>