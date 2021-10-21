import { ADD_FAVORITE, REMOVE_FAVORITE } from "../actions/types";

const INITIAL_STATE = [];

export const favoriteReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return [...state, action.payload];
    case REMOVE_FAVORITE:
      return state.filter((e) => e.id !== action.payload.id);
    default:
      return state;
  }
};
