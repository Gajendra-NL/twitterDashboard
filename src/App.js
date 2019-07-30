import React from 'react';
import './App.css';
import TweetList from './components/tweetList/TweetList';
import Header from './components/header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <TweetList />
    </div>
  );
}

export default App;
