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
    <div className="p-4 flex flex-col gap-4 text-white bg-black">
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <div className="flex gap-4">
        {(game.name && (
        <img
          src={`https://img.opencritic.com/${game.images.box.sm}`}
          alt={game.name}
          className="rounded"
        />
        ))}
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-semibold">{game.name}</h1>
          <div className="flex items-center gap-2">
            <span className="text-sm">
              Score:
              {' '}
              {(Math.round(game.medianScore) === -1 || !game.medianScore) ? 'N/A' : Math.round(game.medianScore)}
            </span>
            <span className={game.tier ? 'py-0.5 px-1 text-xs bg-secondary rounded' : ''}>{game.tier}</span>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-sm">Genres:</p>
            <ul className="flex items-center gap-2 flex-wrap">
              {game.Genres && game.Genres.map((genre) => (
                <li
                  key={genre.id}
                  className="py-0.5 px-1 text-xs bg-secondary rounded"
                >
                  {genre.name}
                </li>
              ))}
            </ul>
          </div>
          <ul className="flex flex-col gap-2 text-sm">
            {game.Companies && game.Companies.map((company) => (
              <li
                key={company.name}
              >
                {company.type.toLowerCase() === 'developer' ? 'Developed by' : 'Published by'}
                :
                {' '}
                {company.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="text-sm text-justify">{game.description}</p>
    </div>
  );
};

export default GameDetails;
