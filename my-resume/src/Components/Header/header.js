import React from 'react';

import style from './header.css';

import header_hero from '../../Assets/hero2.webp';

class header extends React.Component {
    render() {
      return (
        <div class="headerContainer">
            <img src={header_hero}/>
        </div>
         
      );
    }
  }
  
  export default header;