import React from 'react';
import './App.css';
import News from './components/news/News'
import Header from './components/header/Header'
import { connect } from 'react-redux';


function App(props) {
  const {news} = props
  return (
    <div className="App">
      <Header />
      <News newsData = {news} />
    </div>
  );
}

const mapStateToProps = (state) => ({
  news: state.news
})

export default connect(mapStateToProps)(App);