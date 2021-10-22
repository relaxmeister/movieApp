import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

import "./style.scss";

const Header = (props) => {
  return (
    <header className="headerContainer">
      <div className="headerContent">
        <nav className="navContainer">
          <ul>
            <li className="menuItem">
              <NavLink to="/home" activeClassName="name">
                Home
              </NavLink>
            </li>
          </ul>
          <ul>
            <li className="menuItem">
              <NavLink to="/fave" activeClassName="name">
                Favorites
                {props.faves.length > 0 ? (
                  <span>({props.faves.length})</span>
                ) : null}
              </NavLink>
            </li>
          </ul>
          <ul>
            <li className="menuItem" style={{ margin: 0 }}>
              <NavLink to="/watch" activeClassName="name">
                Watch
                {props.watch.length > 0 ? (
                  <span>({props.watch.length})</span>
                ) : null}
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => ({
  faves: state.favorites,
  watch: state.watch,
});

export default connect(mapStateToProps, {})(Header);
