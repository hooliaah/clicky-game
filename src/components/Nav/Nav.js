import React from "react";
import "./Nav.css";

const Nav = props =>
  <ul className="nav nav-fill">
    <li className="nav-item nav-text text-left">such game.</li>
    <li className="nav-item nav-text text-right">score: {props.currentScore} | high score: {props.highScore}</li>
  </ul>;

export default Nav;