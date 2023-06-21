import DropletWithSlugNotFoundError from './DropletWithSlugNotFoundError';
import droplet from './droplet';

describe('droplet', () => {
  test('returns error if slug is not found', async () => {
    try {
      await droplet('does not exist');
    } catch (e) {
      expect(e).toBeInstanceOf(DropletWithSlugNotFoundError);
    }
  });

  test('returns the correct price', async () => {
    const res = await droplet('s-1vcpu-1gb');
    expect(res).toEqual(0.00893);
  });
});
