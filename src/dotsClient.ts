import { createApiClient } from 'dots-wrapper';

const dotsClient = createApiClient({
  endpoint: process.env.DIGITAL_OCEAN_API_URL,
  token: process.env.DIGITAL_OCEAN_TOKEN,
});

export default dotsClient;
