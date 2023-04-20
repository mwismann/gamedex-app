import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Game from '../components/Game';
import { MemoryRouter as Router } from 'react-router-dom';

describe('Game component', () => {
  const gameProps = {
    page: 'upcoming',
    id: 1,
    name: 'Game Name',
    img: 'game-img.jpg',
    tier: 'Tier 1',
    score: 90,
  };

  test('renders the game name', () => {
    render(
      <Router>
        <Game {...gameProps} />
      </Router>,
    );
    const linkElement = screen.getByRole('link');
    expect(linkElement).toHaveAttribute('href', `/${gameProps.page}/${gameProps.id}`);

    const gameName = screen.getByText(gameProps.name);
    expect(gameName).toBeInTheDocument();
  });

  test('renders the game image', () => {
    render(
      <Router>
        <Game {...gameProps} />
      </Router>,
    );
    const linkElement = screen.getByRole('link');
    expect(linkElement).toHaveAttribute('href', `/${gameProps.page}/${gameProps.id}`);

    const gameImage = screen.getByAltText(gameProps.name);
    expect(gameImage).toBeInTheDocument();
  });

  test('renders the game tier', () => {
    render(
      <Router>
        <Game {...gameProps} />
      </Router>,
    );
    const linkElement = screen.getByRole('link');
    expect(linkElement).toHaveAttribute('href', `/${gameProps.page}/${gameProps.id}`);
    
    const gameTier = screen.getByText(gameProps.tier);
    expect(gameTier).toBeInTheDocument();
  });
});