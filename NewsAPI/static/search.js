/*
    uses topHeadLinesUrl() at first with placeholder
    uses everythingUrl() if search word is given
    uses topHeadLinesUrl() if country code is given
*/

async function handleSearch(e) {
    if (e && typeof e.preventDefault === "function") e.preventDefault();
    const container = document.getElementById("news-container");
    if (!container) return;
    container.innerHTML = "<p>Loading...</p>";

    try {
        const inputQ = document.getElementById("queryString");
        const query = inputQ ? inputQ.value.trim() : "";    // searched term

        const inputC = document.getElementById("localString");
        const localQuery = inputC ? inputC.value.trim() : "";   // searched countrycode

        const url = query 
            ? buildEverythingUrl(query)
            : buildTopHeadlinesUrl(localQuery);

        const res = await fetch(url);
        if (!res.ok) throw new Error("Error: " + res.status);
        const data = await res.json();

        // throw it to rendererererer
        renderArticles(data.articles || []);
    } catch (err) {
        console.error(err);
        container.innerHTML = "<p>Error fetching articles. See console for details.</p>";
    }
}

// wire up form submits and initial load
document.addEventListener("DOMContentLoaded", () => {
    const searchForm = document.getElementById("searchForm");
    if (searchForm) {
        searchForm.addEventListener("submit", handleSearch);
    }

    const localForm = document.getElementById("localForm");
    if (localForm){
        localForm.addEventListener("submit", handleSearch)
    }
    // initial load: fetch top headlines if input empty, or run search if input has value
    handleSearch();
});