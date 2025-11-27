export const hexToRgba = (hex, alpha = 0.25) => {
  if (!hex) return `rgba(255,255,255,${alpha})`; // ✅ fallback

  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};
