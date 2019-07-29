import React from 'react';

function Tweet(props) {
  return (
    <div>
      <p>{props.details.text}</p>
      {props.details.extended_entities &&
        <img src={props.details.extended_entities.media[0].media_url} alt="text" />
      }
    </div>
  );
}

export default Tweet;
