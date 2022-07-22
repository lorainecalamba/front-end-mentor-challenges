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
      <h3>{props.title}</h3>
      <p>
        {props.description}
      </p>
    </div>
  );
};

export default PhotoCardWithText;
