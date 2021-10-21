import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

import "./style.scss";

const arr = [];

const Header = (props) => {
  console.log("arr", props.faves.length);
  return (
    <header className="headerContainer">
      <div className="headerContent">
        <nav className="navContainer">
          <ul>
            <li className="menuItem">
              <NavLink to="/" activeClassName="name">
                Home
              </NavLink>
            </li>
          </ul>
          <ul>
            <li className="menuItem">
              <NavLink to="/fave" activeClassName="name">
                Favorites{props.faves.length}
              </NavLink>
            </li>
          </ul>
          <ul>
            <li className="menuItem">
              <NavLink to="/watch" activeClassName="name">
                Watch{props.watch.length}
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => ({
  movies: state.movies,
  faves: state.favorites,
  watch: state.watch,
});

export default connect(mapStateToProps, {})(Header);
