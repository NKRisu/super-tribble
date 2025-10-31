
// uses topHeadLinesUrl() at first, when search parameter is given, uses everythingUrl()

async function handleSearch(e) {
    if (e && typeof e.preventDefault === "function") e.preventDefault();
    const container = document.getElementById("news-container");
    if (!container) return;
    container.innerHTML = "<p>Loading...</p>";

    try {
        const inputEl = document.getElementById("queryString");
        const query = inputEl ? inputEl.value.trim() : "";

        // Choose endpoint: top headlines if no query, everything if query present
        const url = query ? buildEverythingUrl() : buildTopHeadlinesUrl();

        const res = await fetch(url);
        if (!res.ok) throw new Error("Error: " + res.status);
        const data = await res.json();

        // delegate rendering (renderArticles provided by render.js)
        renderArticles(data.articles || []);
    } catch (err) {
        console.error(err);
        container.innerHTML = "<p>Error fetching articles. See console for details.</p>";
    }
}

// Wire up form submit and initial load
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("searchForm");
    if (form) {
        form.addEventListener("submit", handleSearch);
    }
    // Initial load: fetch top headlines if input empty, or run search if input has value
    handleSearch();
});