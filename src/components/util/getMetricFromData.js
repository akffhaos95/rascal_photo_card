export function getMetricFromData(data) {
  if (!data) return [];

  const isBatter = data["OPS"] !== undefined;
  const schema = isBatter ? "Value Create" : "WHIP";

  return { label: schema, value: data[schema] ?? 0 };
}
