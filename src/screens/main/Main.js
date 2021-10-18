import React, { useEffect } from "react";
import { connect } from "react-redux";

import "./style.scss";


const Main = (props) => {
  useEffect(() => {
  }, []);

  return <div className="">MAIN</div>;
};

// export default Main;

const mapStateToProps = state => ({
    job: state.job
  });
  
export default connect(mapStateToProps, {})(Main);
