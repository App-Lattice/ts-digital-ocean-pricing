import axios from 'axios';
import DropletWithSlugNotFoundError from './DropletWithSlugNotFoundError';

const droplet = async (slug: string): Promise<number> => {
  const {
    data: { sizes },
  } = await axios.get('https://api.digitalocean.com/v2/sizes?per_page=83', {
    headers: { Authorization: `Bearer ${process.env.DIGITAL_OCEAN_TOKEN}` },
  });

  for (const size of sizes) {
    if (size.slug === slug) {
      return size.price_hourly;
    }
  }

  throw new DropletWithSlugNotFoundError(slug);
};

export default droplet;
