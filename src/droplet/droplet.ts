import { createApiClient } from 'dots-wrapper';
import DropletWithSlugNotFoundError from './DropletWithSlugNotFoundError';

const droplet = async (slug: string): Promise<number> => {
  const dots = createApiClient({
    token:
      'dop_v1_4632a4675b2d1af894ab4621d88dcf8a860128fa916feb9b63fc54c48ac6b1eb',
  });

  const {
    data: { sizes },
  } = await dots.size.listSizes({});

  for (const size of sizes) {
    if (size.slug === slug) {
      return size.price_hourly;
    }
  }

  throw new DropletWithSlugNotFoundError(slug);
};

export default droplet;
