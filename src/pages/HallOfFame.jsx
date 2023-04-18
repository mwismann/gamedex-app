import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import getHallOfFame from '../redux/hof/actions';
import Game from '../components/Game';

const HallOfFame = () => {
  const { hallOfFame, loading, error } = useSelector((state) => state.hallOfFame);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHallOfFame());
  }, []);

  return (
    <div>
      <h1>Hall of Fame</h1>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul>
        {hallOfFame.map((game) => (
          <li key={game.id}>
            <Game
              page="hof"
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

export default HallOfFame;
