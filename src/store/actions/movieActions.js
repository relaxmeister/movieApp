import { MOVIES_FETCH_SUCCESS, MOVIES_FETCH_FAIL } from "./types";

export const fetchMovies = (inputString, page) => {
  return (dispatch) => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_v3_auth}&language=en-US&page=${page}&include_adult=false&query=${inputString}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=utf-8",
        },
      }
    )
      .then(async (response) => {
        console.log("resp", response);
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong');
        }
      })
      .then((result) => {
        console.log("res", result);
        dispatch({ type: MOVIES_FETCH_SUCCESS, payload: result });
      })
      .catch((err) => {
        console.log("err", err);
        dispatch({ type: MOVIES_FETCH_FAIL });
      });
  };
};