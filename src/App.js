import React from 'react';
import './App.css';
import News from './components/news/News'

function App(props) {
  const {news} = props
  return (
    <div className="App">
      <News newsData = {news.hits} />
    </div>
  );
}

export default App;
