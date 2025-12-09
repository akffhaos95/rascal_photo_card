// utils/getScoreFromData.js

const BATTER_FIELDS = [
  { key: "타율", label: "타율" },
  { key: "득점", label: "득점" },
  { key: "타점", label: "타점" },
  { key: "도루", label: "도루" },
  { key: "OPS", label: "OPS" },
];

const PITCHER_FIELDS = [
  { key: "이닝", label: "이닝" },
  { key: "방어율", label: "방어율" },
  { key: "탈삼진", label: "탈삼진" },
  { key: "피안타율", label: "피안타율" },
  { key: "제구", label: "제구" },
];

export function getScoreFromData(data) {
  if (!data) return [];

  const isBatter = data["OPS"] !== undefined;
  const schema = isBatter ? BATTER_FIELDS : PITCHER_FIELDS;

  return schema.map(({ key, label }) => ({
    key,
    label,
    value: data[key] ?? 0,
  }));
}
