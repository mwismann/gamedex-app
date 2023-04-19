import { PropTypes } from 'prop-types';

const Searchbar = ({ value, handleChange }) => (
  <div className="w-8/12">
    <input type="text" name="search" className="w-full py-0.5 px-1 text-main border border-black rounded" value={value} onChange={handleChange} />
  </div>
);

Searchbar.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Searchbar;
