import { combineReducers } from "redux";
import { movieReducer } from "./movieReducer";
import { favoriteReducer } from "./favoriteReducer";
import { watchReducer } from "./watchReducer";

export const rootReducer = combineReducers({
  movies: movieReducer,
  favorites: favoriteReducer,
  watch: watchReducer,
});
