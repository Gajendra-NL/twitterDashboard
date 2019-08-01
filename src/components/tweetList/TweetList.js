import React, { Component } from 'react';
import { connect } from 'react-redux';
import './TweetList.css';
import Tweet from '../tweet/Tweet';

class TweetList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: props.searchResults.slice(0, 10),
      currentPage: 1,
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.currentPage === 1) {
      return {
        tweets: nextProps.searchResults.slice(0, 10)
      };
    }
    return null;
  }

  render() {
    console.log('render', this.props);
    const { tweets } = this.state;
    return (
      <div className='tweets'>
        {tweets.length > 0 && tweets.map(eachTweet => (
          <Tweet key={eachTweet.id} details={eachTweet} />
        ))}
        {((this.props.searchResults.length - (this.state.currentPage * 10)) > 0) ?
          <button className='load__more' onClick={() => this.onClickLoadMore()}>Load More</button> : null
        }
      </div>
    );
  }

  onClickLoadMore = () => {
    if ((this.props.searchResults.length - (this.state.currentPage * 10)) > 0) {
      this.setState({
        currentPage: this.state.currentPage + 1,
        tweets: [ ...this.state.tweets, ...this.props.searchResults.slice((this.state.currentPage * 10), ((this.state.currentPage * 10) + 10))]
      }, () => {
        this.props.updateTweetsInDisplay(this.props.searchResults.slice((this.state.currentPage * 10), ((this.state.currentPage * 10) + 10)));
      });
    }
  }
}

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => {
  return {
    updateTweetsInDisplay: payload => dispatch({ type: 'UPDATE_RESULTS_IN_DISPLAY', payload }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TweetList);
