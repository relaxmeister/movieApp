import React from "react";
import { connect } from "react-redux";
import {
  addToWatchList,
  addToFavoriteList,
  removeFromFavoriteList,
  removeFromWatchList,
} from "../../store/actions";
import watchLaterImg from "./../../assets/imgs/newCartGreen.png";
import rmvWatchLaterImg from "./../../assets/imgs/newCart.png";
import favImg from "./../../assets/imgs/starYellow.png";
import unFavImg from "./../../assets/imgs/starGrey.png";

import "./style.scss";
// SOM JAG GJORT DET NU MÅSTE "IS STAR YUELLOW" VARA BEROENDE PÅ FAVE-ARRAYEN

/*


*/
const MovieCard = (props) => {
  const isFavorite = props.fave.some((e) => {
    return e.id === props.movie.id;
  });
  const isWatchLater = props.watch.some((e) => {
    return e.id === props.movie.id;
  });
  const watchLather = () => {
    if (!isWatchLater) {
      props.addToWatchList(props.movie);
    } else {
      props.removeFromWatchList(props.movie);
    }
  };

  const setFavorite = () => {
    if (!isFavorite) {
      props.addToFavoriteList(props.movie);
    } else {
      props.removeFromFavoriteList(props.movie);
    }
  };
  //testcard kan vara null
  const renderFaveStar = () => {
    if (isFavorite) {
      return favImg;
    }
    return unFavImg;
  };
  const renderWatchCart = () => {
    if (isWatchLater) {
      return watchLaterImg;
    }
    return rmvWatchLaterImg;
  };

  return (
    <div className="cardWrapper">
      <div className="movieCardWrapper">
        <div className="movieCardContainer">
          <div className="imageContainer">
            {props.movie.poster_path !== null ? (
              <img
                className="posterImage"
                src={`https://image.tmdb.org/t/p/w300${props.movie.poster_path}`}
                alt="poster"
              />
            ) : (
              <div className="placeholderImage no_image_holder"></div>
            )}
          </div>
          <div className="movieContentContainer">
            <p className="movieTitle">{props.movie.title}</p>
            <p>{props.movie.release_date}</p>
            <p className="movieOverView">{props.movie.overview}</p>
          </div>
          <div className="userStuff">
            <img onClick={() => setFavorite()} src={renderFaveStar()} alt="" />
            <img src={renderWatchCart()} onClick={() => watchLather()} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  watch: state.watch,
  fave: state.favorites,
});

export default connect(mapStateToProps, {
  addToWatchList,
  addToFavoriteList,
  removeFromFavoriteList,
  removeFromWatchList,
})(MovieCard);
