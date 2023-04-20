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
    <div className="h-screen flex flex-col">
      <div className="w-full flex flex-col items-center justify-center gap-1 text-white bg-secondary">
        <h1 className="h-32 flex items-center justify-center text-2xl font-bold">Upcoming Games</h1>
      </div>
      <div className="flex items-center gap-2 py-1 px-4 text-xs text-white bg-secondary/50">
        <Searchbar value={value} handleChange={handleChange} />
        {'( '}
        {query.length}
        {' ) games found'}
      </div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul className="p-4 flex flex-col gap-4 bg-black grow">
        {query.map((game) => (
          <li key={game.id}>
            <Game
              page="upcoming"
              id={game.id}
              name={game.name}
              img={game.images.box.og}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Upcoming;
