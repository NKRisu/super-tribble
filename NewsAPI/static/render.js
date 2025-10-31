



function escapeHtml(str = "") {
    return String(str)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function renderArticles(articles) {
    const container = document.getElementById("news-container");
    if (!container) return;
    container.innerHTML = "";

    if (!articles || articles.length === 0) {
        container.innerHTML = "<p>No articles found.</p>";
        return;
    }

    articles.forEach(a => {
        const card = document.createElement("article");
        card.className = "article-card";

        const imgSrc = a.urlToImage;

        card.innerHTML = `
            <img src="${escapeHtml(imgSrc)}" alt="${escapeHtml(a.title || 'Article image')}" class="article-image" />
            <div class="article-body">
                <h3>${escapeHtml(a.title || '')}</h3>
                <p>${escapeHtml(a.description || '')}</p>
                <a href="${escapeHtml(a.url || '#')}" target="_blank" rel="noopener noreferrer">Read more</a>
            </div>
        `;

        container.appendChild(card);
    });
}