import { Link } from 'react-router-dom';

const linksTo = [
  { to: '/hof', label: 'Hall of Fame' },
  { to: '/just_released', label: 'Just Released' },
  { to: '/popular', label: 'Popular' },
  { to: '/upcoming', label: 'Upcoming' },
];

const Categories = () => (
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
        <li key={to} className="w-1/2 h-1/2 flex items-center justify-center text-white font-semibold bg-main first:bg-secondary last:bg-secondary">
          <Link to={to}>
            {label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default Categories;
