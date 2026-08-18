import type { NewsArticle } from "@/types/basketball";
import { formatDate, escapeHtml } from "@/utils/formatters";

const CATEGORY_ICON: Record<string, string> = {
  "Game Preview": "bi-calendar-event",
  "Game Review": "bi-clipboard-data",
  "Team News": "bi-people",
  "Player News": "bi-person-badge",
  League: "bi-trophy"
};

export function renderNewsCard(article: NewsArticle): string {
  const icon = CATEGORY_ICON[article.category] ?? "bi-newspaper";
  return `
    <div class="hz-card h-100 overflow-hidden" data-link="news/${article.id}" role="button" tabindex="0">
      <div class="hz-news-image" style="background: linear-gradient(135deg, var(--hz-accent-dim), var(--hz-surface-hover));">
        <i class="bi ${icon}"></i>
        <span class="hz-news-category">${escapeHtml(article.category)}</span>
      </div>
      <div class="p-3">
        <h3 class="h6 mb-2">${escapeHtml(article.title)}</h3>
        <p class="hz-text-muted small mb-3">${escapeHtml(article.excerpt)}</p>
        <div class="d-flex justify-content-between align-items-center">
          <span class="hz-text-muted small hz-mono">${formatDate(article.publishedDate)}</span>
          <span class="btn btn-sm btn-hz-outline">Read More</span>
        </div>
      </div>
    </div>
  `;
}
