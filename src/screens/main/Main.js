import React, { useState } from "react";
import { connect } from "react-redux";
import Pagination from "react-js-pagination";
import MovieCard from "../../components/movieCard/MovieCard";
import { fetchMovies } from "../../store/actions";

import "./style.scss";

const Main = (props) => {
  const [searchString, setSearchString] = useState("");
  const [activePage, setActivePage] = useState(1);

  const renderMovies = () => {
    if (props.movies.pagination.total_results > 0) {
      return props.movies.pagination.results.map((e) => {
        return <MovieCard movie={e} key={e.id} />;
      });
    }
  };

  const renderPaginator = () => {
    if (props.movies.pagination.total_results > 0) {
      return (
        <div className="paginationWrapper">
          <Pagination
            activePage={activePage}
            itemsCountPerPage={20}
            totalItemsCount={props.movies.pagination.total_results}
            pageRangeDisplayed={5}
            onChange={(e) => handlePageChange(e)}
          />
        </div>
      );
    }
  };

  const onPressSearch = () => {
    if (searchString.length > 0) {
      props.fetchMovies(searchString, 1);
      setActivePage(1);
    }
  };

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
    props.fetchMovies(searchString, pageNumber);
  };

  return (
    <div className="pageContainer">
      <div className="welcomeContainer">
        <p>FIND THE MOVIES THAT YOU KEEP DREAMING ABOUT</p>
        <div className="inputWrapper">
          <input
            onChange={(e) => setSearchString(e.target.value)}
            placeholder="Sök efter en film, tv-serie, person..."
          />
          <button className="searchButton" onClick={() => onPressSearch()}>
            Search
          </button>
        </div>
      </div>
      <div className="widthDefault">
        <div className="moviesWrapper">{renderMovies()}</div>
      </div>
      {renderPaginator()}
    </div>
  );
};

const mapStateToProps = (state) => ({
  movies: state.movies,
});

export default connect(mapStateToProps, { fetchMovies })(Main);
