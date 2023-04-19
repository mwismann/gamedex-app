import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import getHallOfFame from '../redux/hof/actions';
import Game from '../components/Game';
import Searchbar from '../components/Searchbar';

const HallOfFame = () => {
  const { hallOfFame, loading, error } = useSelector((state) => state.hallOfFame);
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    dispatch(getHallOfFame());
  }, []);

  const query = hallOfFame.filter(
    (game) => game.name.toLowerCase().includes(value.toLowerCase()),
  );

  return (
    <div>
      <h1>Hall of Fame</h1>
      <Searchbar value={value} handleChange={handleChange} />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul>
        {query.map((game) => (
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
