import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Game from '../components/Game';
import getPopular from '../redux/popular/actions';
import Searchbar from '../components/Searchbar';

const Popular = () => {
  const { popular, loading, error } = useSelector((state) => state.popular);
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    dispatch(getPopular());
  }, []);

  const query = popular.filter(
    (game) => game.name.toLowerCase().includes(value.toLowerCase()),
  );

  return (
    <div>
      <h1>Popular Games</h1>
      <Searchbar value={value} handleChange={handleChange} />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul>
        {query.map((game) => (
          <li key={game.id}>
            <Game
              page="popular"
              id={game.id}
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
