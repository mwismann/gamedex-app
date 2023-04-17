import { NavLink, Outlet, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  return (
    <>
      <header>
        {location.pathname !== '/' && (
          <NavLink to="/" className="btn btn-primary">
            Back
          </NavLink>
        )}
        <h1>Browse it</h1>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
