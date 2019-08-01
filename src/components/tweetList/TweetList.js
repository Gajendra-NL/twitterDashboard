import React, { Component } from 'react';
import { connect } from 'react-redux';
import './TweetList.css';
import Tweet from '../tweet/Tweet';

class TweetList extends Component {

  render() {
    const { resultsInDisplay, searchResults, currentPage, searchString } = this.props;
    return (
      <div className='tweets'>
        {(searchString.length > 0 && resultsInDisplay.length === 0) ?
          <p className='no__data__found'>No Data Found...</p> : null
        }
        {resultsInDisplay.length > 0 && resultsInDisplay.map(eachTweet => (
          <Tweet
            key={eachTweet.id}
            details={eachTweet}
          />
        ))}
        {((searchResults.length - (currentPage * 10)) > 0) ?
          <button
            className='load__more'
            onClick={() => this.onClickLoadMore()}>
            Load More
          </button> : null
        }
      </div>
    );
  }

  onClickLoadMore = () => {
    if ((this.props.searchResults.length - (this.props.currentPage * 10)) > 0) {
      this.props.updateTweetsInDisplay(this.props.searchResults.slice((this.props.currentPage * 10), ((this.props.currentPage * 10) + 10)));
      this.props.onClickLoadMore();
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
