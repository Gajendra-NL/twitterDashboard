import React from 'react';
import './Tweet.css';

function Tweet(props) {
  const { details } = props;
  return (
    <div className="tweet">
      <div className="title__row">
        <img
          src={details.user.profile_image_url}
          alt="user"
          className='user__image'
          // onerror="this.src='../../assets/nouser.png'"
        />
        <div>
          {details.retweeted_status &&
            <div className='retweeted__by'>
              {details.user.name} retweeted
            </div>
          }
          <div className='name__row'>
            <div className='user__name'>
              {!details.retweeted_status ? details.user.name : details.retweeted_status.user.name}
            </div>
            <div className='user__screen__name'>
              @{!details.retweeted_status ? details.user.screen_name : details.retweeted_status.user.screen_name}
            </div>
          </div>
          <div className='tweet__text'>{details.text}</div>
          {((details.quoted_status && details.quoted_status.extended_entities) || (details.retweeted_status && details.retweeted_status.extended_entities) ) &&
            <img
              src={(details.quoted_status && details.quoted_status.extended_entities) ? details.quoted_status.extended_entities.media[0].media_url : details.retweeted_status.extended_entities.media[0].media_url}
              alt="user"
              className='display__image'
              // onerror="this.src='../../assets/nouser.png'"
            />
          }
        </div>
      </div>
      {/* details.extended_entities
        && <img src={details.extended_entities.media[0].media_url} alt="text" />
      */}
    </div>
  );
}

export default Tweet;
