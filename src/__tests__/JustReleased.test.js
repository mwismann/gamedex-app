import fetchJustReleased from './__mocks__/fetchJustReleased';

describe('fetchJustReleased', () => {
  test('Should return defined data', () => {
    expect(fetchJustReleased()).toBeDefined();
  });

  test('Must return a value of 8', () => {
    expect(fetchJustReleased()).toHaveLength(8);
  });

  test('Fifth fetched game must be "A Space for the Unbound"', () => {
    expect(fetchJustReleased()[4].name).toBe('The Mageseeker: A League of Legends Story');
  });
});
