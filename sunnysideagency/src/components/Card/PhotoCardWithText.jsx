import React from 'react';
import classes from './PhotoCardWithText.module.css';

const PhotoCardWithText = (props) => {
  return (
    <div
      className={classes.photoCardWithText}
      style={{
        backgroundImage: `url(${props.photo})`,
        color: props.textColor,
      }}>
      <h3>Graphic Design</h3>
      <p>
        Great design makes you memorable. We deliver artwork that underscores
        your brand message and captures potential clients's attention
      </p>
    </div>
  );
};

export default PhotoCardWithText;
