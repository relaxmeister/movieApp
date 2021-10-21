import React from "react";
import { connect } from "react-redux";
import { toggleFavorite, removeFromWatchList } from "../../store/actions";

import "./style.scss";

const LaterCard = (props) => {
  return (
    <div className="lol">
      <img
        src={`https://image.tmdb.org/t/p/w300${props.movie.poster_path}`}
        alt=""
      />
      asdadsa {props.movie.id}
      <div onClick={() => console.log("STAR")}>STAR</div>
      <div onClick={() => props.removeFromWatchList(props.movie)}>
        WATCHLATER
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  watch: state.watch,
});

export default connect(mapStateToProps, {
  toggleFavorite,
  removeFromWatchList,
})(LaterCard);
