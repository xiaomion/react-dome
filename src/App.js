import React, { Component } from 'react';
import './App.css';
import Header from './component/header'
import Footer from './component/footer'
import Content from './component/content'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header></Header>
        <Content></Content>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
