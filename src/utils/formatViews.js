// utils/formatViews.js
export function formatViews(viewCount) {
  const num = Number(viewCount);
  if (isNaN(num)) return viewCount;

  if (num >= 1_000_000_000) return (num / 1_000_000_000).toFixed(1).replace(/\.0$/, '') + "B";
  if (num >= 1_000_000) return (num / 1_000_000).toFixed(1).replace(/\.0$/, '') + "M";
  if (num >= 1_000) return (num / 1_000).toFixed(1).replace(/\.0$/, '') + "K";
  return num.toString();
}
