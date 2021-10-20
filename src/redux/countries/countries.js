const URL = 'https://api.covid19tracking.narrativa.com/api/';

// Action
const LOAD_DATA = 'world-data/covid/LOAD_DATA';
const COUNTRY_CLICKED = 'world-data/coivid/COUNTRY_CLICKED/';
const FILTER_COUNTRY = 'world-data/coivid/FILTER_COUNTRY';

// reducer
export const initialState = {
  countries: [],
  filtererdCountries: [],
  detail: '',
};
export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_DATA:
      return {
        ...state,
        countries: action.payload,
        filtererdCountries: action.payload,
      };
    case COUNTRY_CLICKED:
      return {
        ...state,
        detail: action.payload,
      };
    case (FILTER_COUNTRY): {
      if (action.payload === undefined || action.payload.trim() === '') {
        return {
          ...state,
          filtererdCountries: state.countries,
        };
      }
      const newS = state.countries.filter((cou) => cou[0].toLowerCase().startsWith(
        action.payload.toLowerCase().trim(),
      ));
      return {
        ...state,
        filtererdCountries: newS,
      };
    }
    default: return state;
  }
};

export const countryClicked = (country) => ({
  type: COUNTRY_CLICKED,
  payload: country,
});

export const filterCoutries = (values) => ({
  type: FILTER_COUNTRY,
  payload: values,
});

export const loadCountries = () => async (dispatch) => {
  const today = new Date().toISOString().split('T')[0];
  const res = await fetch(`${URL}${today}`);
  const resJSON = await res.json();
  const resObj = Object.values(resJSON.dates);
  const countrObj = Object.values(resObj);
  dispatch({ type: LOAD_DATA, payload: Object.entries(countrObj[0].countries) });
};
