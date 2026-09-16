<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>فوتبالیا | Footballia</title>

  <meta
    name="description"
    content="فوتبالیا؛ اخبار فوتبال، بازی‌ها، جدول و ستاره‌های فوتبال"
  >

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

  <link
    href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;500;600;700;800;900&display=swap"
    rel="stylesheet"
  >

  <link rel="stylesheet" href="style.css">

  <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
</head>

<body>

<!-- =========================
     HEADER
========================= -->

<header class="site-header">
  <div class="container header-inner">

    <a href="#home" class="logo">
      <span class="logo-ball">⚽</span>
      <span>فوتبالیا</span>
    </a>

    <button
      id="menuButton"
      class="menu-button"
      aria-label="باز کردن منو"
    >
      ☰
    </button>

    <nav id="mainNav" class="main-nav">

      <a href="#home">خانه</a>
      <a href="#news">اخبار</a>
      <a href="#matches">بازی‌ها</a>
      <a href="#table">جدول</a>
      <a href="#players">ستاره‌ها</a>

    </nav>

  </div>
</header>


<!-- =========================
     HERO
========================= -->

<main id="home">

<section class="hero">

  <div class="container hero-inner">

    <div class="hero-content">

      <span class="hero-kicker">
        FOOTBALLIA
      </span>

      <h1>
        دنیای فوتبال،
        <span>اینجاست.</span>
      </h1>

      <p>
        آخرین اخبار فوتبال، بازی‌ها، جدول لیگ‌ها
        و ستاره‌های بزرگ فوتبال را در فوتبالیا دنبال کن.
      </p>

      <div class="hero-actions">

        <a href="#news" class="btn btn-primary">
          مشاهده اخبار
        </a>

        <a href="#players" class="btn btn-secondary">
          ستاره‌های فوتبال
        </a>

      </div>

    </div>

    <div class="hero-visual">

      <div class="hero-ball">
        ⚽
      </div>

      <div class="hero-ring"></div>

    </div>

  </div>

</section>


<!-- =========================
     QUICK NAV
========================= -->

<section class="quick-section">

  <div class="container">

    <div class="quick-grid">

      <a href="#news" class="quick-card">
        <span>📰</span>
        <strong>اخبار فوتبال</strong>
        <small>آخرین خبرها</small>
      </a>

      <a href="#matches" class="quick-card">
        <span>🏆</span>
        <strong>بازی‌ها</strong>
        <small>نتایج و مسابقات</small>
      </a>

      <a href="#table" class="quick-card">
        <span>📊</span>
        <strong>جدول لیگ</strong>
        <small>جدول مسابقات</small>
      </a>

      <a href="#players" class="quick-card">
        <span>⭐</span>
        <strong>ستاره‌ها</strong>
        <small>بازیکنان بزرگ</small>
      </a>

    </div>

  </div>

</section>


<!-- =========================
     NEWS
========================= -->

<section class="section news-section" id="news">

  <div class="container">

    <div class="section-heading">

      <div>

        <span class="section-kicker">
          LATEST NEWS
        </span>

        <h2>
          آخرین اخبار
        </h2>

      </div>

      <div class="search-box">

        <input
          id="searchInput"
          type="search"
          placeholder="جستجوی خبر..."
          autocomplete="off"
        >

        <span>🔍</span>

      </div>

    </div>


    <div id="newsGrid" class="news-grid">

      <article class="news-card">

        <div class="news-cover">

          <span class="cover-icon">
            ⚽
          </span>

          <span class="category">
            ⚽ فوتبال
          </span>

        </div>

        <div class="news-body">

          <span class="news-date">
            امروز
          </span>

          <h3>
            در حال دریافت آخرین اخبار فوتبال...
          </h3>

          <p>
            اخبار منتشرشده در پنل مدیریت فوتبالیا
            در این قسمت نمایش داده می‌شوند.
          </p>

        </div>

      </article>

    </div>


    <div
      id="newsEmpty"
      class="news-empty"
      hidden
    >
      خبری پیدا نشد.
    </div>

  </div>

</section>


<!-- =========================
     MATCHES
========================= -->

<section class="section matches-section" id="matches">

  <div class="container">

    <div class="section-heading">

      <div>

        <span class="section-kicker">
          MATCH CENTER
        </span>

        <h2>
          بازی‌های فوتبال
        </h2>

      </div>

    </div>


    <div class="matches-grid">

      <article class="match-card">

        <span class="match-status">
          آینده
        </span>

        <div class="teams">

          <div class="team">
            <span>⚪</span>
            <strong>Real Madrid</strong>
          </div>

          <div class="match-time">
            VS
          </div>

          <div class="team">
            <span>🔵</span>
            <strong>Manchester City</strong>
          </div>

        </div>

      </article>


      <article class="match-card">

        <span class="match-status">
          آینده
        </span>

        <div class="teams">

          <div class="team">
            <span>🔴</span>
            <strong>Barcelona</strong>
          </div>

          <div class="match-time">
            VS
          </div>

          <div class="team">
            <span>🔴</span>
            <strong>Bayern</strong>
          </div>

        </div>

      </article>


      <article class="match-card">

        <span class="match-status">
          آینده
        </span>

        <div class="teams">

          <div class="team">
            <span>🔴</span>
            <strong>Liverpool</strong>
          </div>

          <div class="match-time">
            VS
          </div>

          <div class="team">
            <span>🔵</span>
            <strong>Inter</strong>
          </div>

        </div>

      </article>

    </div>

  </div>

</section>


<!-- =========================
     TABLE
========================= -->

<section class="section table-section" id="table">

  <div class="container">

    <div class="section-heading">

      <div>

        <span class="section-kicker">
          LEAGUE TABLE
        </span>

        <h2>
          جدول لیگ
        </h2>

      </div>

    </div>


    <div class="table-wrapper">

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
            <td>Real Madrid</td>
            <td>0</td>
            <td>0</td>
          </tr>

          <tr>
            <td>2</td>
            <td>Barcelona</td>
            <td>0</td>
            <td>0</td>
          </tr>

          <tr>
            <td>3</td>
            <td>Manchester City</td>
            <td>0</td>
            <td>0</td>
          </tr>

          <tr>
            <td>4</td>
            <td>Liverpool</td>
            <td>0</td>
            <td>0</td>
          </tr>

          <tr>
            <td>5</td>
            <td>Bayern Munich</td>
            <td>0</td>
            <td>0</td>
          </tr>

        </tbody>

      </table>

    </div>

  </div>

</section>


<!-- =========================
     PLAYERS
========================= -->

<section class="section players-section" id="players">

  <div class="container">

    <div class="section-heading">

      <div>

        <span class="section-kicker">
          FOOTBALL STARS
        </span>

        <h2>
          ستاره‌های فوتبال
        </h2>

      </div>

    </div>


    <!-- مهم:
         این ID را اضافه کردیم تا
         بازیکن‌های Supabase به کارت‌های فعلی اضافه شوند.
    -->

    <div
      class="players-grid"
      id="playersGrid"
    >


      <!-- 1 -->
      <article class="player-card ronaldo">
        <span class="player-number">07</span>
        <div class="player-light"></div>
        <div class="player-symbol">👑</div>
        <div class="player-details">
          <span>PORTUGAL</span>
          <h3>Cristiano Ronaldo</h3>
          <small>Forward</small>
        </div>
      </article>


      <!-- 2 -->
      <article class="player-card messi">
        <span class="player-number">10</span>
        <div class="player-light"></div>
        <div class="player-symbol">⭐</div>
        <div class="player-details">
          <span>ARGENTINA</span>
          <h3>Lionel Messi</h3>
          <small>Forward</small>
        </div>
      </article>


      <!-- 3 -->
      <article class="player-card mbappe">
        <span class="player-number">10</span>
        <div class="player-light"></div>
        <div class="player-symbol">⚡</div>
        <div class="player-details">
          <span>FRANCE</span>
          <h3>Kylian Mbappé</h3>
          <small>Forward</small>
        </div>
      </article>


      <!-- 4 -->
      <article class="player-card">
        <span class="player-number">07</span>
        <div class="player-light"></div>
        <div class="player-symbol">🔥</div>
        <div class="player-details">
          <span>BRAZIL</span>
          <h3>Vinícius Júnior</h3>
          <small>Forward</small>
        </div>
      </article>


      <!-- 5 -->
      <article class="player-card">
        <span class="player-number">05</span>
        <div class="player-light"></div>
        <div class="player-symbol">⭐</div>
        <div class="player-details">
          <span>ENGLAND</span>
          <h3>Jude Bellingham</h3>
          <small>Midfielder</small>
        </div>
      </article>


      <!-- 6 -->
      <article class="player-card">
        <span class="player-number">11</span>
        <div class="player-light"></div>
        <div class="player-symbol">⚽</div>
        <div class="player-details">
          <span>BRAZIL</span>
          <h3>Rodrygo</h3>
          <small>Forward</small>
        </div>
      </article>


      <!-- 7 -->
      <article class="player-card">
        <span class="player-number">08</span>
        <div class="player-light"></div>
        <div class="player-symbol">💥</div>
        <div class="player-details">
          <span>URUGUAY</span>
          <h3>Federico Valverde</h3>
          <small>Midfielder</small>
        </div>
      </article>


      <!-- 8 -->
      <article class="player-card">
        <span class="player-number">06</span>
        <div class="player-light"></div>
        <div class="player-symbol">✨</div>
        <div class="player-details">
          <span>FRANCE</span>
          <h3>Eduardo Camavinga</h3>
          <small>Midfielder</small>
        </div>
      </article>


      <!-- 9 -->
      <article class="player-card">
        <span class="player-number">14</span>
        <div class="player-light"></div>
        <div class="player-symbol">🛡️</div>
        <div class="player-details">
          <span>FRANCE</span>
          <h3>Aurélien Tchouaméni</h3>
          <small>Midfielder</small>
        </div>
      </article>


      <!-- 10 -->
      <article class="player-card">
        <span class="player-number">15</span>
        <div class="player-light"></div>
        <div class="player-symbol">✨</div>
        <div class="player-details">
          <span>TURKEY</span>
          <h3>Arda Güler</h3>
          <small>Midfielder</small>
        </div>
      </article>


      <!-- 11 -->
      <article class="player-card">
        <span class="player-number">21</span>
        <div class="player-light"></div>
        <div class="player-symbol">⚡</div>
        <div class="player-details">
          <span>MOROCCO</span>
          <h3>Brahim Díaz</h3>
          <small>Forward</small>
        </div>
      </article>


      <!-- 12 -->
      <article class="player-card">
        <span class="player-number">01</span>
        <div class="player-light"></div>
        <div class="player-symbol">🧤</div>
        <div class="player-details">
          <span>BELGIUM</span>
          <h3>Thibaut Courtois</h3>
          <small>Goalkeeper</small>
        </div>
      </article>


      <!-- 13 -->
      <article class="player-card">
        <span class="player-number">13</span>
        <div class="player-light"></div>
        <div class="player-symbol">🧤</div>
        <div class="player-details">
          <span>UKRAINE</span>
          <h3>Andriy Lunin</h3>
          <small>Goalkeeper</small>
        </div>
      </article>


      <!-- 14 -->
      <article class="player-card">
        <span class="player-number">03</span>
        <div class="player-light"></div>
        <div class="player-symbol">🧱</div>
        <div class="player-details">
          <span>BRAZIL</span>
          <h3>Éder Militão</h3>
          <small>Defender</small>
        </div>
      </article>


      <!-- 15 -->
      <article class="player-card">
        <span class="player-number">22</span>
        <div class="player-light"></div>
        <div class="player-symbol">🛡️</div>
        <div class="player-details">
          <span>GERMANY</span>
          <h3>Antonio Rüdiger</h3>
          <small>Defender</small>
        </div>
      </article>


      <!-- 16 -->
      <article class="player-card">
        <span class="player-number">02</span>
        <div class="player-light"></div>
        <div class="player-symbol">🛡️</div>
        <div class="player-details">
          <span>SPAIN</span>
          <h3>Dani Carvajal</h3>
          <small>Defender</small>
        </div>
      </article>


      <!-- 17 -->
      <article class="player-card">
        <span class="player-number">23</span>
        <div class="player-light"></div>
        <div class="player-symbol">💨</div>
        <div class="player-details">
          <span>FRANCE</span>
          <h3>Ferland Mendy</h3>
          <small>Defender</small>
        </div>
      </article>


      <!-- 18 -->
      <article class="player-card">
        <span class="player-number">20</span>
        <div class="player-light"></div>
        <div class="player-symbol">💨</div>
        <div class="player-details">
          <span>SPAIN</span>
          <h3>Fran García</h3>
          <small>Defender</small>
        </div>
      </article>


      <!-- 19 -->
      <article class="player-card">
        <span class="player-number">19</span>
        <div class="player-light"></div>
        <div class="player-symbol">🎯</div>
        <div class="player-details">
          <span>SPAIN</span>
          <h3>Dani Ceballos</h3>
          <small>Midfielder</small>
        </div>
      </article>


      <!-- 20 -->
      <article class="player-card">
        <span class="player-number">09</span>
        <div class="player-light"></div>
        <div class="player-symbol">🤖</div>
        <div class="player-details">
          <span>NORWAY</span>
          <h3>Erling Haaland</h3>
          <small>Forward</small>
        </div>
      </article>


      <!-- 21 -->
      <article class="player-card">
        <span class="player-number">10</span>
        <div class="player-light"></div>
        <div class="player-symbol">🌟</div>
        <div class="player-details">
          <span>SPAIN</span>
          <h3>Lamine Yamal</h3>
          <small>Forward</small>
        </div>
      </article>


      <!-- 22 -->
      <article class="player-card">
        <span class="player-number">10</span>
        <div class="player-light"></div>
        <div class="player-symbol">⚡</div>
        <div class="player-details">
          <span>FRANCE</span>
          <h3>Ousmane Dembélé</h3>
          <small>Forward</small>
        </div>
      </article>


      <!-- 23 -->
      <article class="player-card">
        <span class="player-number">11</span>
        <div class="player-light"></div>
        <div class="player-symbol">🔥</div>
        <div class="player-details">
          <span>EGYPT</span>
          <h3>Mohamed Salah</h3>
          <small>Forward</small>
        </div>
      </article>


      <!-- 24 -->
      <article class="player-card">
        <span class="player-number">09</span>
        <div class="player-light"></div>
        <div class="player-symbol">🎯</div>
        <div class="player-details">
          <span>ENGLAND</span>
          <h3>Harry Kane</h3>
          <small>Forward</small>
        </div>
      </article>


      <!-- 25 -->
      <article class="player-card">
        <span class="player-number">10</span>
        <div class="player-light"></div>
        <div class="player-symbol">✨</div>
        <div class="player-details">
          <span>GERMANY</span>
          <h3>Jamal Musiala</h3>
          <small>Midfielder</small>
        </div>
      </article>


      <!-- 26 -->
      <article class="player-card">
        <span class="player-number">07</span>
        <div class="player-light"></div>
        <div class="player-symbol">🎩</div>
        <div class="player-details">
          <span>GERMANY</span>
          <h3>Florian Wirtz</h3>
          <small>Midfielder</small>
        </div>
      </article>


      <!-- 27 -->
      <article class="player-card">
        <span class="player-number">07</span>
        <div class="player-light"></div>
        <div class="player-symbol">🔥</div>
        <div class="player-details">
          <span>ENGLAND</span>
          <h3>Bukayo Saka</h3>
          <small>Forward</small>
        </div>
      </article>


      <!-- 28 -->
      <article class="player-card">
        <span class="player-number">08</span>
        <div class="player-light"></div>
        <div class="player-symbol">🧠</div>
        <div class="player-details">
          <span>SPAIN</span>
          <h3>Pedri</h3>
          <small>Midfielder</small>
        </div>
      </article>


      <!-- 29 -->
      <article class="player-card">
        <span class="player-number">09</span>
        <div class="player-light"></div>
        <div class="player-symbol">🎯</div>
        <div class="player-details">
          <span>POLAND</span>
          <h3>Robert Lewandowski</h3>
          <small>Forward</small>
        </div>
      </article>


      <!-- 30 -->
      <article class="player-card">
        <span class="player-number">11</span>
        <div class="player-light"></div>
        <div class="player-symbol">⚡</div>
        <div class="player-details">
          <span>BRAZIL</span>
          <h3>Raphinha</h3>
          <small>Forward</small>
        </div>
      </article>


      <!-- 31 -->
      <article class="player-card">
        <span class="player-number">08</span>
        <div class="player-light"></div>
        <div class="player-symbol">🎯</div>
        <div class="player-details">
          <span>BELGIUM</span>
          <h3>Kevin De Bruyne</h3>
          <small>Midfielder</small>
        </div>
      </article>


      <!-- 32 -->
      <article class="player-card">
        <span class="player-number">04</span>
        <div class="player-light"></div>
        <div class="player-symbol">🧱</div>
        <div class="player-details">
          <span>NETHERLANDS</span>
          <h3>Virgil van Dijk</h3>
          <small>Defender</small>
        </div>
      </article>


      <!-- 33 -->
      <article class="player-card">
        <span class="player-number">02</span>
        <div class="player-light"></div>
        <div class="player-symbol">🛡️</div>
        <div class="player-details">
          <span>FRANCE</span>
          <h3>William Saliba</h3>
          <small>Defender</small>
        </div>
      </article>


      <!-- 34 -->
      <article class="player-card">
        <span class="player-number">02</span>
        <div class="player-light"></div>
        <div class="player-symbol">💨</div>
        <div class="player-details">
          <span>MOROCCO</span>
          <h3>Achraf Hakimi</h3>
          <small>Defender</small>
        </div>
      </article>


      <!-- 35 -->
      <article class="player-card">
        <span class="player-number">07</span>
        <div class="player-light"></div>
        <div class="player-symbol">🔥</div>
        <div class="player-details">
          <span>GEORGIA</span>
          <h3>Khvicha Kvaratskhelia</h3>
          <small>Forward</small>
        </div>
      </article>


      <!-- 36 -->
      <article class="player-card">
        <span class="player-number">10</span>
        <div class="player-light"></div>
        <div class="player-symbol">🎯</div>
        <div class="player-details">
          <span>ARGENTINA</span>
          <h3>Lautaro Martínez</h3>
          <small>Forward</small>
        </div>
      </article>


      <!-- 37 -->
      <article class="player-card">
        <span class="player-number">19</span>
        <div class="player-light"></div>
        <div class="player-symbol">⚡</div>
        <div class="player-details">
          <span>ARGENTINA</span>
          <h3>Julián Álvarez</h3>
          <small>Forward</small>
        </div>
      </article>


      <!-- 38 -->
      <article class="player-card">
        <span class="player-number">10</span>
        <div class="player-light"></div>
        <div class="player-symbol">✨</div>
        <div class="player-details">
          <span>ENGLAND</span>
          <h3>Cole Palmer</h3>
          <small>Midfielder</small>
        </div>
      </article>


      <!-- 39 -->
      <article class="player-card">
        <span class="player-number">47</span>
        <div class="player-light"></div>
        <div class="player-symbol">⚡</div>
        <div class="player-details">
          <span>ENGLAND</span>
          <h3>Phil Foden</h3>
          <small>Midfielder</small>
        </div>
      </article>


      <!-- 40 -->
      <article class="player-card">
        <span class="player-number">16</span>
        <div class="player-light"></div>
        <div class="player-symbol">🧠</div>
        <div class="player-details">
          <span>SPAIN</span>
          <h3>Rodri</h3>
          <small>Midfielder</small>
        </div>
      </article>


      <!-- 41 -->
      <article class="player-card">
        <span class="player-number">08</span>
        <div class="player-light"></div>
        <div class="player-symbol">🎩</div>
        <div class="player-details">
          <span>NORWAY</span>
          <h3>Martin Ødegaard</h3>
          <small>Midfielder</small>
        </div>
      </article>


      <!-- 42 -->
      <article class="player-card">
        <span class="player-number">41</span>
        <div class="player-light"></div>
        <div class="player-symbol">🛡️</div>
        <div class="player-details">
          <span>ENGLAND</span>
          <h3>Declan Rice</h3>
          <small>Midfielder</small>
        </div>
      </article>


      <!-- 43 -->
      <article class="player-card">
        <span class="player-number">45</span>
        <div class="player-light"></div>
        <div class="player-symbol">🔥</div>
        <div class="player-details">
          <span>NIGERIA</span>
          <h3>Victor Osimhen</h3>
          <small>Forward</small>
        </div>
      </article>


      <!-- 44 -->
      <article class="player-card">
        <span class="player-number">03</span>
        <div class="player-light"></div>
        <div class="player-symbol">🧱</div>
        <div class="player-details">
          <span>PORTUGAL</span>
          <h3>Rúben Dias</h3>
          <small>Defender</small>
        </div>
      </article>


      <!-- 45 -->
      <article class="player-card">
        <span class="player-number">20</span>
        <div class="player-light"></div>
        <div class="player-symbol">✨</div>
        <div class="player-details">
          <span>PORTUGAL</span>
          <h3>Bernardo Silva</h3>
          <small>Midfielder</small>
        </div>
      </article>


      <!-- 46 -->
      <article class="player-card">
        <span class="player-number">07</span>
        <div class="player-light"></div>
        <div class="player-symbol">🎯</div>
        <div class="player-details">
          <span>FRANCE</span>
          <h3>Antoine Griezmann</h3>
          <small>Forward</small>
        </div>
      </article>


      <!-- 47 -->
      <article class="player-card">
        <span class="player-number">10</span>
        <div class="player-light"></div>
        <div class="player-symbol">🇧🇷</div>
        <div class="player-details">
          <span>BRAZIL</span>
          <h3>Neymar</h3>
          <small>Forward</small>
        </div>
      </article>


      <!-- 48 -->
      <article class="player-card">
        <span class="player-number">08</span>
        <div class="player-light"></div>
        <div class="player-symbol">🎯</div>
        <div class="player-details">
          <span>ITALY</span>
          <h3>Sandro Tonali</h3>
          <small>Midfielder</small>
        </div>
      </article>


      <!-- 49 -->
      <article class="player-card">
        <span class="player-number">95</span>
        <div class="player-light"></div>
        <div class="player-symbol">🛡️</div>
        <div class="player-details">
          <span>ITALY</span>
          <h3>Alessandro Bastoni</h3>
          <small>Defender</small>
        </div>
      </article>


      <!-- 50 -->
      <article class="player-card">
        <span class="player-number">16</span>
        <div class="player-light"></div>
        <div class="player-symbol">🧤</div>
        <div class="player-details">
          <span>FRANCE</span>
          <h3>Mike Maignan</h3>
          <small>Goalkeeper</small>
        </div>
      </article>


      <!--
        بازیکن‌های Supabase
        از اینجا به بعد به صورت خودکار اضافه می‌شوند.
      -->

    </div>

  </div>

</section>

</main>


<!-- =========================
     FOOTER
========================= -->

<footer class="site-footer">

  <div class="container footer-inner">

    <div>
      <strong>⚽ فوتبالیا</strong>

      <p>
        خانه فوتبال‌دوستان
      </p>

    </div>

    <div>
      © 2026 Footballia
    </div>

  </div>

</footer>


<!-- =========================
     SCRIPT
========================= -->

<script src="script.js"></script>

</body>
</html>