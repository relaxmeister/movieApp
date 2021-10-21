import { MOVIES_FETCH_SUCCESS, MOVIES_FETCH_FAIL } from "../actions/types";

const INITIAL_STATE = {
  movies: [],
  loading: true,
  error: "",
};

export const movieReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MOVIES_FETCH_SUCCESS:
      return {
        ...state,
        //...INITIAL_STATE,
        movies: action.payload /*[{role: "design"}, {role: "design"}]*/,
        loading: false,
      };
    case MOVIES_FETCH_FAIL:
      return { ...state, error: "Fetching Failed.", loading: false };
    default:
      return state;
  }
};
