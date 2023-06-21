import { createApiClient } from 'dots-wrapper';
import DropletWithSlugNotFoundError from './DropletWithSlugNotFoundError';

const droplet = async (slug: string): Promise<number> => {
  const dots = createApiClient({
    token: process.env.DIGITAL_OCEAN_TOKEN,
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
