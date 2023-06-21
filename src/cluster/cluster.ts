import droplet from '../droplet/droplet';
import loadBalancer from '../loadBalancer';
import volumes, { Volume } from '../volumes';

type ClusterResources = {
  nodes: {
    size: string;
    count: number;
  };
  volumes: Volume[];
};

type ClusterPriceHourly = {
  total: number;
  droplets: number;
  volumes: number;
  loadBalancer: number;
};

const cluster = async ({
  nodes: { size, count },
  volumes: vols,
}: ClusterResources): Promise<ClusterPriceHourly> => {
  const dropletsPrice = +((await droplet(size)) * count).toFixed(3);
  const volumesPrice = volumes(vols);
  const loadBalancerPrice = loadBalancer();

  return {
    total: +(dropletsPrice + volumesPrice + loadBalancerPrice).toFixed(3),
    droplets: dropletsPrice,
    volumes: volumesPrice,
    loadBalancer: loadBalancerPrice,
  };
};

export default cluster;
