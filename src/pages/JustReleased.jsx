import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import getJustReleased from '../redux/just_released/actions';
import Game from '../components/Game';
import Searchbar from '../components/Searchbar';

const JustReleased = () => {
  const { justReleased, loading, error } = useSelector((state) => state.justReleased);
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    dispatch(getJustReleased());
  }, []);

  const query = justReleased.filter(
    (game) => game.name.toLowerCase().includes(value.toLowerCase()),
  );

  return (
    <div>
      <h1>Just Released</h1>
      <Searchbar value={value} handleChange={handleChange} />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul>
        {query.map((game) => (
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
