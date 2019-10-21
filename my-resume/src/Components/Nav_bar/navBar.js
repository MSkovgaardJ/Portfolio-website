import React from "react";

// import stylesheet
import style from './navBar.css';

// font awesome icrons import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faStream } from '@fortawesome/free-solid-svg-icons';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

class navBar extends React.Component {
  render() {
    return (
      <div className="navbarContainer">
        <div>
          <span>Morten Skovaard Jensen</span>
          <div class="menuPoints">
            <a href="*"><FontAwesomeIcon icon={faUserCircle}></FontAwesomeIcon> About me</a>
            <a href="*"><FontAwesomeIcon icon={faStream}></FontAwesomeIcon> Time line</a>
            <a href="https://github.com/MSkovgaardJ"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon> Github</a>
            <a href="https://www.linkedin.com/in/morten-skovgaard-jensen-608773150/"><FontAwesomeIcon icon={ faLinkedin}></FontAwesomeIcon> Linkedin</a>
          </div>
        </div>
      </div>
        
    );
  }
}

export default navBar;