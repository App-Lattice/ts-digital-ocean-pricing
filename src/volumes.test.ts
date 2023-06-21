import volumes, { Volume } from './volumes';

describe('volumes.test', () => {
  test('it returns expected sum', async () => {
    const vols: Volume[] = [{ size: 8 }, { size: 5 }, { size: 20 }];

    expect(volumes(vols)).toEqual(330);
  });
});
