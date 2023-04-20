import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Game = ({
  page, id, name, img, tier, score,
}) => (
  <Link to={`/${page}/${id}`} className="flex gap-2 text-white">
    <img src={`https://img.opencritic.com/${img}`} alt={name} className="w-40 rounded" />
    <div className="flex flex-col gap-2">
      <h2 className="text-xl">{name}</h2>
      <p className={tier ? 'w-fit py-0.5 px-2 text-xs bg-main rounded' : ''}>{tier}</p>
      <p>
        Score:
        {' '}
        {(Math.round(score) === -1 || !score) ? 'N/A' : Math.round(score)}
      </p>
    </div>
  </Link>
);

Game.defaultProps = {
  tier: null,
  score: null,
};

Game.propTypes = {
  page: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  tier: PropTypes.string,
  score: PropTypes.number,
};

export default Game;
