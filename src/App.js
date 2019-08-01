import TweetList from './components/tweetList/TweetList';
import React, { Component } from 'react';
import Header from './components/header/Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
    };
  }

  render() {
    return (
      <div className="App">
        <Header
          onClickNewSearch={() => this.setState({ currentPage: 1 })}
        />
        <TweetList
          currentPage={this.state.currentPage}
          onClickLoadMore={() => this.setState({ currentPage: this.state.currentPage + 1 })}
        />
      </div>
    );
  }
}

export default App;
