

// URL consts and URL examples
const topHeadlinesUrl = "https://newsapi.org/v2/top-headlines"; //"?country=countryCode&apiKey=";
const everythingUrl = "https://newsapi.org/v2/everything";      //"?q=apple&from=YYYY-MM-DD&to=YYYY-MM-DD&sortBy=sortTerm&apiKey=";


const apiKey = "-YOUR-API-KEY-HERE-"; // Replace with your actual API key

function todayDate() {
    let today = new Date();
    return today.toISOString().split("T")[0]; // Format: YYYY-MM-DD
}

function weekAgoDate() {
    let weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 7);
    return weekAgo.toISOString().split("T")[0]; // Format: YYYY-MM-DD
}

function searchTerm() {
    // Search term is what user wrote in search form input field
    const search = document.getElementById("queryString").value;
    return search; 
}

function buildTopHeadlinesUrl() {
    const country = "us"; // placeholder if i implement country selection later
    return `${topHeadlinesUrl}?country=${country}&apiKey=${apiKey}`;
}

function buildEverythingUrl() {
    const query = searchTerm();
    const weekAgo = weekAgoDate();
    const today = todayDate();
    const sortBy = "popularity"; // placeholder if i implement sort options later
    return `${everythingUrl}?q=${encodeURIComponent(query)}&from=${weekAgo}&to=${today}&sortBy=${sortBy}&apiKey=${apiKey}`;
}