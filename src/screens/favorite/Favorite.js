import React from "react";
import { connect } from "react-redux";
import MovieCard from "../../components/movieCard/MovieCard";

import "./style.scss";

const Favorite = (props) => {
  const renderMovies = () => {
    return props.fave.map(e => {
      return <MovieCard movie={e} key={e.id}/>
    })
  }

  return (
    <div className="pageContainer">
      <div className="widthDefault">
        <div className="moviesWrapper">{renderMovies()}</div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  fave: state.favorites,
});

export default connect(mapStateToProps, {})(Favorite);
