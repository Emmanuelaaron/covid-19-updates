import { InputGroup } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { filterCoutries } from '../redux/countries/countries';

const FilterComponent = () => {
  const dispatch = useDispatch();
  const filterCoutriesAction = bindActionCreators(filterCoutries, dispatch);

  const filterValues = (e) => {
    filterCoutriesAction(e.target.value);
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

export default FilterComponent;
