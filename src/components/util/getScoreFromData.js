// utils/getScoreFromData.js

const BATTER_FIELDS = [
  { key: "타석", label: "타석" },
  { key: "타율", label: "타율" },
  { key: "장타", label: "장타" },
  { key: "도루", label: "도루" },
  { key: "타점", label: "타점" },
];

const PITCHER_FIELDS = [
  { key: "이닝", label: "이닝" },
  { key: "방어율", label: "방어율" },
  { key: "삼진", label: "삼진" },
  { key: "피안타율", label: "피안타율" },
  { key: "볼넷", label: "볼넷" },
];

export function getScoreFromData(data) {
  if (!data) return [];

  const isBatter = data["타석"] !== undefined;
  const schema = isBatter ? BATTER_FIELDS : PITCHER_FIELDS;

  return schema.map(({ key, label }) => ({
    key,
    label,
    value: data[key] ?? 0,
  }));
}
