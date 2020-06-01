import React from 'react';
import './App.css';
import News from './components/news/News'
import Header from './components/header/Header'
import { connect } from 'react-redux';
import axios from 'axios';

function App(props) {

  const {news} = props
  return (
    <div className="App">
      <Header />
      <News newsData = {news} fetchNews={props.fetchNews} hideNews={props.hideNews} upVote={props.upVote}/>
    </div>
  );
}

// const mapStateToProps = (state) => ({
//   news: state.news
// })

function mapStateToProps(state) {

  let hideNewsArray = [];
  let upVoteList = {};

  if (global && global.localStorage) {
    hideNewsArray = JSON.parse(localStorage.getItem('hideNewsArray') || '[]');
    upVoteList = JSON.parse(localStorage.getItem('upVoteList') || '{}');
  }

  const upVoteListKeys = Object.keys(upVoteList);

  return {
    news: {
      ...state.news,
      hits: (state.news.hits || []).filter((item) => {
        return hideNewsArray.indexOf(item.objectID) === -1;
      }).map((item) => {
        if (upVoteListKeys.indexOf(item.objectID) > -1) {
          return {
            ...item,
            points: upVoteList[item.objectID].count
          };
        }
        return item;
      })
    }
  }
}

const mapDispatchToProps = (dispatch) => {

  return {
    fetchNews: (whichPage) => {
      axios.get('https://hn.algolia.com/api/v1/search?page=' + whichPage).then( news => {
        dispatch({
          type: 'FETCH_NEWS',
          payload: news.data
        })
      })
    },

    hideNews: (id) => {
      let hideNewsArray = JSON.parse(global.localStorage.getItem('hideNewsArray') || '[]');
      hideNewsArray = hideNewsArray.filter(item => item !== id).concat(id);
      global.localStorage.setItem('hideNewsArray', JSON.stringify(hideNewsArray));
      dispatch({
        type: 'HIDE_NEWS',
        payload: id
      })
    },

    upVote: (id, count) => {
      let upVoteList = JSON.parse(global.localStorage.getItem('upVoteList') || '{}');
      upVoteList[id] = {
        id,
        count
      }
      global.localStorage.setItem('upVoteList', JSON.stringify(upVoteList));
      dispatch({
        type: 'UPVOTE',
        payload: upVoteList[id]
      })
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);