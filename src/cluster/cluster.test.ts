import cluster from './cluster';
import { Volume } from '../volumes';

describe('cluster.test', () => {
  test('it returns the expected amount', async () => {
    const vols: Volume[] = [{ size: 8 }, { size: 5 }];

    const { total, droplets, volumes, loadBalancer } = await cluster({
      nodes: {
        size: 's-1vcpu-1gb',
        count: 3,
      },
      volumes: vols,
    });

    expect(total).toEqual(2.699);
    expect(droplets).toEqual(2.679);
    expect(volumes).toEqual(0.002);
    expect(loadBalancer).toEqual(0.018);
  });
});
