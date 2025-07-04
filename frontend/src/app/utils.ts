export function PxToVw({
  px,
  scale = 1,
  view = 1920,
}: {
  px: number;
  scale?: number;
  view?: number;
  isOnlyNumber?: number;
}) {
  const Vw = ((px * 100) / view) * (scale < 0.5 ? 1 : scale);

  return `${Vw}vw`;
}
