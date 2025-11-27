export function getMetricFromData(data) {
  if (!data) return [];

  const isBatter = data["타석"] !== undefined;
  const schema = isBatter ? "V.C" : "WHIP";

  return { label: schema, value: data[schema] ?? 0 };
}
