import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Game from '../components/Game';
import getUpcoming from '../redux/upcoming/actions';
import Searchbar from '../components/Searchbar';

const Upcoming = () => {
  const { upcoming, loading, error } = useSelector((state) => state.upcoming);
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    dispatch(getUpcoming());
  }, []);

  const query = upcoming.filter(
    (game) => game.name.toLowerCase().includes(value.toLowerCase()),
  );

  return (
    <div>
      <h1>Upcoming Games</h1>
      <Searchbar value={value} handleChange={handleChange} />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul>
        {query.map((game) => (
          <li key={game.id}>
            <Game
              page="upcoming"
              id={game.id}
              name={game.name}
              img={game.images.banner.og}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Upcoming;
