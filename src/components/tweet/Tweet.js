import React from 'react';
import './Tweet.css';

function Tweet(props) {
  const { details } = props;
  console.log('details', details.text);
  return (
    <div className="tweet">
      <div className="title__row">
        <img
          src={details.user.profile_image_url}
          alt="user"
          className='user__image'
          // onerror="this.src='../../assets/nouser.png'"
        />
        <div className='name__row'>
          <div className='user__name'>{details.user.name}</div>
          <div className='user__screen__name'>@{details.user.screen_name}</div>
        </div>
      </div>
      <div>1. {details.text}</div>
      {/* details.extended_entities
        && <img src={details.extended_entities.media[0].media_url} alt="text" />
      */}
    </div>
  );
}

export default Tweet;
