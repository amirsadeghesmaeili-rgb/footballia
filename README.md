<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="theme-color" content="#080808">
  <title>فوتبالیا | دنیای فوتبال</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header class="site-header">
    <div class="container header-inner">
      <a href="#home" class="logo">
        <span class="logo-ball">⚽</span>
        <span>فوتبالیا</span>
      </a>
      <nav class="nav" id="mainNav">
        <a href="#home">خانه</a>
        <a href="#news">اخبار</a>
        <a href="#matches">بازی‌ها</a>
        <a href="#table">جدول</a>
        <a href="#players">ستاره‌ها</a>
      </nav>
      <button class="menu-button" id="menuButton" type="button" aria-label="باز کردن منو">
        ☰
      </button>
    </div>
  </header>
  <main>
    <!-- HERO -->
    <section class="hero" id="home">
      <div class="hero-grid"></div>
      <div class="hero-light"></div>
      <div class="container hero-inner">
        <div class="hero-copy">
          <div class="eyebrow">
            <span class="live-dot"></span>
            دنیای فوتبال، همین‌جا
          </div>
          <h1>
            نبض فوتبال
            <span>اینجاست.</span>
          </h1>
          <p>
            اخبار، مسابقات، جدول لیگ‌ها و ستاره‌های فوتبال را
            در یک تجربه مدرن و سریع دنبال کن.
          </p>
          <div class="hero-actions">
            <a href="#news" class="button button-gold">
              📰 آخرین اخبار
            </a>
            <a href="#matches" class="button button-outline">
              ⚽ بازی‌های امروز
            </a>
          </div>
        </div>
        <div class="hero-visual">
          <div class="orbit orbit-one"></div>
          <div class="orbit orbit-two"></div>
          <div class="football">
            ⚽
          </div>
          <div class="floating-card card-top">
            <span>🔥</span>
            <div>
              <strong>اخبار جدید</strong>
              <small>همین الان</small>
            </div>
          </div>
          <div class="floating-card card-bottom">
            <span>🏆</span>
            <div>
              <strong>فوتبال زنده</strong>
              <small>نتایج مسابقات</small>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- QUICK NAV -->
    <section class="quick-section">
      <div class="container quick-grid">
        <a href="#news" class="quick-card">
          <div class="quick-icon">📰</div>
          <div>
            <strong>آخرین اخبار</strong>
            <span>مهم‌ترین اتفاقات</span>
          </div>
          <b>←</b>
        </a>
        <a href="#matches" class="quick-card">
          <div class="quick-icon">⚽</div>
          <div>
            <strong>مسابقات</strong>
            <span>بازی‌های امروز</span>
          </div>
          <b>←</b>
        </a>
        <a href="#table" class="quick-card">
          <div class="quick-icon">🏆</div>
          <div>
            <strong>جدول لیگ</strong>
            <span>آخرین وضعیت</span>
          </div>
          <b>←</b>
        </a>
        <a href="#players" class="quick-card">
          <div class="quick-icon">⭐</div>
          <div>
            <strong>ستاره‌ها</strong>
            <span>بازیکنان بزرگ</span>
          </div>
          <b>←</b>
        </a>
      </div>
    </section>
    <!-- NEWS -->
    <section class="section" id="news">
      <div class="container">
        <div class="section-heading">
          <div>
            <span class="section-kicker">FOOTBALL NEWS</span>
            <h2>آخرین اخبار</h2>
          </div>
          <div class="search-box">
            <span>⌕</span>
            <input
              id="searchInput"
              type="search"
              placeholder="جستجوی اخبار..."
              autocomplete="off"
            >
          </div>
        </div>
        <div id="newsGrid" class="news-grid">
          <!-- خبرهای Supabase اینجا قرار می‌گیرند -->
          <article class="news-card fallback-news">
            <div class="news-cover">
              <span class="cover-icon">⚽</span>
              <span class="category">فوتبال</span>
            </div>
            <div class="news-body">
              <span class="news-date">امروز</span>
              <h3>به فوتبالیا خوش آمدید!</h3>
              <p>
                جدیدترین اخبار و اتفاقات دنیای فوتبال را در فوتبالیا دنبال کنید.
              </p>
            </div>
          </article>
        </div>
        <p id="newsEmpty" class="empty-message" hidden>
          خبری با این عبارت پیدا نشد.
        </p>
      </div>
    </section>
    <!-- MATCHES -->
    <section class="section matches-section" id="matches">
      <div class="container">
        <div class="section-heading">
          <div>
            <span class="section-kicker">MATCH CENTER</span>
            <h2>بازی‌های امروز</h2>
          </div>
          <div class="live-label">
            <span></span>
            LIVE
          </div>
        </div>
        <div class="matches-grid">
          <article class="match-card">
            <div class="match-league">
              <span>🏆</span>
              لیگ قهرمانان اروپا
            </div>
            <div class="match-time">
              <strong>20:30</strong>
              <span>امشب</span>
            </div>
            <div class="match-teams">
              <div class="team">
                <div class="team-badge red">R</div>
                <strong>تیم قرمز</strong>
              </div>
              <div class="match-score">
                <strong>2</strong>
                <span>:</span>
                <strong>1</strong>
              </div>
              <div class="team">
                <div class="team-badge blue">B</div>
                <strong>تیم آبی</strong>
              </div>
            </div>
            <div class="match-state live-state">
              <span></span>
              در حال برگزاری
            </div>
          </article>
          <article class="match-card">
            <div class="match-league">
              <span>🇪🇸</span>
              لالیگا
            </div>
            <div class="match-time">
              <strong>22:00</strong>
              <span>امشب</span>
            </div>
            <div class="match-teams">
              <div class="team">
                <div class="team-badge white">W</div>
                <strong>تیم سفید</strong>
              </div>
              <div class="match-score upcoming-score">
                <strong>-</strong>
              </div>
              <div class="team">
                <div class="team-badge purple">P</div>
                <strong>تیم بنفش</strong>
              </div>
            </div>
            <div class="match-state">
              شروع نشده
            </div>
          </article>
          <article class="match-card">
            <div class="match-league">
              <span>🏴</span>
              لیگ برتر انگلیس
            </div>
            <div class="match-time">
              <strong>23:30</strong>
              <span>امشب</span>
            </div>
            <div class="match-teams">
              <div class="team">
                <div class="team-badge red">R</div>
                <strong>تیم قرمز</strong>
              </div>
              <div class="match-score upcoming-score">
                <strong>-</strong>
              </div>
              <div class="team">
                <div class="team-badge yellow">Y</div>
                <strong>تیم زرد</strong>
              </div>
            </div>
            <div class="match-state">
              شروع نشده
            </div>
          </article>
        </div>
      </div>
    </section>
    <!-- TABLE -->
    <section class="section" id="table">
      <div class="container">
        <div class="section-heading">
          <div>
            <span class="section-kicker">LEAGUE TABLE</span>
            <h2>جدول لیگ</h2>
          </div>
        </div>
        <div class="table-card">
          <div class="table-top">
            <div>
              <span class="cup">🏆</span>
              <div>
                <strong>لیگ برتر</strong>
                <small>فصل ۲۰۲۶</small>
              </div>
            </div>
            <span class="week">هفته ۵</span>
          </div>
          <div class="table-head">
            <span>#</span>
            <span>تیم</span>
            <span>بازی</span>
            <span>امتیاز</span>
          </div>
          <div class="table-line">
            <span class="position gold">1</span>
            <strong>🔴 تیم اول</strong>
            <span>5</span>
            <b>15</b>
          </div>
          <div class="table-line">
            <span class="position">2</span>
            <strong>🔵 تیم دوم</strong>
            <span>5</span>
            <b>12</b>
          </div>
          <div class="table-line">
            <span class="position">3</span>
            <strong>⚪ تیم سوم</strong>
            <span>5</span>
            <b>10</b>
          </div>
          <div class="table-line">
            <span class="position">4</span>
            <strong>🟡 تیم چهارم</strong>
            <span>5</span>
            <b>8</b>
          </div>
        </div>
      </div>
    </section>
    <!-- PLAYERS -->
    <section class="section players-section" id="players">
      <div class="container">
        <div class="section-heading">
          <div>
            <span class="section-kicker">FOOTBALL STARS</span>
            <h2>ستاره‌های فوتبال</h2>
          </div>
        </div>
        <div class="players-grid">
          <article class="player-card ronaldo">
            <span class="player-number">07</span>
            <div class="player-light"></div>
            <div class="player-symbol">
              👑
            </div>
            <div class="player-details">
              <span>PORTUGAL</span>
              <h3>Cristiano Ronaldo</h3>
              <small>Forward</small>
            </div>
          </article>
          <article class="player-card messi">
            <span class="player-number">10</span>
            <div class="player-light"></div>
            <div class="player-symbol">
              ⭐
            </div>
            <div class="player-details">
              <span>ARGENTINA</span>
              <h3>Lionel Messi</h3>
              <small>Forward</small>
            </div>
          </article>
          <article class="player-card mbappe">
            <span class="player-number">10</span>
            <div class="player-light"></div>
            <div class="player-symbol">
              ⚡
            </div>
            <div class="player-details">
              <span>FRANCE</span>
              <h3>Kylian Mbappé</h3>
              <small>Forward</small>
            </div>
          </article>
        </div>
      </div>
    </section>
  </main>
  <footer class="footer">
    <div class="container footer-inner">
      <a href="#home" class="footer-logo">
        ⚽ فوتبالیا
      </a>
      <p>
        دنیای فوتبال، همین‌جا.
      </p>
      <span>
        © 2026 Footballia
      </span>
    </div>
  </footer>
  <!-- Supabase -->
  <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
  <!-- Main JS -->
  <script src="script.js"></script>
</body>
</html>