import React from "react";

const Nav = props =>
  <ul className="nav nav-tabs">
    <li>Clicky game!</li>
    <li>{props.note}</li>
    <li>Current score: {props.currentScore} | High Score: {props.highScore}</li>
  </ul>;

export default Nav;