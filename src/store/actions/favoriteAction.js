import { ADD_FAVORITE, REMOVE_FAVORITE } from "./types";

export const toggleFavorite = () => {};

export const addToFavoriteList = (movie) => {
  return {
    type: ADD_FAVORITE,
    payload: movie,
  };
};

export const removeFromFavoriteList = (movie) => {
  return { type: REMOVE_FAVORITE, payload: movie };
};
