const URL = 'https://api.artic.edu/api/v1/artworks';

// Action
const LOAD_ART_WORKS = 'art-work/artwork/LOAD_ART_WORK';
const ART_WORK_CLICK = 'art-work/artwork/ART_WORK_CLICKED';

// reducer
const initialState = {
  responseData: [],
  isLoading: false,
  detail: '',
};
export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ART_WORKS:
      return {
        ...state,
        responseData: action.payload,
      };
    case ART_WORK_CLICK:
      return {
        ...state,
        detail: 'artwork',
      };
    default: return state;
  }
};

export const artWorkClick = () => ({
  type: ART_WORK_CLICK,
});

export const loadArtworks = () => async (dispatch) => {
  const res = await fetch(URL);
  const resJSON = await res.json();
  dispatch({ type: LOAD_ART_WORKS, payload: resJSON.data });
};
