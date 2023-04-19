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
    <div className="h-screen flex flex-col">
      <div className="w-full flex flex-col items-center justify-center gap-1 text-white bg-secondary grow">
        <h1 className="h-32 flex items-center justify-center text-2xl font-bold">Hall Of Fame</h1>
      </div>
      <div className="flex items-center gap-2 py-1 px-4 text-xs text-white bg-secondary/50">
        <Searchbar value={value} handleChange={handleChange} />
        {'( '}
        {query.length}
        {' ) games found'}
      </div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul className="p-4 flex flex-col gap-4 bg-black">
        {query.map((game) => (
          <li key={game.id}>
            <Game
              page="hof"
              id={game.id}
              name={game.name}
              img={game.images.box.sm}
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
