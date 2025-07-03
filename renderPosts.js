function renderBlogList(containerId) {
  const container = document.getElementById(containerId);
  if (!container || !blogPosts) return;

  let html = "";
  blogPosts.forEach(post => {
    html += `
      <a class="post-card" href="${post.link}">
        <h2>${post.title}</h2>
        <p>${post.summary}</p>
        <span>By Dee Sanas — ${post.date}</span>
      </a>
    `;
  });

  container.innerHTML = html;
}

// Auto-run on load
document.addEventListener("DOMContentLoaded", () => {
  renderBlogList("posts-grid");
});
