export function scaleVariable({
  px,
  scale,
}: {
  px: string;
  scale: number;
}): string {
  const vwNumber = px.split("vw");

  return `${Number(vwNumber[0]) * (scale < 0.5 ? 1 : scale)}vw`;
}
