import React from "react";
import { connect } from "react-redux";
import MovieCard from "../../components/movieCard/MovieCard";

import "./style.scss";

const Watch = (props) => {
  const renderMovies = () => {
    return props.watch.map((e) => {
      return <MovieCard movie={e} key={e.id} />;
    });
  };

  return (
    <div className="pageContainer">
      <div className="widthDefault">
        <div className="moviesWrapper">{renderMovies()}</div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  watch: state.watch,
});

export default connect(mapStateToProps, {})(Watch);
