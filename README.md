# footballia
<!DOCTYPE html>
<html lang="fa">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>فوتبالیا</title>
  <link rel="stylesheet" href="style.css">
</head>

<body>

<header>
  <div class="logo">⚽ فوتبالیا</div>
  <div class="subtitle">دنیای فوتبال، همین‌جا</div>
</header>

<nav class="menu">
  <button onclick="showPage('home')">🏠 خانه</button>
  <button onclick="showPage('news')">📰 اخبار</button>
  <button onclick="showPage('matches')">⚽ بازی‌ها</button>
  <button onclick="showPage('table')">🏆 جدول</button>
  <button onclick="showPage('players')">👤 بازیکنان</button>
</nav>

<div class="search-box">
  <input
    id="searchInput"
    type="text"
    placeholder="🔍 بازیکن، اخبار، بازی..."
    oninput="searchSite()"
  >
  <button onclick="searchSite()">جستجو</button>
</div>

<div id="searchResults"></div>

<main>

<section id="home" class="page active">

  <div class="hero">
    <div class="hero-content">

      <div class="badge">🔥 آخرین اخبار فوتبال</div>

      <h1>
        فوتبال را<br>
        <span>متفاوت</span> دنبال کن
      </h1>

      <p>
        اخبار، نتایج، جدول و ستاره‌های فوتبال
        در یک سایت حرفه‌ای.
      </p>

      <button class="hero-button" onclick="showPage('news')">
        📰 مشاهده اخبار
      </button>

    </div>
  </div>

  <div class="cards">

    <div class="info-card" onclick="showPage('news')">
      <div class="icon">📰</div>
      <h2>اخبار</h2>
      <p>جدیدترین اتفاقات دنیای فوتبال</p>
    </div>

    <div class="info-card" onclick="showPage('matches')">
      <div class="icon">⚽</div>
      <h2>بازی‌ها</h2>
      <p>نتایج و مسابقات مهم</p>
    </div>

    <div class="info-card" onclick="showPage('players')">
      <div class="icon">👑</div>
      <h2>ستاره‌ها</h2>
      <p>معروف‌ترین بازیکنان فوتبال</p>
    </div>

  </div>

</section>


<section id="news" class="page">

  <div class="section-title">
    <span>📰</span>
    <h2>آخرین اخبار</h2>
  </div>

  <div class="news-container">

    <article class="news-card">
      <span class="news-tag">🔥 مهم</span>
      <h3>دنیای فوتبال در آستانه یک مسابقه بزرگ</h3>
      <p>
        هواداران منتظر یکی از جذاب‌ترین مسابقات فوتبال هستند.
      </p>
      <small>امروز</small>
    </article>

    <article class="news-card">
      <span class="news-tag">⚽ فوتبال</span>
      <h3>ستاره‌های بزرگ آماده فصل جدید</h3>
      <p>
        رقابت بین بهترین بازیکنان دوباره داغ شده است.
      </p>
      <small>امروز</small>
    </article>

    <article class="news-card">
      <span class="news-tag">🏆 رقابت</span>
      <h3>قهرمان فصل چه تیمی خواهد بود؟</h3>
      <p>
        تیم‌های بزرگ برای رسیدن به جام آماده می‌شوند.
      </p>
      <small>دیروز</small>
    </article>

  </div>

</section>


<section id="matches" class="page">

  <div class="section-title">
    <span>⚽</span>
    <h2>بازی‌ها</h2>
  </div>

  <div class="match-card">

    <div class="competition">
      🏆 لیگ قهرمانان آسیا
    </div>

    <div class="teams">

      <div>
        <div class="team-logo">🇮🇷</div>
        <strong>استقلال</strong>
      </div>

      <div class="score">
        3 <span>-</span> 0
      </div>

      <div>
        <div class="team-logo">🇶🇦</div>
        <strong>السد</strong>
      </div>

    </div>

    <div class="match-date">
      📅 ۱۴ سپتامبر ۲۰۲۶
    </div>

  </div>


  <div class="match-card upcoming">

    <div class="competition">
      🔜 بازی بعدی
    </div>

    <div class="teams">

      <div>
        <div class="team-logo">⚽</div>
        <strong>تیم اول</strong>
      </div>

      <div class="score">
        VS
      </div>

      <div>
        <div class="team-logo">⚽</div>
        <strong>تیم دوم</strong>
      </div>

    </div>

    <div class="match-date">
      به‌زودی
    </div>

  </div>

</section>


<section id="table" class="page">

  <div class="section-title">
    <span>🏆</span>
    <h2>جدول لیگ</h2>
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
          <td>🥇 تیم اول</td>
          <td>10</td>
          <td>25</td>
        </tr>

        <tr>
          <td>2</td>
          <td>🥈 تیم دوم</td>
          <td>10</td>
          <td>22</td>
        </tr>

        <tr>
          <td>3</td>
          <td>🥉 تیم سوم</td>
          <td>10</td>
          <td>19</td>
        </tr>

      </tbody>

    </table>

  </div>

</section>


<section id="players" class="page">

  <div class="section-title">
    <span>👤</span>
    <h2>ستاره‌های فوتبال</h2>
  </div>

  <div class="players-container">

    <div class="player-card">

      <div class="rating">93</div>

      <div class="player-photo">
        CR7
      </div>

      <div class="flag">🇵🇹</div>

      <h2>Cristiano Ronaldo</h2>

      <p>ST • Portugal</p>

      <div class="stats">
        <div><b>92</b><span>PAC</span></div>
        <div><b>95</b><span>SHO</span></div>
        <div><b>90</b><span>PAS</span></div>
        <div><b>88</b><span>PHY</span></div>
      </div>

    </div>


    <div class="player-card">

      <div class="rating">91</div>

      <div class="player-photo">
        MESSI
      </div>

      <div class="flag">🇦🇷</div>

      <h2>Lionel Messi</h2>

      <p>RW • Argentina</p>

      <div class="stats">
        <div><b>85</b><span>PAC</span></div>
        <div><b>94</b><span>SHO</span></div>
        <div><b>96</b><span>PAS</span></div>
        <div><b>80</b><span>PHY</span></div>
      </div>

    </div>


    <div class="player-card">

      <div class="rating">91</div>

      <div class="player-photo">
        MBAPPE
      </div>

      <div class="flag">🇫🇷</div>

      <h2>Kylian Mbappé</h2>

      <p>ST • France</p>

      <div class="stats">
        <div><b>97</b><span>PAC</span></div>
        <div><b>91</b><span>SHO</span></div>
        <div><b>93</b><span>PAS</span></div>
        <div><b>87</b><span>PHY</span></div>
      </div>

    </div>

  </div>

</section>

</main>

<footer>
  ⚽ فوتبالیا © 2026
</footer>

<script src="script.js"></script>

</body>
</html>