import React from 'react';
import './Tweet.css';

function Tweet(props) {
  const { details } = props;
  return (
    <div className="tweet">
      <div className="col-12 row">
        <div className="col-1">
          <img
            src={details.user.profile_image_url}
            alt="user"
            className='user__image'
            onError={e => e.target.src=require('../../assets/nouser.png')}
          />
        </div>
        <div className="col-11" style={{ marginLeft: '15px' }}>
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
              {details.user.verified ? <i className="fas fa-user-check verified"></i> : ''}
              <div className='user__screen__name'>
                @{!details.retweeted_status ? details.user.screen_name : details.retweeted_status.user.screen_name}
              </div>
            </div>
            <div className='tweet__text'>{details.quoted_status ? details.quoted_status.text : (details.retweeted_status ? details.retweeted_status.text : details.text)}</div>
            {((details.quoted_status && details.quoted_status.extended_entities) || (details.retweeted_status && details.retweeted_status.extended_entities) ) &&
                <img
                  src={(details.quoted_status && details.quoted_status.extended_entities) ? details.quoted_status.extended_entities.media[0].media_url : details.retweeted_status.extended_entities.media[0].media_url}
                  alt="user"
                  className='display__image'
                />
            }
            <div className="row" style={{ marginTop: 10 }}>
              <div className="commentrow row">
                <i className="far fa-comment comment commentSize"></i>
              </div>
              <div className="row commentrow">
                <i className="fas fa-retweet comment commentSize"></i>
                <p className="comment commentSize" style={{ marginLeft: 9 }}>12</p>
              </div>
              <div className="row commentrow">
                <i className="far fa-heart comment commentSize"></i>
                <p className="comment commentSize" style={{ marginLeft: 9 }}>42</p>
              </div>
              <div className="commentrow row">
                <i className="fas fa-upload comment commentSize"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tweet;
