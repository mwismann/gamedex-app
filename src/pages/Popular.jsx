import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Game from '../components/Game';
import getPopular from '../redux/popular/actions';

const Popular = () => {
  const { popular, loading, error } = useSelector((state) => state.popular);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopular());
  }, []);

  return (
    <div>
      <h1>Popular Games</h1>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul>
        {popular.map((game) => (
          <li key={game.id}>
            <Game
              name={game.name}
              img={game.images.box.og}
              tier={game.tier}
              score={game.topCriticScore}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Popular;
