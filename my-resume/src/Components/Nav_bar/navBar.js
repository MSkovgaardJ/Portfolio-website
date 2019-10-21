import React, {Component} from "react";

// import stylesheet
import style from './navBar.css';

// import of components
import Overlay from './NavOverlay/navOverlay'

class navBar extends React.Component {
  render() {
    return (
      <div className="navbarContainer">
          <span>Morten Skovaard Jensen</span>
          <Overlay></Overlay>
      </div>
        
    );
  }
}

export default navBar;