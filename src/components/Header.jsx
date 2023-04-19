import { useNavigate, useLocation } from 'react-router-dom';
import { FaAngleLeft, FaSearch } from 'react-icons/fa';
import { GiGameConsole } from 'react-icons/gi';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
      <header className="py-4 px-6 flex items-center justify-between text-white font-semibold bg-main">
        {location.pathname !== '/' && (
          <button
            type="button"
            onClick={() => navigate(-1)}
          >
            <FaAngleLeft />
          </button>
        )}
        <span className="w-full flex items-center justify-center gap-2">
          GameDex
          <GiGameConsole className="text-2xl" />
        </span>
        {location.pathname !== '/' && (
          <button
            type="button"
            onClick={() => navigate('/')}
          >
            <FaSearch />
          </button>
        )}
      </header>
    </>
  );
};

export default Header;
