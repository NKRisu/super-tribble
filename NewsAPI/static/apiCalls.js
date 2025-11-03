

// URL consts and URL examples
const topHeadlinesUrl = "https://newsapi.org/v2/top-headlines"; //"?country=countryCode&apiKey=";
const everythingUrl = "https://newsapi.org/v2/everything";      //"?q=apple&from=YYYY-MM-DD&to=YYYY-MM-DD&sortBy=sortTerm&apiKey=";


const apiKey = "-YOUR-API-KEY-HERE"; // Replace with your actual API key
// helpers
function todayDate() {
    let today = new Date();
    return today.toISOString().split("T")[0]; // Format: YYYY-MM-DD
}

function weekAgoDate() {
    let weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 7);
    return weekAgo.toISOString().split("T")[0]; // Format: YYYY-MM-DD
}
// builders
function buildTopHeadlinesUrl(country) {
    /*
    Relatively sure this works properly, it works when "us" is input, according to documentation
    this is correct aswell, but every other endpoint than "us" returns no articles. Even their example response
    shows 0 results and status ok. So this feature is somewhat null. Confirmed this with logs, returns code 200 OK.
    
    Here is code for building topheadlines for language or country anyways. Either returns status OK
    minor changes in text on webpage should be done to aid user in typing correct code as 
    "us" is country code, and "en" would be language code. generally these are interchangeable though

    const languageCode = country || "en"; // placeholder as "en" for english
    return `${topHeadlinesUrl}?language=${languageCode}&apiKey=${apiKey}`;

    const countryCode = country || "us"; // placeholder as "us" for United States
    return `${topHeadlinesUrl}?country=${countryCode}&apiKey=${apiKey}`;*/

    const countryCode = country || "us"; // placeholder as "us" for United States
    return `${topHeadlinesUrl}?country=${countryCode}&apiKey=${apiKey}`;
}

function buildEverythingUrl(search) {
    const query = search;
    const weekAgo = weekAgoDate();
    const today = todayDate();
    const sortBy = "popularity"; // placeholder if i implement sort options later
    return `${everythingUrl}?q=${encodeURIComponent(query)}&from=${weekAgo}&to=${today}&sortBy=${sortBy}&apiKey=${apiKey}`;
}