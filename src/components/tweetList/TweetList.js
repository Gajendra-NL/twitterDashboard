import React, { Component } from 'react';
import { connect } from 'react-redux';
import data from '../../dataSource/tweets';
import Tweet from '../tweet/Tweet';

class TweetList extends Component {
  constructor(props) {
    super(props);
    // Set the default state of the component
    this.state = {
      tweets: [],
    };
  }

  render() {
    console.log('render', this.props);
    const { onNewSearch } = this.props;
    return (
      <div>
        <button onClick={onNewSearch} type="button">Search?</button>
        {data.length > 0 && data.slice(0, 20).map(eachTweet => (
          <Tweet details={eachTweet} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => {
  return {
    onNewSearch: () => dispatch({ type: 'NEW_SEARCH' }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TweetList);
