import fetchUpcoming from './__mocks__/fetchUpcoming';

describe('fetchUpcoming', () => {
  test('Should return defined data', () => {
    expect(fetchUpcoming()).toBeDefined();
  });

  test('Fetch hall of fame must return a value of 8', () => {
    expect(fetchUpcoming()).toHaveLength(8);
  });

  test('First fetched game must be "Dead Island 2"', () => {
    expect(fetchUpcoming()[1].name).toBe('Dead Island 2');
  });
});
