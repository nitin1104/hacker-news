import React from 'react';
import './App.css';
import News from './components/news/News'
import Header from './components/header/Header'
import { connect } from 'react-redux';
import axios from 'axios';

function App(props) {

  
  function fetchNewsOnPagination (whichPage) {
    
    axios.get('https://hn.algolia.com/api/v1/search?page=' + whichPage)
      .then(newsData => {
        props.onPageChange(newsData.data);
      })
  }

  const {news} = props
  return (
    <div className="App">
      <Header />
      <News newsData = {news} onPagination={fetchNewsOnPagination}/>
    </div>
  );
}

const mapStateToProps = (state) => ({
  news: state.news
})


export default connect(mapStateToProps)(App);