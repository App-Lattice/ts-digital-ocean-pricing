const loadBalancer = (priceMonthly = 12): number =>
  +(priceMonthly / 672).toFixed(3);

export default loadBalancer;
