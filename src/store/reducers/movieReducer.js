import { MOVIES_FETCH_SUCCESS, MOVIES_FETCH_FAIL } from "../actions/types";

const INITIAL_STATE = {
  pagination: {
    page: undefined,
    total_pages: undefined,
    total_results: 0,
    results: [],
  },
  loading: true,
  error: "",
};

/*
  page: undefined,
  total_pages: undefined,
  total_results: 0,
  // query: '',
  results: [],
*/

export const movieReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MOVIES_FETCH_SUCCESS:
      return {
        ...state,
        pagination: action.payload,
        loading: false,
        error: "",
      };
    case MOVIES_FETCH_FAIL:
      return {
        pagination: {
          page: undefined,
          total_pages: undefined,
          total_results: 0,
          results: [],
        },
        error: "Fetching Failed.",
        loading: false,
      };
    /*
    case MOVIES_RESET: ...likely useful for some scenarios
      return { INITIAL STATE };
    */
    default:
      return state;
  }
};
