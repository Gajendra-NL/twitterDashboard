import React from 'react';

function Tweet(props) {
  const { details } = props;
  return (
    <div>
      <p>{details.text}</p>
      {details.extended_entities
        && <img src={details.extended_entities.media[0].media_url} alt="text" />
      }
    </div>
  );
}

export default Tweet;
