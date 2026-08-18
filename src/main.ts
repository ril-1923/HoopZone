import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./styles/main.css";
import * as bootstrap from "bootstrap";

import { renderNavbar, setActiveNavItem } from "@/components/navbar";
import { globalSearch } from "@/utils/search";

import * as homePage from "@/pages/home";
import * as gamesPage from "@/pages/games";
import * as teamsPage from "@/pages/teams";
import * as playersPage from "@/pages/players";
import * as standingsPage from "@/pages/standings";
import * as statisticsPage from "@/pages/statistics";
import * as newsPage from "@/pages/news";

interface PageModule {
  render(param?: string): string;
  init(param?: string): void;
}

const routes: Record<string, PageModule> = {
  "": homePage,
  games: gamesPage,
  teams: teamsPage,
  players: playersPage,
  standings: standingsPage,
  statistics: statisticsPage,
  news: newsPage
};

const app = document.getElementById("app");

function buildLayout(): void {
  if (!app) return;
  app.innerHTML = `
    ${renderNavbar()}
    <main id="hzPage"></main>
    <footer class="hz-footer">
      <div class="container d-flex flex-wrap justify-content-between align-items-center gap-3">
        <div class="hz-brand" style="font-size: 1.1rem;">
          <span class="hz-brand-ball"><i class="bi bi-dribbble"></i></span>
          Hoop<span class="hz-brand-zone">Zone</span>
        </div>
        <p class="mb-0">Built with Vite + TypeScript + Bootstrap 5. Mock data for demo purposes only.</p>
      </div>
    </footer>
  `;
}

function parseHash(): { route: string; param?: string } {
  const raw = window.location.hash.replace(/^#\/?/, "");
  const [route, param] = raw.split("/");
  return { route: route ?? "", param: param || undefined };
}

function showLoading(): void {
  const page = document.getElementById("hzPage");
  if (!page) return;
  page.innerHTML = `
    <div class="container hz-section">
      <div class="row g-3">
        ${Array.from({ length: 4 })
          .map(() => `<div class="col-md-6"><div class="hz-skeleton"></div></div>`)
          .join("")}
      </div>
    </div>`;
}

function renderRoute(): void {
  const { route, param } = parseHash();
  const page = routes[route];
  const container = document.getElementById("hzPage");
  if (!container) return;

  if (!page) {
    container.innerHTML = `
      <div class="container hz-section">
        <div class="hz-empty-state">
          <i class="bi bi-question-circle"></i>
          Page not found.
          <div class="mt-3"><a href="#/" data-link="" class="btn btn-hz-outline">Back to Home</a></div>
        </div>
      </div>`;
    setActiveNavItem("");
    return;
  }

  showLoading();
  // Simulate a brief loading state for perceived performance / to showcase skeletons.
  window.requestAnimationFrame(() => {
    container.innerHTML = page.render(param);
    page.init(param);
    setActiveNavItem(route);
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  });
}

function initGlobalNavigation(): void {
  document.addEventListener("click", (e) => {
    const target = (e.target as HTMLElement).closest<HTMLElement>("[data-link]");
    if (!target) return;
    e.preventDefault();
    const path = target.dataset.link ?? "";
    window.location.hash = `/${path}`;

    // Close any open offcanvas/collapse after navigating.
    const openOffcanvas = document.querySelector(".offcanvas.show");
    if (openOffcanvas) bootstrap.Offcanvas.getOrCreateInstance(openOffcanvas as HTMLElement).hide();
    const navCollapse = document.getElementById("hzNavCollapse");
    if (navCollapse?.classList.contains("show")) {
      bootstrap.Collapse.getOrCreateInstance(navCollapse).hide();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key !== "Enter") return;
    const target = (e.target as HTMLElement).closest<HTMLElement>("[data-link][role='button']");
    if (!target) return;
    target.click();
  });
}

function initSearch(): void {
  const input = document.getElementById("hzSearchInput") as HTMLInputElement | null;
  const results = document.getElementById("hzSearchResults");
  if (!input || !results) return;

  input.addEventListener("input", () => {
    const query = input.value;
    const matches = globalSearch(query);

    if (!query.trim()) {
      results.innerHTML = `<p class="hz-text-muted">Start typing to search teams, players, games, and news.</p>`;
      return;
    }

    if (!matches.length) {
      results.innerHTML = `<div class="hz-empty-state py-4"><i class="bi bi-search"></i>No results found for "${escapeAttr(query)}".</div>`;
      return;
    }

    const typeIcon: Record<string, string> = {
      team: "bi-shield",
      player: "bi-person",
      game: "bi-controller",
      news: "bi-newspaper"
    };
    const typeRoute: Record<string, string> = {
      team: "teams",
      player: "players",
      game: "games",
      news: "news"
    };

    results.innerHTML = matches
      .map(
        (m) => `
        <div class="hz-search-result" data-link="${typeRoute[m.type]}/${m.id}" role="button" tabindex="0">
          <span><i class="bi ${typeIcon[m.type]} me-2"></i>${escapeAttr(m.title)}<span class="hz-text-muted ms-2 small">${escapeAttr(m.subtitle)}</span></span>
          <i class="bi bi-chevron-right hz-text-muted"></i>
        </div>`
      )
      .join("");
  });
}

function escapeAttr(value: string): string {
  const div = document.createElement("div");
  div.textContent = value;
  return div.innerHTML;
}

function initThemeToggle(): void {
  const STORAGE_KEY = "hoopzone-theme";
  const root = document.documentElement;

  function applyTheme(theme: "dark" | "light"): void {
    root.setAttribute("data-bs-theme", theme);
    const icon = document.getElementById("hzThemeIcon");
    if (icon) icon.className = theme === "dark" ? "bi bi-moon-stars" : "bi bi-sun";
    localStorage.setItem(STORAGE_KEY, theme);
  }

  const saved = (localStorage.getItem(STORAGE_KEY) as "dark" | "light" | null) ?? "dark";
  applyTheme(saved);

  document.addEventListener("click", (e) => {
    const btn = (e.target as HTMLElement).closest<HTMLElement>("#hzThemeToggle");
    if (!btn) return;
    const current = root.getAttribute("data-bs-theme") === "dark" ? "dark" : "light";
    applyTheme(current === "dark" ? "light" : "dark");
  });
}

function bootstrapApp(): void {
  buildLayout();
  initGlobalNavigation();
  initSearch();
  initThemeToggle();
  renderRoute();
  window.addEventListener("hashchange", renderRoute);
}

document.addEventListener("DOMContentLoaded", bootstrapApp);
