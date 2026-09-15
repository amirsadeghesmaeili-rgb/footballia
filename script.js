function showPage(page) {
  document.querySelectorAll(".page").forEach(function(section) {
    section.classList.remove("active");
  });

  const selectedPage = document.getElementById(page);

  if (selectedPage) {
    selectedPage.classList.add("active");
  }

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

  document.getElementById("searchResults").innerHTML = "";
}

function searchSite() {
  const input = document
    .getElementById("searchInput")
    .value
    .trim()
    .toLowerCase();

  const results = document.getElementById("searchResults");

  if (input === "") {
    results.innerHTML = "";
    return;
  }

  const items = [
    {
      name: "👤 کریستیانو رونالدو",
      keywords: "رونالدو cristiano ronaldo cr7 کریستیانو"
    },
    {
      name: "👤 لیونل مسی",
      keywords: "مسی messi lionel لیونل"
    },
    {
      name: "👤 کیلیان امباپه",
      keywords: "امباپه mbappe kylian کیلیان"
    },
    {
      name: "📰 اخبار",
      keywords: "اخبار خبر news"
    },
    {
      name: "⚽ بازی‌ها",
      keywords: "بازی بازیها مسابقه matches"
    },
    {
      name: "🏆 جدول",
      keywords: "جدول لیگ table"
    },
    {
      name: "👤 بازیکنان",
      keywords: "بازیکن بازیکنان players"
    }
  ];

  const found = items.filter(function(item) {
    return (
      item.name.toLowerCase().includes(input) ||
      item.keywords.toLowerCase().includes(input)
    );
  });

  if (found.length === 0) {
    results.innerHTML = `
      <div class="search-result">
        ❌ چیزی پیدا نشد!
      </div>
    `;
    return;
  }

  results.innerHTML = found.map(function(item) {
    let page = "";

    if (item.keywords.includes("اخبار")) {
      page = "news";
    }

    if (item.keywords.includes("بازی")) {
      page = "matches";
    }

    if (item.keywords.includes("جدول")) {
      page = "table";
    }

    if (
      item.keywords.includes("رونالدو") ||
      item.keywords.includes("مسی") ||
      item.keywords.includes("امباپه") ||
      item.keywords.includes("بازیکنان")
    ) {
      page = "players";
    }

    return `
      <div
        class="search-result"
        onclick="openSearchResult('${page}')"
      >
        🔎 ${item.name}
      </div>
    `;
  }).join("");
}

function openSearchResult(page) {
  if (page !== "") {
    showPage(page);
  }

  document.getElementById("searchResults").innerHTML = "";
  document.getElementById("searchInput").value = "";
}

document
  .getElementById("searchInput")
  .addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      searchSite();
    }
  });

document.querySelectorAll(".info-card").forEach(function(card, index) {
  card.style.opacity = "0";
  card.style.transform = "translateY(25px)";

  setTimeout(function() {
    card.style.transition = ".7s";
    card.style.opacity = "1";
    card.style.transform = "translateY(0)";
  }, 250 + index * 150);
});