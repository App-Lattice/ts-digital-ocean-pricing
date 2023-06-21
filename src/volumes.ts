export type Volume = {
  size: number;
};

const volumes = (vols: Volume[]): number =>
  vols.reduce(
    (priceHourly, volume) => (priceHourly += volume.size * 10),
    0
  );

export default volumes;
