import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import HallOfFame from '../pages/HallOfFame';

const mockStore = configureMockStore([]);

describe('Hall of Fame', () => {
  let store;
  beforeEach(() => {
    store = mockStore({
      hallOfFame: {
        hallOfFame: [],
        loading: false,
        error: null,
      },
    });

    store.dispatch = jest.fn();
  });

  it('should render Hall of Fame', () => {
    render(
      <Provider store={store}>
        <HallOfFame />
      </Provider>,
    );

    expect(screen.getByText(/Hall of Fame/i)).toBeInTheDocument();
  });
});
