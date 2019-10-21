import React, { Component } from 'react';
import style from './App.css';
import NavBar from './Nav_bar/navBar';
import Footer from './Footer/footer';

class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar></NavBar>
        <p>Hello</p>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
