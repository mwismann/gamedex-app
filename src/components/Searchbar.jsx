import { PropTypes } from 'prop-types';

const Searchbar = ({ value, handleChange }) => (
  <div>
    <input type="text" name="search" className="border border-black rounded" value={value} onChange={handleChange} />
    <button type="button" className="border border-black rounded">Search</button>
  </div>
);

Searchbar.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Searchbar;
