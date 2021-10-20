import countryReducer, {
//   countryClicked,
//   filterCoutries,
//   loadCountries,
  initialState,
} from '../redux/countries/countries';

describe('country reducer', () => {
  it('should return the initial state', () => {
    expect(countryReducer(undefined, {})).toMatchSnapshot();
  });

  it('should handle LOAD_DATA', () => {
    expect(
      countryReducer(initialState, {
        type: 'LOAD_DATA',
      }),
    ).toMatchSnapshot();
  });
  it('should handle COUNTRY_CLICKED', () => {
    expect(
      countryReducer(initialState, {
        type: 'COUNTRY_CLICKED',
      }),
    ).toMatchSnapshot();
  });
  it('should handle FILTER_COUNTRY', () => {
    expect(
      countryReducer(initialState, {
        type: 'FILTER_COUNTRY',
      }),
    ).toMatchSnapshot();
  });
});
