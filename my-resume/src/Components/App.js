import React, { Component } from 'react';
import style from './App.css';
import NavBar from './Nav_bar/navBar';
import Footer from './Footer/footer';
import Header from './Header/header';

class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar></NavBar>
        <Header></Header>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
