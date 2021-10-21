import React from "react";
import { connect } from "react-redux";
import {
  addToWatchList,
  toggleFavorite,
  addToFavoriteList,
  removeFromFavoriteList,
} from "../../store/actions";

import "./style.scss";
// SOM JAG GJORT DET NU MÅSTE "IS STAR YUELLOW" VARA BEROENDE PÅ FAVE-ARRAYEN
const TestCard = (props) => {
  const watchLather = (movie) => {
    const isIncluded = props.watch.some((e) => {
      return e.id === movie.id;
    });
    if (!isIncluded) {
      props.addToWatchList(movie);
    }
  };

  const setFavorite = (movie) => {
    const isIncluded = props.fave.some((e) => {
      return e.id === movie.id;
    });
    if (!isIncluded) {
      props.addToFavoriteList(movie);
    } else {
      props.removeFromFavoriteList(movie);
    }
  };
  //testcard kan vara null
  return (
    <div className="lol">
      <div className="imageContainer">
        {props.movie.poster_path !== null ? (
          <img
            className="posterImage"
            src={`https://image.tmdb.org/t/p/w300${props.movie.poster_path}`}
            alt="poster"
          />
        ) : <div className="placeholderImage no_image_holder"></div>}
      </div>
      asdadsa {props.movie.id}
      <div
        style={{ backgroundColor: true ? "black" : "white" }}
        onClick={() => setFavorite(props.movie)}
      >
        STAR
      </div>
      <div onClick={() => watchLather(props.movie)}>WATCHLATER</div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  watch: state.watch,
  fave: state.favorites,
});

export default connect(mapStateToProps, {
  toggleFavorite, // finns potential
  addToWatchList,
  addToFavoriteList,
  removeFromFavoriteList,
})(TestCard);
