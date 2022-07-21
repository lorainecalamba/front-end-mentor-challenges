import React from 'react';

import classes from './TextCard.module.css';

const TextCard = (props) => {
  return (
    <div className={classes.textCard}>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <button>{props.buttonText}</button>
    </div>
  );
};

export default TextCard;
