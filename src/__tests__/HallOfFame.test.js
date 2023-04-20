import fetchHallOfFame from './__mocks__/fetchHallOfFame';

describe('fetchHallOfFame', () => {
  test('Should return defined data', () => {
    expect(fetchHallOfFame()).toBeDefined();
  });

  test('Fetch hall of fame must return a value of 12', () => {
    expect(fetchHallOfFame()).toHaveLength(12);
  });

  test('Fifth fetched game must be "A Space for the Unbound"', () => {
    expect(fetchHallOfFame()[4].name).toBe('A Space for the Unbound');
  });
});
