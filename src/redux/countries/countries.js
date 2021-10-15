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

// export const fetchData = async () => {
//   let response = await fetch(URL);
//   response = await response.json();
//   return response;
// };

export const loadCountries = () => async (dispatch) => {
  const today = new Date().toISOString().split('T')[0];
  const res = await fetch(`${URL}${today}`);
  const resJSON = await res.json();
  dispatch({ type: LOAD_DATA, payload: resJSON.dates });
};
