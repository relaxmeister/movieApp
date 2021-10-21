import { ADD_WATCH_MOVIE, REMOVE_WATCH_MOVIE } from "../actions/types";

const INITIAL_STATE = [];

export const watchReducer = (state = INITIAL_STATE, action) => {
  console.log("REDUCED", action.payload);
  switch (action.type) {
    case ADD_WATCH_MOVIE:
      return [...state, action.payload];
    case REMOVE_WATCH_MOVIE:
      return state.filter((e) => e.id !== action.payload.id);
    default:
      return state;
  }
};
