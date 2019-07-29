import React from 'react';
import data from './dataSource/tweets';
import Tweet from './Tweet';

function TweetList() {
  console.log('data', data.slice(0, 20).map(each => each));
  return (
    <div>
      {data.length > 0 && data.slice(0, 20).map(eachTweet => (
        <Tweet details={eachTweet}/>
      ))}
    </div>
  );
}

export default TweetList;
