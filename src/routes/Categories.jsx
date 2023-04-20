import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { GiLaurelsTrophy, GiFlame } from 'react-icons/gi';
import { AiOutlineSafetyCertificate } from 'react-icons/ai';
import { FaExclamation } from 'react-icons/fa';
import getHallOfFame from '../redux/hof/actions';
import getJustReleased from '../redux/just_released/actions';
import getPopular from '../redux/popular/actions';
import getUpcoming from '../redux/upcoming/actions';

const linksTo = [
  { to: '/hof', label: 'Hall of Fame' },
  { to: '/just_released', label: 'Just Released' },
  { to: '/popular', label: 'Popular' },
  { to: '/upcoming', label: 'Upcoming' },
];

const Categories = () => {
  const { hallOfFame } = useSelector((state) => state.hallOfFame);
  const { justReleased } = useSelector((state) => state.justReleased);
  const { popular } = useSelector((state) => state.popular);
  const { upcoming } = useSelector((state) => state.upcoming);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHallOfFame());
    dispatch(getJustReleased());
    dispatch(getPopular());
    dispatch(getUpcoming());
  }, []);

  return (
    <div className="h-screen flex flex-col">
      <div className="w-full h-32 flex flex-col items-center justify-center gap-1 text-white bg-secondary">
        <h1 className="text-2xl font-bold">Categories</h1>
      </div>
      <span className="py-0.5 px-4 text-xs text-end text-white bg-secondary/50">
        {'( '}
        {linksTo.length}
        {' ) categories found'}
      </span>
      <ul className="h-5/6 flex flex-wrap">
        {linksTo.map(({ to, label }) => (
          <li key={to} className="w-1/2 h-1/2 flex flex-col items-center justify-center gap-1 text-white font-semibold bg-main first:bg-secondary last:bg-secondary">
            {label === 'Hall of Fame' && <GiLaurelsTrophy className="w-6 h-6" />}
            {label === 'Just Released' && <AiOutlineSafetyCertificate className="w-6 h-6" />}
            {label === 'Popular' && <GiFlame className="w-6 h-6" />}
            {label === 'Upcoming' && <FaExclamation className="w-6 h-6" />}
            <Link to={to}>
              {label}
            </Link>
            {label === 'Hall of Fame' && (
              <span className="text-xs text-white bg-secondary">
                {'( '}
                {hallOfFame.length}
                {' )'}
              </span>
            )}
            {label === 'Just Released' && (
              <span className="text-xs text-white bg-main">
                {'( '}
                {justReleased.length}
                {' )'}
              </span>
            )}
            {label === 'Popular' && (
              <span className="text-xs text-white bg-main">
                {'( '}
                {popular.length}
                {' )'}
              </span>
            )}
            {label === 'Upcoming' && (
              <span className="text-xs text-white bg-secondary">
                {'( '}
                {upcoming.length}
                {' )'}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
