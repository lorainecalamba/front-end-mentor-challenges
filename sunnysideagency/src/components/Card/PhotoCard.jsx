import React from 'react';

import classes from './PhotoCard.module.css';

const PhotoCard = (props) => {
  return (
    <div
      className={classes.photoCard}
      style={{ backgroundImage: `url(${props.photo})` }}></div>
  );
};

export default PhotoCard;
