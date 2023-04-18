import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
      <header>
        {location.pathname !== '/' && (
          <button type="button" onClick={() => navigate(-1)}>
            Back
          </button>
        )}
        <h1>Browse it</h1>
      </header>
    </>
  );
};

export default Header;
