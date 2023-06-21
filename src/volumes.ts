export type Volume = {
  size: number;
};

const volumes = (vols: Volume[]): number => {
  const totalSize = vols.reduce(
    (totalSize, volume) => (totalSize += volume.size),
    0
  );
  const priceMonthly = totalSize * 0.1;

  return +(priceMonthly / 672).toFixed(3);
};
export default volumes;
