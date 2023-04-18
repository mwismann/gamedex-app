import { Link } from 'react-router-dom';

const linksTo = [
  { to: '/hof', label: 'Hall of Fame' },
  { to: '/just_released', label: 'Just Released' },
  { to: '/popular', label: 'Popular' },
  { to: '/upcoming', label: 'Upcoming' },
];

const Categories = () => (
  <div>
    <h1>Categories</h1>
    <ul>
      {linksTo.map(({ to, label }) => (
        <li key={to}>
          <Link to={to}>
            {label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default Categories;
