<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>پنل مدیریت فوتبالیا</title>

  <link rel="stylesheet" href="style.css">

  <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>

  <style>
    * {
      box-sizing: border-box;
    }

    body {
      margin: 0;
      background: #080808;
      color: #fff;
      font-family: Arial, Tahoma, sans-serif;
    }

    .admin-page {
      min-height: 100vh;
      padding: 30px 15px 60px;
    }

    .admin-container {
      width: 100%;
      max-width: 1000px;
      margin: auto;
    }

    .admin-header {
      text-align: center;
      margin-bottom: 30px;
    }

    .admin-header h1 {
      color: #d4af37;
      margin-bottom: 10px;
      font-size: 32px;
    }

    .admin-header p {
      color: #aaa;
      margin: 0;
    }

    .back-home {
      display: inline-block;
      margin-top: 18px;
      color: #d4af37;
      text-decoration: none;
    }

    .login-box,
    .admin-panel {
      background: #111;
      border: 1px solid #292929;
      border-radius: 18px;
      padding: 25px;
      margin-bottom: 25px;
      box-shadow: 0 10px 30px rgba(0,0,0,.3);
    }

    .login-box h2,
    .admin-panel h2 {
      margin-top: 0;
      color: #d4af37;
    }

    .section-description {
      color: #999;
      margin-top: -5px;
      margin-bottom: 22px;
      line-height: 1.8;
    }

    .form-group {
      margin-bottom: 17px;
    }

    label {
      display: block;
      margin-bottom: 8px;
      color: #ddd;
      font-size: 14px;
    }

    input,
    textarea,
    select {
      width: 100%;
      padding: 13px 14px;
      border-radius: 10px;
      border: 1px solid #333;
      background: #181818;
      color: #fff;
      outline: none;
      font-family: inherit;
      font-size: 14px;
    }

    input:focus,
    textarea:focus,
    select:focus {
      border-color: #d4af37;
    }

    textarea {
      min-height: 150px;
      resize: vertical;
    }

    .form-row {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 15px;
    }

    .button-row {
      display: flex;
      gap: 12px;
      flex-wrap: wrap;
      margin-top: 20px;
    }

    button {
      border: 0;
      border-radius: 10px;
      padding: 13px 22px;
      cursor: pointer;
      font-family: inherit;
      font-size: 14px;
      font-weight: bold;
    }

    .gold-btn {
      background: #d4af37;
      color: #000;
    }

    .gold-btn:hover {
      opacity: .9;
    }

    .dark-btn {
      background: #292929;
      color: #fff;
    }

    .status {
      margin-top: 15px;
      padding: 12px;
      border-radius: 10px;
      display: none;
      line-height: 1.8;
    }

    .status.success {
      display: block;
      background: rgba(0, 180, 100, .12);
      border: 1px solid rgba(0, 180, 100, .35);
      color: #7ff0b5;
    }

    .status.error {
      display: block;
      background: rgba(255, 70, 70, .1);
      border: 1px solid rgba(255, 70, 70, .35);
      color: #ff8585;
    }

    .admin-only {
      display: none;
    }

    .divider {
      height: 1px;
      background: #292929;
      margin: 30px 0;
    }

    .logout-box {
      text-align: left;
      margin-bottom: 20px;
    }

    .logout-btn {
      background: #222;
      color: #ff7777;
      border: 1px solid #3a2222;
    }

    .hint {
      color: #777;
      font-size: 12px;
      margin-top: 6px;
      line-height: 1.7;
    }

    .footer {
      text-align: center;
      color: #666;
      margin-top: 30px;
      font-size: 13px;
    }

    @media (max-width: 700px) {
      .form-row {
        grid-template-columns: 1fr;
      }

      .admin-page {
        padding: 20px 12px 40px;
      }

      .login-box,
      .admin-panel {
        padding: 18px;
      }

      .admin-header h1 {
        font-size: 26px;
      }
    }
  </style>
</head>

<body>

<div class="admin-page">

  <div class="admin-container">

    <!-- HEADER -->
    <header class="admin-header">
      <h1>⚽ پنل مدیریت فوتبالیا</h1>
      <p>مدیریت اخبار و ستاره‌های فوتبال</p>

      <a class="back-home" href="index.html">
        ← بازگشت به سایت
      </a>
    </header>


    <!-- LOGIN -->
    <section class="login-box" id="loginBox">

      <h2>🔐 ورود به پنل</h2>

      <div class="form-group">
        <label for="loginEmail">ایمیل</label>
        <input
          type="email"
          id="loginEmail"
          placeholder="ایمیل مدیر"
          autocomplete="email"
        >
      </div>

      <div class="form-group">
        <label for="loginPassword">رمز عبور</label>
        <input
          type="password"
          id="loginPassword"
          placeholder="رمز عبور"
          autocomplete="current-password"
        >
      </div>

      <button
        type="button"
        class="gold-btn"
        id="loginBtn"
      >
        ورود به پنل
      </button>

      <div id="loginStatus" class="status"></div>

    </section>


    <!-- ADMIN CONTENT -->
    <div class="admin-only" id="adminContent">

      <div class="logout-box">
        <button
          type="button"
          class="logout-btn"
          id="logoutBtn"
        >
          خروج از حساب
        </button>
      </div>


      <!-- ========================= -->
      <!-- ADD NEWS -->
      <!-- ========================= -->

      <section class="admin-panel">

        <h2>📰 افزودن خبر جدید</h2>

        <p class="section-description">
          خبر جدید را وارد کن تا مستقیماً در بخش اخبار سایت فوتبالیا منتشر شود.
        </p>

        <form id="newsForm">

          <div class="form-group">
            <label for="newsTitle">
              عنوان خبر
            </label>

            <input
              type="text"
              id="newsTitle"
              placeholder="مثلاً: رئال مادرید آماده دیدار بزرگ امشب"
              required
            >
          </div>


          <div class="form-row">

            <div class="form-group">

              <label for="newsCategory">
                دسته‌بندی
              </label>

              <select id="newsCategory">

                <option value="فوتبال">
                  ⚽ فوتبال
                </option>

                <option value="رئال مادرید">
                  👑 رئال مادرید
                </option>

                <option value="بارسلونا">
                  🔵 بارسلونا
                </option>

                <option value="نقل و انتقالات">
                  🔄 نقل و انتقالات
                </option>

                <option value="لیگ قهرمانان">
                  🏆 لیگ قهرمانان
                </option>

                <option value="تیم ملی">
                  🇮🇷 تیم ملی
                </option>

              </select>

            </div>


            <div class="form-group">

              <label for="newsImage">
                لینک تصویر
              </label>

              <input
                type="url"
                id="newsImage"
                placeholder="https://..."
              >

            </div>

          </div>


          <div class="form-group">

            <label for="newsContent">
              متن خبر
            </label>

            <textarea
              id="newsContent"
              placeholder="متن کامل خبر را بنویس..."
              required
            ></textarea>

          </div>


          <button
            type="submit"
            class="gold-btn"
            id="publishNewsBtn"
          >
            🚀 انتشار خبر
          </button>

        </form>

        <div id="newsStatus" class="status"></div>

      </section>


      <!-- DIVIDER -->

      <div class="divider"></div>


      <!-- ========================= -->
      <!-- ADD PLAYER -->
      <!-- ========================= -->

      <section class="admin-panel">

        <h2>⚽ افزودن فوتبالیست</h2>

        <p class="section-description">
          بازیکن جدید را اضافه کن؛ بعد از انتشار، بازیکن به بازیکن‌های سایت
          فوتبالیا اضافه می‌شود.
        </p>


        <form id="playerForm">


          <!-- NAME -->

          <div class="form-group">

            <label for="playerName">
              نام بازیکن *
            </label>

            <input
              type="text"
              id="playerName"
              placeholder="مثلاً: Cristiano Ronaldo"
              required
            >

          </div>


          <!-- ROW -->

          <div class="form-row">


            <!-- COUNTRY -->

            <div class="form-group">

              <label for="playerCountry">
                کشور
              </label>

              <input
                type="text"
                id="playerCountry"
                placeholder="مثلاً: Portugal"
              >

            </div>


            <!-- NUMBER -->

            <div class="form-group">

              <label for="playerNumber">
                شماره پیراهن
              </label>

              <input
                type="text"
                id="playerNumber"
                placeholder="مثلاً: 7"
              >

            </div>

          </div>


          <!-- ROW -->

          <div class="form-row">


            <!-- POSITION -->

            <div class="form-group">

              <label for="playerPosition">
                پست
              </label>

              <select id="playerPosition">

                <option value="">
                  انتخاب پست
                </option>

                <option value="دروازه‌بان">
                  🧤 دروازه‌بان
                </option>

                <option value="مدافع">
                  🛡️ مدافع
                </option>

                <option value="هافبک">
                  🎯 هافبک
                </option>

                <option value="مهاجم">
                  ⚡ مهاجم
                </option>

                <option value="وینگر">
                  🔥 وینگر
                </option>

              </select>

            </div>


            <!-- ICON -->

            <div class="form-group">

              <label for="playerIcon">
                آیکون
              </label>

              <input
                type="text"
                id="playerIcon"
                placeholder="مثلاً: ⚽"
                value="⚽"
              >

              <div class="hint">
                اگر چیزی وارد نکنی، آیکون پیش‌فرض ⚽ استفاده می‌شود.
              </div>

            </div>

          </div>


          <!-- IMAGE -->

          <div class="form-group">

            <label for="playerImage">
              لینک عکس بازیکن
            </label>

            <input
              type="url"
              id="playerImage"
              placeholder="https://example.com/player.jpg"
            >

            <div class="hint">
              لینک مستقیم تصویر بازیکن را وارد کن.
            </div>

          </div>


          <!-- PUBLISH -->

          <div class="form-group">

            <label for="playerPublished">
              وضعیت انتشار
            </label>

            <select id="playerPublished">

              <option value="true">
                ✅ منتشر شود
              </option>

              <option value="false">
                🔒 منتشر نشود
              </option>

            </select>

          </div>


          <!-- BUTTON -->

          <div class="button-row">

            <button
              type="submit"
              class="gold-btn"
              id="addPlayerBtn"
            >
              ⚽ افزودن فوتبالیست
            </button>

            <button
              type="reset"
              class="dark-btn"
              id="resetPlayerBtn"
            >
              پاک کردن فرم
            </button>

          </div>

        </form>


        <div id="playerStatus" class="status"></div>

      </section>


    </div>


    <div class="footer">
      Footballia © 2026
    </div>

  </div>

</div>


<script>

  /* =========================================
     SUPABASE
  ========================================= */

  const SUPABASE_URL =
    "https://zalrujwcdrpeyibaoxss.supabase.co";

  const SUPABASE_KEY =
    "sb_publishable_kfRGV3Ugx0HtFfO_atcU_Q_tsKMm_BB";

  const supabaseClient =
    supabase.createClient(
      SUPABASE_URL,
      SUPABASE_KEY
    );


  /* =========================================
     ELEMENTS
  ========================================= */

  const loginBox =
    document.getElementById("loginBox");

  const adminContent =
    document.getElementById("adminContent");

  const loginBtn =
    document.getElementById("loginBtn");

  const logoutBtn =
    document.getElementById("logoutBtn");

  const loginStatus =
    document.getElementById("loginStatus");

  const newsForm =
    document.getElementById("newsForm");

  const newsStatus =
    document.getElementById("newsStatus");

  const playerForm =
    document.getElementById("playerForm");

  const playerStatus =
    document.getElementById("playerStatus");


  /* =========================================
     STATUS
  ========================================= */

  function showStatus(element, message, type) {

    element.textContent = message;

    element.className =
      "status " + type;

  }


  function clearStatus(element) {

    element.textContent = "";

    element.className =
      "status";

  }


  /* =========================================
     CHECK ADMIN
  ========================================= */

  async function checkAdmin(user) {

    if (!user) {
      return false;
    }

    const { data, error } =
      await supabaseClient
        .from("admins")
        .select("user_id")
        .eq("user_id", user.id)
        .maybeSingle();


    if (error) {

      console.error(
        "Admin check error:",
        error
      );

      return false;
    }


    return !!data;

  }


  /* =========================================
     SHOW / HIDE PANEL
  ========================================= */

  async function updateAdminUI() {

    const {
      data: {
        session
      }
    } =
      await supabaseClient.auth.getSession();


    if (!session) {

      loginBox.style.display = "block";
      adminContent.style.display = "none";

      return;
    }


    const isAdmin =
      await checkAdmin(session.user);


    if (!isAdmin) {

      loginBox.style.display = "block";
      adminContent.style.display = "none";

      showStatus(
        loginStatus,
        "این حساب دسترسی مدیریت ندارد.",
        "error"
      );

      return;
    }


    loginBox.style.display = "none";
    adminContent.style.display = "block";

  }


  /* =========================================
     LOGIN
  ========================================= */

  loginBtn.addEventListener(
    "click",
    async () => {

      clearStatus(loginStatus);

      const email =
        document.getElementById(
          "loginEmail"
        ).value.trim();

      const password =
        document.getElementById(
          "loginPassword"
        ).value;


      if (!email || !password) {

        showStatus(
          loginStatus,
          "ایمیل و رمز عبور را وارد کن.",
          "error"
        );

        return;
      }


      loginBtn.disabled = true;
      loginBtn.textContent = "در حال ورود...";


      const {
        data,
        error
      } =
        await supabaseClient.auth.signInWithPassword({
          email,
          password
        });


      loginBtn.disabled = false;
      loginBtn.textContent = "ورود به پنل";


      if (error) {

        console.error(error);

        showStatus(
          loginStatus,
          "ورود ناموفق بود: " + error.message,
          "error"
        );

        return;
      }


      const isAdmin =
        await checkAdmin(data.user);


      if (!isAdmin) {

        await supabaseClient.auth.signOut();

        showStatus(
          loginStatus,
          "این حساب مدیر نیست.",
          "error"
        );

        return;
      }


      clearStatus(loginStatus);

      updateAdminUI();

    }
  );


  /* =========================================
     LOGOUT
  ========================================= */

  logoutBtn.addEventListener(
    "click",
    async () => {

      await supabaseClient.auth.signOut();

      location.reload();

    }
  );


  /* =========================================
     ADD NEWS
  ========================================= */

  newsForm.addEventListener(
    "submit",
    async (event) => {

      event.preventDefault();

      clearStatus(newsStatus);


      const title =
        document.getElementById(
          "newsTitle"
        ).value.trim();

      const category =
        document.getElementById(
          "newsCategory"
        ).value;

      const content =
        document.getElementById(
          "newsContent"
        ).value.trim();

      const image_url =
        document.getElementById(
          "newsImage"
        ).value.trim();


      if (!title || !content) {

        showStatus(
          newsStatus,
          "عنوان و متن خبر الزامی است.",
          "error"
        );

        return;
      }


      const publishButton =
        document.getElementById(
          "publishNewsBtn"
        );


      publishButton.disabled = true;
      publishButton.textContent =
        "در حال انتشار...";


      const {
        error
      } =
        await supabaseClient
          .from("news")
          .insert([
            {
              title,
              category,
              content,
              image_url:
                image_url || null,
              is_published: true
            }
          ]);


      publishButton.disabled = false;
      publishButton.textContent =
        "🚀 انتشار خبر";


      if (error) {

        console.error(error);

        showStatus(
          newsStatus,
          "خطا در انتشار خبر: " +
            error.message,
          "error"
        );

        return;
      }


      showStatus(
        newsStatus,
        "✅ خبر با موفقیت منتشر شد.",
        "success"
      );


      newsForm.reset();

    }
  );


  /* =========================================
     ADD PLAYER
  ========================================= */

  playerForm.addEventListener(
    "submit",
    async (event) => {

      event.preventDefault();

      clearStatus(playerStatus);


      const name =
        document.getElementById(
          "playerName"
        ).value.trim();

      const country =
        document.getElementById(
          "playerCountry"
        ).value.trim();

      const number =
        document.getElementById(
          "playerNumber"
        ).value.trim();

      const position =
        document.getElementById(
          "playerPosition"
        ).value;

      const icon =
        document.getElementById(
          "playerIcon"
        ).value.trim() || "⚽";

      const image_url =
        document.getElementById(
          "playerImage"
        ).value.trim();

      const is_published =
        document.getElementById(
          "playerPublished"
        ).value === "true";


      if (!name) {

        showStatus(
          playerStatus,
          "نام بازیکن را وارد کن.",
          "error"
        );

        return;
      }


      const addPlayerBtn =
        document.getElementById(
          "addPlayerBtn"
        );


      addPlayerBtn.disabled = true;
      addPlayerBtn.textContent =
        "در حال اضافه کردن...";


      const {
        error
      } =
        await supabaseClient
          .from("players")
          .insert([
            {
              name,
              country:
                country || null,
              number:
                number || null,
              position:
                position || null,
              icon,
              image_url:
                image_url || null,
              is_published
            }
          ]);


      addPlayerBtn.disabled = false;
      addPlayerBtn.textContent =
        "⚽ افزودن فوتبالیست";


      if (error) {

        console.error(error);

        showStatus(
          playerStatus,
          "خطا در اضافه کردن بازیکن: " +
            error.message,
          "error"
        );

        return;
      }


      showStatus(
        playerStatus,
        "✅ بازیکن با موفقیت اضافه شد و در Supabase ذخیره شد.",
        "success"
      );


      playerForm.reset();


      document.getElementById(
        "playerIcon"
      ).value = "⚽";

    }
  );


  /* =========================================
     AUTH STATE
  ========================================= */

  supabaseClient.auth.onAuthStateChange(
    () => {
      updateAdminUI();
    }
  );


  /* =========================================
     START
  ========================================= */

  updateAdminUI();

</script>

</body>
</html>