# News Feed App

This application displays news feed from various news agencies/services/platforms using data from the NewsAPI. Users can see the top trending news in United States (plans to add a language / country option in future) on initial page open, when search function is used, the code switches to querying ALL news sources with the specified search parameter from the past 7 days.

---

## Features

- Displays news feed for trending.
- Displays news feed for past week on any query.
- Reactive design to browser window movements.
- Uses public data from NewsAPI
- Provides a clean and user-friendly interface on the website.
- Short instructions on the website on how the site works.

---

## Technologies Used

### Languages and Frameworks

- **JavaScript**: Core language for the application logic.
- **HTML**: Structure of the web page.
- **CSS**: Styling for the map and UI.
- **Deno**: For local hosting and local functionality.

### Libraries

- **Deno**: A modern runtime for JavaScript and TypeScript, used to serve the application.

### APIs

- **NewsAPI**: Provides the actual news.

---

## How to Use the Application

1. **Run the Application**:

   - Ensure you have [Deno](https://deno.land/) installed on your system.
   - Start the server by running the following command in the terminal:
     ```bash
     deno run --allow-net --allow-env --allow-read --watch app.js
     ```
   - Open your browser and navigate to `http://localhost:8000`.

2. **View the trending news initially**:

   - The page will display the trending news for you in three columns. (or single column if your browser window is narrow)

3. **Any news with "Read more"**:
   - Click on the underlined read more to view additional details

---

## How to Update the Application

1. **Update Dependencies**:

   - Ensure you are using the latest version of Deno.

2. **Modify the Code**:
   - Update the [apiCalls.js] file to adjust API endpoints or add new features relating to API calls.
   - Modify [search.js] to enhance the search functionality. Such as:
     - Language selection
     - Country selection
     - time frame
     - any other wanted search related functionality

- Modify [render.js] to enhance any functionality related to how and what is picked from the JSON file from API and how it is used.

3. **Test the Application**:

   - Run the application locally and verify that all features work as expected. Trying to add console logs and descriptive messages on where and what the log is about will help troubleshooting any issues.

4. **Deploy Changes**:
   - Push the updated code to your GitHub repository.
   - Deploy the application to your preferred hosting platform.

---

## Folder Structure

NewsFeedApp/

├── app.js # Deno server for serving the application.

├── README.md # Documentation for the application.

├── views/

│ └── index.html # HTML file for the application.

├── static/

│ ├── images/ # Contains placeholder image and banner image.

│ ├── apiCalls.js # Handles API calls to NewsAPI.

│ ├── render.js # Handles what is rendered and how.

│ ├── render.js # Handles search querys and how that logic works.

│ └── styles.css # styling for webpage.

---

## APIs Used

### NewsAPI

- **Top headlines**:
  - Endpoint: `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}`
- **Everything**: Provides what ever news that match user's query parameters.
  - Endpoint: `https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&from=${weekAgo}&to=${today}&sortBy=${sortBy}&apiKey=${apiKey}`

---

## Known Issues and Future Improvements

### Known Issues

- **Web page may be slow**: When loading in, API response times on developer API-key is slow and only updates every 24 hours.
- **Error for missing file in console**: Clean up on this issue is coming, related to code logic not having a fallback at this point for missing image file.

### Future Improvements

- **Search improvements**: Implementing language, country, popularity ascending/descending, time frame and other search query params. Possibly restricting searched news articles to smaller number, current limit is API's max. (i. e. no limit...)
- **Caching**: Caching some information on page so not everything needs to be fetched.
- **Removing all the logging**: Removing logs (which i may or may not have done before pushing this to Git...)

---

Application created by **NKRisu** on GitHub.  
Using public data from the **NewsAPI**.
