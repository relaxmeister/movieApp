import { ADD_WATCH_MOVIE, REMOVE_WATCH_MOVIE } from "./types";

export const addToWatchList = (movie) => {
  return {
    type: ADD_WATCH_MOVIE,
    payload: movie,
  };
};

export const removeFromWatchList = (movie) => {
  return { type: REMOVE_WATCH_MOVIE, payload: movie };
};
