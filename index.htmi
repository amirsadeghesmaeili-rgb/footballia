<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>فوتبالیا | دنیای فوتبال</title>

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">

  <link rel="stylesheet" href="style.css">
</head>

<body>

  <!-- HEADER -->
  <header class="header">
    <div class="container header-inner">

      <a href="#" class="logo">
        <span class="logo-ball">⚽</span>
        <span>فوتبالیا</span>
      </a>

      <nav class="nav">
        <a href="#home">خانه</a>
        <a href="#news">اخبار</a>
        <a href="#matches">بازی‌ها</a>
        <a href="#table">جدول</a>
        <a href="#players">ستاره‌ها</a>
      </nav>

      <button class="menu-btn" onclick="toggleMenu()">☰</button>

    </div>
  </header>


  <main>

    <!-- HERO -->
    <section class="hero" id="home">
      <div class="hero-glow"></div>

      <div class="container hero-content">

        <div class="hero-text">
          <div class="badge">⚡ آخرین اخبار فوتبال</div>

          <h1>
            فوتبال،
            <span>همین‌جا</span>
            زنده است.
          </h1>

          <p>
            آخرین اخبار، نتایج، بازی‌ها، جدول لیگ‌ها و ستاره‌های فوتبال
            را در فوتبالیا دنبال کن.
          </p>

          <div class="hero-buttons">
            <a href="#news" class="btn primary">مشاهده اخبار</a>
            <a href="#matches" class="btn secondary">بازی‌های امروز</a>
          </div>
        </div>

        <div class="hero-ball">
          <div class="ball-ring"></div>
          <div class="big-ball">⚽</div>
        </div>

      </div>
    </section>


    <!-- QUICK STATS -->
    <section class="quick-section">
      <div class="container quick-grid">

        <div class="quick-card">
          <span>📰</span>
          <div>
            <strong>اخبار فوتبال</strong>
            <small>جدیدترین اتفاقات</small>
          </div>
        </div>

        <div class="quick-card">
          <span>⚽</span>
          <div>
            <strong>بازی‌های امروز</strong>
            <small>نتایج و مسابقات</small>
          </div>
        </div>

        <div class="quick-card">
          <span>🏆</span>
          <div>
            <strong>جدول لیگ</strong>
            <small>آخرین وضعیت تیم‌ها</small>
          </div>
        </div>

        <div class="quick-card">
          <span>⭐</span>
          <div>
            <strong>ستاره‌ها</strong>
            <small>بهترین بازیکنان</small>
          </div>
        </div>

      </div>
    </section>


    <!-- FEATURED NEWS -->
    <section class="section" id="news">
      <div class="container">

        <div class="section-head">
          <div>
            <span class="section-label">FOOTBALL NEWS</span>
            <h2>آخرین اخبار</h2>
          </div>

          <div class="search">
            <span>⌕</span>
            <input
              id="searchInput"
              type="text"
              placeholder="جستجوی خبر..."
              oninput="filterNews()"
            >
          </div>
        </div>

        <div id="newsGrid" class="news-grid">

          <article class="news-card featured">
            <div class="news-image">
              <div class="news-overlay"></div>
              <span class="news-category">🔥 مهم</span>
              <span class="news-icon">⚽</span>
            </div>

            <div class="news-content">
              <span class="date">امروز</span>
              <h3>به فوتبالیا خوش آمدید!</h3>
              <p>
                جدیدترین اخبار و اتفاقات دنیای فوتبال را در فوتبالیا دنبال کنید.
              </p>
              <a href="#" class="read-more">ادامه خبر ←</a>
            </div>
          </article>

          <article class="news-card">
            <div class="news-image blue">
              <span class="news-category">⚡ فوتبال</span>
              <span class="news-icon">🏟️</span>
            </div>

            <div class="news-content">
              <span class="date">امروز</span>
              <h3>شب‌های بزرگ فوتبال نزدیک است</h3>
              <p>هیجان مسابقات بزرگ دوباره به فوتبال برگشته است.</p>
              <a href="#" class="read-more">ادامه خبر ←</a>
            </div>
          </article>

          <article class="news-card">
            <div class="news-image purple">
              <span class="news-category">⭐ ستاره‌ها</span>
              <span class="news-icon">👑</span>
            </div>

            <div class="news-content">
              <span class="date">امروز</span>
              <h3>ستاره‌های فوتبال در مرکز توجه</h3>
              <p>نگاهی به عملکرد بازیکنان بزرگ فوتبال جهان.</p>
              <a href="#" class="read-more">ادامه خبر ←</a>
            </div>
          </article>

        </div>

      </div>
    </section>


    <!-- MATCHES -->
    <section class="section dark-section" id="matches">
      <div class="container">

        <div class="section-head">
          <div>
            <span class="section-label">LIVE & UPCOMING</span>
            <h2>بازی‌های امروز</h2>
          </div>

          <span class="live-badge">
            <i></i> زنده
          </span>
        </div>

        <div class="matches-grid">

          <div class="match-card live">

            <div class="league-name">
              🏆 لیگ قهرمانان اروپا
            </div>

            <div class="match-time">
              <span>20:30</span>
              <small>امشب</small>
            </div>

            <div class="teams">

              <div class="team">
                <div class="team-logo">🔴</div>
                <strong>تیم قرمز</strong>
              </div>

              <div class="score">
                <b>2</b>
                <span>:</span>
                <b>1</b>
              </div>

              <div class="team">
                <div class="team-logo">🔵</div>
                <strong>تیم آبی</strong>
              </div>

            </div>

            <div class="match-status">
              ● نیمه دوم
            </div>

          </div>


          <div class="match-card">

            <div class="league-name">
              🇪🇸 لالیگا
            </div>

            <div class="match-time">
              <span>22:00</span>
              <small>امشب</small>
            </div>

            <div class="teams">

              <div class="team">
                <div class="team-logo">⚪</div>
                <strong>تیم سفید</strong>
              </div>

              <div class="score">
                <span>-</span>
              </div>

              <div class="team">
                <div class="team-logo">🟣</div>
                <strong>تیم بنفش</strong>
              </div>

            </div>

            <div class="match-status upcoming">
              شروع نشده
            </div>

          </div>


          <div class="match-card">

            <div class="league-name">
              🏴 لیگ برتر انگلیس
            </div>

            <div class="match-time">
              <span>23:30</span>
              <small>امشب</small>
            </div>

            <div class="teams">

              <div class="team">
                <div class="team-logo">🔴</div>
                <strong>تیم قرمز</strong>
              </div>

              <div class="score">
                <span>-</span>
              </div>

              <div class="team">
                <div class="team-logo">🟡</div>
                <strong>تیم زرد</strong>
              </div>

            </div>

            <div class="match-status upcoming">
              شروع نشده
            </div>

          </div>

        </div>

      </div>
    </section>


    <!-- TABLE -->
    <section class="section" id="table">
      <div class="container">

        <div class="section-head">
          <div>
            <span class="section-label">LEAGUE TABLE</span>
            <h2>جدول لیگ</h2>
          </div>
        </div>

        <div class="table-box">

          <div class="table-title">
            <strong>🏆 لیگ برتر</strong>
            <span>هفته ۵</span>
          </div>

          <div class="table-row table-header">
            <span>#</span>
            <span>تیم</span>
            <span>بازی</span>
            <span>امتیاز</span>
          </div>

          <div class="table-row">
            <span class="rank first">1</span>
            <span class="club">🔴 تیم اول</span>
            <span>5</span>
            <strong>15</strong>
          </div>

          <div class="table-row">
            <span class="rank">2</span>
            <span class="club">🔵 تیم دوم</span>
            <span>5</span>
            <strong>12</strong>
          </div>

          <div class="table-row">
            <span class="rank">3</span>
            <span class="club">⚪ تیم سوم</span>
            <span>5</span>
            <strong>10</strong>
          </div>

          <div class="table-row">
            <span class="rank">4</span>
            <span class="club">🟡 تیم چهارم</span>
            <span>5</span>
            <strong>8</strong>
          </div>

        </div>

      </div>
    </section>


    <!-- PLAYERS -->
    <section class="section players-section" id="players">
      <div class="container">

        <div class="section-head">
          <div>
            <span class="section-label">FOOTBALL STARS</span>
            <h2>ستاره‌های فوتبال</h2>
          </div>
        </div>

        <div class="players-grid">

          <div class="player-card">
            <div class="player-number">07</div>
            <div class="player-glow"></div>

            <div class="player-avatar">👑</div>

            <div class="player-info">
              <span>Portugal</span>
              <h3>Cristiano Ronaldo</h3>
              <small>Forward</small>
            </div>
          </div>


          <div class="player-card">
            <div class="player-number">10</div>
            <div class="player-glow"></div>

            <div class="player-avatar">⭐</div>

            <div class="player-info">
              <span>Argentina</span>
              <h3>Lionel Messi</h3>
              <small>Forward</small>
            </div>
          </div>


          <div class="player-card">
            <div class="player-number">10</div>
            <div class="player-glow"></div>

            <div class="player-avatar">⚡</div>

            <div class="player-info">
              <span>France</span>
              <h3>Kylian Mbappé</h3>
              <small>Forward</small>
            </div>
          </div>

        </div>

      </div>
    </section>

  </main>


  <!-- FOOTER -->
  <footer class="footer">
    <div class="container footer-inner">

      <div class="footer-logo">
        ⚽ فوتبالیا
      </div>

      <p>
        دنیای فوتبال، همین‌جا.
      </p>

      <span>
        © 2026 Footballia
      </span>

    </div>
  </footer>


  <script src="script.js"></script>

</body>
</html>