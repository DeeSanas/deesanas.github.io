function escapeHTML(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function postCardTemplate(post) {
  return `
    <article class="post-card">
      <span class="tag">${escapeHTML(post.category)}</span>
      <h3><a href="${escapeHTML(post.link)}">${escapeHTML(post.title)}</a></h3>
      <p>${escapeHTML(post.summary)}</p>
      <div class="card-meta">
        <time datetime="${escapeHTML(post.dateISO)}">${escapeHTML(post.date)}</time>
        <span aria-hidden="true">·</span>
        <span>${escapeHTML(post.readTime)}</span>
      </div>
    </article>
  `;
}

function renderBlogList(containerId, options = {}) {
  const container = document.getElementById(containerId);
  if (!container || !Array.isArray(blogPosts)) return;

  const posts = options.excludeFeatured
    ? blogPosts.filter((post) => !post.featured)
    : blogPosts;

  container.innerHTML = posts.map(postCardTemplate).join("");
}

function renderFeaturedPost(containerId) {
  const container = document.getElementById(containerId);
  const post = blogPosts.find((item) => item.featured) || blogPosts[0];
  if (!container || !post) return;

  container.innerHTML = `
    <article class="featured-card">
      <div class="featured-card__content">
        <div>
          <span class="tag">${escapeHTML(post.category)}</span>
          <h3><a href="${escapeHTML(post.link)}">${escapeHTML(post.title)}</a></h3>
          <p>${escapeHTML(post.summary)}</p>
        </div>
        <div class="featured-card__meta">
          <span>By Dee Sanas</span>
          <span aria-hidden="true">·</span>
          <time datetime="${escapeHTML(post.dateISO)}">${escapeHTML(post.date)}</time>
          <span aria-hidden="true">·</span>
          <span>${escapeHTML(post.readTime)}</span>
        </div>
      </div>
      <div class="featured-card__aside" aria-hidden="true">
        <div>
          <span>${escapeHTML(post.featureLabel || "Featured insight")}</span>
          <strong>${escapeHTML(post.featureNote || post.title)}</strong>
        </div>
        <a href="${escapeHTML(post.link)}" tabindex="-1">Read the featured article →</a>
      </div>
    </article>
  `;
}

function renderResourceLibrary(containerId, statusId, searchId, categoryId) {
  const container = document.getElementById(containerId);
  const status = document.getElementById(statusId);
  const search = document.getElementById(searchId);
  const category = document.getElementById(categoryId);
  if (!container || !status || !search || !category) return;

  const categories = [...new Set(blogPosts.map((post) => post.category))].sort();
  category.insertAdjacentHTML(
    "beforeend",
    categories.map((item) => `<option value="${escapeHTML(item)}">${escapeHTML(item)}</option>`).join("")
  );

  const updateResults = () => {
    const query = search.value.trim().toLowerCase();
    const selectedCategory = category.value;
    const matches = blogPosts.filter((post) => {
      const searchableText = `${post.title} ${post.summary} ${post.category}`.toLowerCase();
      return (!query || searchableText.includes(query)) &&
        (!selectedCategory || post.category === selectedCategory);
    });

    status.textContent = `${matches.length} ${matches.length === 1 ? "article" : "articles"} found`;
    container.innerHTML = matches.length
      ? matches.map(postCardTemplate).join("")
      : `<div class="empty-state"><h3>No matching articles</h3><p>Try a broader keyword or select all topics.</p></div>`;
  };

  search.addEventListener("input", updateResults);
  category.addEventListener("change", updateResults);
  updateResults();
}

function renderRelatedPosts(containerId, currentLink, limit = 2) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = blogPosts
    .filter((post) => post.link !== currentLink)
    .slice(0, limit)
    .map(postCardTemplate)
    .join("");
}
