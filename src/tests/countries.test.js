import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import countryReducer, { initialState } from '../redux/countries/countries';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({});

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

describe('async actions', () => {
  const fetchCountriesData = {
    dates: {
      '2020-12-12': {
        countries: {
          uganda: {
            name: 'uganda',
            'name-es': 'uganda',
            today_confirmed: 9,
            regions: [],
          },
        },
      },
    },
  };

  it('dispatches LOAD_DATA when fetching countries has been done', () => {
    store.dispatch({ type: 'LOAD_DATA' }, fetchCountriesData);
    expect(store.getActions()).toMatchSnapshot();
  });
});
