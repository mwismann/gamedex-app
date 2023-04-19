import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Game = ({
  page, id, name, img, tier, score,
}) => (
  <Link to={`/${page}/${id}`}>
    <img src={`https://img.opencritic.com/${img}`} alt={name} />
    <h2>{name}</h2>
    <p>{tier}</p>
    <p>{(Math.round(score) === -1 || !score) ? 'N/A' : Math.round(score)}</p>
  </Link>
);

Game.propTypes = {
  page: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  tier: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};

export default Game;
