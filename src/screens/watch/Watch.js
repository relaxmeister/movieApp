import React, { useEffect } from "react";
import { connect } from "react-redux";
import LaterCard from "../../components/testCard/testCard";

import "./style.scss";


const Watch = (props) => {
  useEffect(() => {
  }, []);

  const renderWatchLaterMovies = () => {
    return props.watch.map(e => {
      return <LaterCard movie={e} key={e.id}/>
    })
  }

  return <div className="">LATER {renderWatchLaterMovies()}</div>;
};

const mapStateToProps = (state) => ({
  watch: state.watch,
});

export default connect(mapStateToProps, {})(Watch);