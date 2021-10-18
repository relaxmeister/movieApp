import {
    JOBS_FETCH_SUCCESS,
    JOBS_FETCH_FAIL,
  } from "./types";
  
  /*
  export const logoutUser = () => {
    return dispatch => {
      dispatch({ type: JOBS_FETCH_SUCCESS });
    }
  };
  
  /*
  export const loginUser = (data) => {
    return dispatch => {
      fetch("https://api.themoviedb.org/3/movie/22?api_key=xxx&language=en-US", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          //"Authorization": `Bearer: ${"HEJ"}`
        }
      })
        .then(async response => {
          if (response.status >= 200 && response.status < 300) {
            console.log("REDUX LOGIN");
            return response.json();
          } else {
            var error = new Error(response.statusText || response.status)
            error.response = response
            return Promise.reject(error)
          }
        })
        .then(result => {
          console.log("LOGIN", result);
          dispatch({ type: LOGIN_USER_SUCCESS, payload: result }); // verkar köra den oavsett 404
        })
        .catch(err => {
          console.log("err", err);
          dispatch({ type: LOGIN_USER_FAIL });
        });
    };
  };*/
