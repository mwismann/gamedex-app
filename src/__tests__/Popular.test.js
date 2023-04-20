import fetchPopular from './__mocks__/fetchPopular';

describe('fetchJustReleased', () => {
  test('Should return defined data', () => {
    expect(fetchPopular()).toBeDefined();
  });

  test('Must return a value of 49', () => {
    expect(fetchPopular()).toHaveLength(49);
  });

  test('Eighth fetched game must be "Resident Evil 4 (2023 Remake)"', () => {
    expect(fetchPopular()[7].name).toBe('Resident Evil 4 (2023 Remake)');
  });
});
