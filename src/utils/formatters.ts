export function formatPercent(value: number, decimals = 1): string {
  return `${value.toFixed(decimals)}%`;
}

export function formatDecimal(value: number, decimals = 1): string {
  return value.toFixed(decimals);
}

export function formatWinPct(value: number): string {
  return value.toFixed(3).replace(/^0/, "");
}

export function formatDate(dateStr: string): string {
  const d = new Date(`${dateStr}T00:00:00`);
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

export function formatDateShort(dateStr: string): string {
  const d = new Date(`${dateStr}T00:00:00`);
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

export function heightToFeetInches(cm: number): string {
  const totalInches = Math.round(cm / 2.54);
  const feet = Math.floor(totalInches / 12);
  const inches = totalInches % 12;
  return `${feet}'${inches}"`;
}

export function kgToLbs(kg: number): number {
  return Math.round(kg * 2.20462);
}

export function initials(a: string, b: string): string {
  return `${a.charAt(0)}${b.charAt(0)}`.toUpperCase();
}

export function statusBadgeClass(status: "LIVE" | "UPCOMING" | "FINAL"): string {
  switch (status) {
    case "LIVE":
      return "badge-live";
    case "UPCOMING":
      return "badge-upcoming";
    case "FINAL":
      return "badge-final";
  }
}

export function escapeHtml(value: string): string {
  const div = document.createElement("div");
  div.textContent = value;
  return div.innerHTML;
}
