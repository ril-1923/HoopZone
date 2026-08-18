import type { NewsCategory } from "@/types/basketball";
import { news, getNewsById } from "@/data/news";
import { renderNewsCard } from "@/components/newsCard";
import { filterNewsByCategory, searchNews } from "@/utils/filters";
import { formatDate, escapeHtml } from "@/utils/formatters";
import { getTeamById } from "@/data/teams";
import { getPlayerById } from "@/data/players";

const CATEGORIES: (NewsCategory | "ALL")[] = ["ALL", "Game Preview", "Game Review", "Team News", "Player News", "League"];

function renderList(): string {
  const featured = news.find((n) => n.featured) ?? news[0];
  const filterBtns = CATEGORIES.map(
    (c, i) => `<button class="hz-filter-btn ${i === 0 ? "active" : ""}" data-category="${c}">${c === "ALL" ? "All" : c}</button>`
  ).join("");

  return `
    <div class="hz-page-header">
      <div class="container">
        <div class="hz-eyebrow">Off The Court</div>
        <h1 class="h2 mb-2">News</h1>
        <p class="hz-text-muted mb-0">Previews, reviews, and storylines from around the league.</p>
      </div>
    </div>
    <div class="container hz-section">
      <div class="hz-card p-4 mb-4" data-link="news/${featured.id}" role="button" tabindex="0">
        <span class="hz-eyebrow"><i class="bi bi-star-fill me-1"></i>Featured</span>
        <h2 class="h3 mt-2">${escapeHtml(featured.title)}</h2>
        <p class="hz-text-muted mb-3" style="max-width: 70ch;">${escapeHtml(featured.excerpt)}</p>
        <div class="d-flex align-items-center gap-3">
          <span class="badge-final">${escapeHtml(featured.category)}</span>
          <span class="hz-mono hz-text-muted small">${formatDate(featured.publishedDate)}</span>
        </div>
      </div>

      <div class="d-flex flex-wrap justify-content-between align-items-center gap-3 mb-4">
        <div class="d-flex flex-wrap gap-2" id="hzNewsFilters">${filterBtns}</div>
        <div class="input-group" style="max-width: 320px;">
          <span class="input-group-text hz-input"><i class="bi bi-search"></i></span>
          <input type="search" class="form-control hz-input" id="hzNewsSearch" placeholder="Search news...">
        </div>
      </div>
      <div class="row g-3" id="hzNewsGrid"></div>
    </div>
  `;
}

function renderGrid(category: NewsCategory | "ALL", query: string): void {
  const grid = document.getElementById("hzNewsGrid");
  if (!grid) return;

  let list = filterNewsByCategory(news, category);
  list = searchNews(list, query);

  if (!list.length) {
    grid.innerHTML = `<div class="col-12"><div class="hz-empty-state"><i class="bi bi-search"></i>No articles found.</div></div>`;
    return;
  }

  grid.innerHTML = list.map((n) => `<div class="col-md-4">${renderNewsCard(n)}</div>`).join("");
}

function initList(): void {
  let category: NewsCategory | "ALL" = "ALL";
  let query = "";

  renderGrid(category, query);

  document.getElementById("hzNewsFilters")?.addEventListener("click", (e) => {
    const btn = (e.target as HTMLElement).closest<HTMLButtonElement>(".hz-filter-btn");
    if (!btn) return;
    document.querySelectorAll("#hzNewsFilters .hz-filter-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    category = btn.dataset.category as NewsCategory | "ALL";
    renderGrid(category, query);
  });

  document.getElementById("hzNewsSearch")?.addEventListener("input", (e) => {
    query = (e.target as HTMLInputElement).value;
    renderGrid(category, query);
  });
}

function renderDetail(id: string): string {
  const article = getNewsById(id);
  if (!article) {
    return `<div class="container hz-section"><div class="hz-empty-state"><i class="bi bi-exclamation-triangle"></i>Article not found.<div class="mt-3"><a href="#/news" data-link="news" class="btn btn-hz-outline">Back to News</a></div></div></div>`;
  }

  const team = article.relatedTeamId ? getTeamById(article.relatedTeamId) : undefined;
  const player = article.relatedPlayerId ? getPlayerById(article.relatedPlayerId) : undefined;

  return `
    <div class="hz-page-header">
      <div class="container">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb mb-2">
            <li class="breadcrumb-item"><a href="#/news" data-link="news">News</a></li>
            <li class="breadcrumb-item active hz-text-muted">${escapeHtml(article.category)}</li>
          </ol>
        </nav>
        <span class="badge-final mb-2 d-inline-block">${escapeHtml(article.category)}</span>
        <h1 class="h2 mb-2">${escapeHtml(article.title)}</h1>
        <span class="hz-mono hz-text-muted small">${formatDate(article.publishedDate)}</span>
      </div>
    </div>
    <div class="container hz-section" style="max-width: 780px;">
      <p class="fs-5" style="color: var(--hz-text-muted);">${escapeHtml(article.excerpt)}</p>
      <p>${escapeHtml(article.body)}</p>

      ${
        team || player
          ? `<div class="hz-card p-3 mt-4">
              <div class="hz-eyebrow mb-2">Related</div>
              <div class="d-flex flex-wrap gap-2">
                ${team ? `<a href="#/teams/${team.id}" data-link="teams/${team.id}" class="btn btn-hz-outline btn-sm"><i class="bi bi-shield me-1"></i>${escapeHtml(team.city)} ${escapeHtml(team.name)}</a>` : ""}
                ${player ? `<a href="#/players/${player.id}" data-link="players/${player.id}" class="btn btn-hz-outline btn-sm"><i class="bi bi-person me-1"></i>${escapeHtml(player.firstName)} ${escapeHtml(player.lastName)}</a>` : ""}
              </div>
            </div>`
          : ""
      }
    </div>
  `;
}

export function render(param?: string): string {
  if (param) return renderDetail(param);
  return renderList();
}

export function init(param?: string): void {
  if (!param) initList();
}
