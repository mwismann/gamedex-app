import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import getGame from '../redux/game_details/actions';

const GameDetails = () => {
  const { game, loading, error } = useSelector((state) => state.game);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getGame(id));
  }, []);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <img src={`https://img.opencritic.com/${game.images.banner.og}`} alt={game.name} />
      <h1>{game.name}</h1>
      <p>{game.description}</p>
      <div>
        <span>
          Score:
          {' '}
          {game.medianScore}
        </span>
        <span>{game.tier}</span>
      </div>
      <div>
        <p>Genres:</p>
        <ul>
          {game.Genres && game.Genres.map((genre) => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </ul>
      </div>
      <ul>
        {game.Companies && game.Companies.map((company) => (
          <li key={company.name}>
            {company.type.toLowerCase() === 'developer' ? 'Developed by' : 'Published by'}
            :
            {' '}
            {company.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GameDetails;
