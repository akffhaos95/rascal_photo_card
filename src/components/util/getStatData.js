const STAT_COLORS = {
  Hit: "#2f6bff",
  Out: "#e74c3c",
  BB: "#6aff4d",
  Etc: "#9aa0a6",
  K: "#ff6b6b",
  H: "#4dabf7",
  Other: "#9aa0a6",
};

export function getStatData(data) {
  if (!data) return [];
  const isBatter = data["OPS"] !== undefined;
  return isBatter ? getStatDataBatter(data) : getStatDataPitcher(data);
}

function getStatDataBatter(data) {
  const totalPA = data["타석수"] ?? 0;

  const hit = data["안타수"] ?? 0;
  const strikeOut = data["삼진수"] ?? 0;
  const out = data["아웃수"] ?? 0;
  const walk = data["볼넷수"] ?? 0;
  const etc = Math.max(totalPA - (hit + out + walk), 0);

  return [
    { label: "Hit", value: hit, color: STAT_COLORS.Hit },
    {
      label: "Out",
      value: out,
      subLabel: "K",
      subValue: strikeOut,
      color: STAT_COLORS.Out,
    },
    { label: "BB", value: walk, color: STAT_COLORS.BB },
    { label: "Etc", value: etc, color: STAT_COLORS.Etc },
  ];
}

function getStatDataPitcher(data) {
  const total = data.타자수 ?? 0;

  const k = data.탈삼진수 ?? 0;
  const h = data.피안타수 ?? 0;
  const bb = data.볼넷수 ?? data.사사구수 ?? 0;
  const other = Math.max(total - (k + h + bb), 0);

  return [
    { label: "K", value: k, color: STAT_COLORS.K },
    { label: "H", value: h, color: STAT_COLORS.H },
    { label: "BB", value: bb, color: STAT_COLORS.BB },
    { label: "Other", value: other, color: STAT_COLORS.Other },
  ];
}
