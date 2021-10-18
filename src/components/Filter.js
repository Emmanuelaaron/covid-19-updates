import { PropTypes } from 'prop-types';
import { InputGroup } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';

const FilterComponent = (props) => {
  const filterValues = (e) => {
    props.setFilter(e.target.value);
  };
  return (
    <InputGroup className="mb-3">
      <InputGroup.Text id="basic-addon1">
        <FaSearch />
      </InputGroup.Text>
      <input
        type="text"
        onChange={filterValues}
        className="form-control no-shadow"
        placeholder="Search Specific Country"
      />
    </InputGroup>
  );
};

FilterComponent.propTypes = {
  setFilter: PropTypes.func.isRequired,
};
export default FilterComponent;
