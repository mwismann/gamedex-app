import PropTypes from 'prop-types';

const Game = ({
  name, img, tier, score,
}) => (
  <div>
    <img src={`https://img.opencritic.com/${img}`} alt={name} />
    <h2>{name}</h2>
    <p>{tier}</p>
    <p>{Math.round(score)}</p>
  </div>
);

Game.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  tier: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};

export default Game;
