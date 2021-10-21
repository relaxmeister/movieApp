import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import TestCard from "../../components/testCard/testCard";
import { fetchMovies } from "../../store/actions";

import "./style.scss";

const Main = (props) => {
  const [movieList, setMovieList] = useState([]);
  const [searchString, setSearchString] = useState("");
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_v3_auth}&language=en-US&page=1&include_adult=false&query=kek`,
      {
        method: "GET",
      }
    )
      .then(async (response) => {
        console.log("resp", response);
        if (response.ok) {
          return response.json();
        } else {
          console.log("something went wrong with the search!");
        }
      })
      .then((result) => {
        console.log("res", result);
        setMovieList([...result.results]);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);

  useEffect(() => {
    console.log("query", searchString);
  }, [searchString]);

  const renderMovies = () => {
    return movieList.map((e) => {
      return <TestCard movie={e} key={e.id} />;
    });
  };

  const onPressSearch = () => {
    if (searchString.length > 0) {
      console.log("clicked");
    }
  }

  return (
    <div className="pageContainer">
      <div className="welcomeContainer">
        <p>FIND THE MOVIES THAT YOU KEEP DREAMING ABOUT</p>
        <div className="inputWrapper">
          <input onChange={(e) => setSearchString(e.target.value)} />
          <button
            className="searchButton"
            onClick={() => onPressSearch()}
          >
            Search
          </button>
        </div>
      </div>
      MAIN {renderMovies()}
    </div>
  );
};

// export default Main;

const mapStateToProps = (state) => ({
  job: state.job,
});

export default connect(mapStateToProps, { fetchMovies })(Main);
