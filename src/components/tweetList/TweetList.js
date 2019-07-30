import React, { Component } from 'react';
import { connect } from 'react-redux';
import './TweetList.css';
import Tweet from '../tweet/Tweet';

class TweetList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [],
    };
  }

  render() {
    console.log('render', this.props);
    const { searchResults } = this.props;
    return (
      <div className='tweets'>
        {searchResults.length > 0 && searchResults.map(eachTweet => (
          <Tweet key={eachTweet.id} details={eachTweet} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(TweetList);
