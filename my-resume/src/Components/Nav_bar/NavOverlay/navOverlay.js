import React, { Component } from 'react';


import style from './navOverlay.css';
// font awesome icrons import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faStream } from '@fortawesome/free-solid-svg-icons';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

class navOverlay extends React.Component {
openNav(){
  document.getElementById("mySidenav").style.setProperty('width','60%');
  document.getElementById("navBtn_closed").style.setProperty('display','none');
  document.body.style.setProperty('filter', 'brightness(0.5)')
}

closeNav(){
  document.getElementById("mySidenav").style.setProperty('width','0px');
  document.getElementById("navBtn_closed").style.setProperty('display','unset');
  document.body.style.setProperty('filter', 'brightness(1)')
}

    render() {
        return (
            <div className="toggler">
                <div id="mySidenav" class="sidenav">
                    <span className="navBtn"onClick={this.closeNav}>&times;</span>
                    <a href="*"><FontAwesomeIcon icon={faUserCircle}></FontAwesomeIcon> About me</a>
                    <a href="*"><FontAwesomeIcon icon={faStream}></FontAwesomeIcon> Time line</a>
                    <a href="https://github.com/MSkovgaardJ"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon> Github</a>
                    <a href="https://www.linkedin.com/in/morten-skovgaard-jensen-608773150/"><FontAwesomeIcon icon={ faLinkedin }></FontAwesomeIcon> Linkedin</a>
                </div>
                    <span id="navBtn_closed" className="navBtn" onClick={this.openNav}>&#9776; </span>
            </div>
        );
    }
    
}

export default navOverlay;