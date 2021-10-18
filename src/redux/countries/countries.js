const URL = 'https://api.covid19tracking.narrativa.com/api/';

// Action
const LOAD_DATA = 'world-data/covid/LOAD_DATA';
const COUNTRY_CLICKED = 'world-data/coivid/COUNTRY_CLICKED/';

// reducer
const initialState = {
  countries: [],
  detail: '',
};
export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_DATA:
      return {
        ...state,
        countries: action.payload,
      };
    case COUNTRY_CLICKED:
      return {
        ...state,
        detail: action.payload,
      };
    default: return state;
  }
};

export const countryClicked = (country) => ({
  type: COUNTRY_CLICKED,
  payload: country,
});

export const loadCountries = () => async (dispatch) => {
  const today = new Date().toISOString().split('T')[0];
  const res = await fetch(`${URL}${today}`);
  const resJSON = await res.json();
  const resObj = Object.values(resJSON.dates);
  const countrObj = Object.values(resObj);
  dispatch({ type: LOAD_DATA, payload: Object.entries(countrObj[0].countries) });
};
