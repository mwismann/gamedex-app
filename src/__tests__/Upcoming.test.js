import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import Upcoming from '../pages/Upcoming';

const mockStore = configureMockStore([]);
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  Link: jest.fn().mockImplementation(({ children }) => children),
}));

describe('Hall of Fame', () => {
  let store;
  beforeEach(() => {
    store = mockStore({
      upcoming: {
        upcoming: [
          {
            name: 'Hi-Fi Rush',
            id: 14227,
            firstReleaseDate: '2023-01-25T00:00:00.000Z',
            tier: 'Mighty',
            images: {
              box: {
                og: 'game/14227/o/YtYpzvpp.jpg',
                sm: 'game/14227/aEdZRDWi.jpg',
              },
              banner: {
                og: 'game/14227/o/b1hnNk54.jpg',
                sm: 'game/14227/qN8DtK1o.jpg',
              },
            },
            topCriticScore: 89,
          },
        ],
        loading: false,
        error: null,
      },
    });

    store.dispatch = jest.fn();
  });

  test('should render Upcoming', () => {
    const { getByText } = render(
      <Provider store={store}>
        <Router>
          <Upcoming />
        </Router>
      </Provider>,
    );
    expect(getByText('Upcoming Games')).toBeInTheDocument();
  });
});
