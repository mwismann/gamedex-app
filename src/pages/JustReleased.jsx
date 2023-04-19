import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import getJustReleased from '../redux/just_released/actions';
import Game from '../components/Game';

const JustReleased = () => {
  const { justReleased, loading, error } = useSelector((state) => state.justReleased);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getJustReleased());
  }, []);

  return (
    <div>
      <h1>Just Released</h1>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul>
        {justReleased.map((game) => (
          <li key={game.id}>
            <Game
              page="just_released"
              id={game.id}
              name={game.name}
              img={game.images.banner.og}
              tier={game.tier}
              score={game.topCriticScore}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JustReleased;
