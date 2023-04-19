import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Game from '../components/Game';
import getUpcoming from '../redux/upcoming/actions';

const Upcoming = () => {
  const { upcoming, loading, error } = useSelector((state) => state.upcoming);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUpcoming());
  }, []);

  return (
    <div>
      <h1>Upcoming Games</h1>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul>
        {upcoming.map((game) => (
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
