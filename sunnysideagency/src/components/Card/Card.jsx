import React from 'react';

import classes from "./Card.module.css";

const Card = (props) => {
  const clasificationCard = props.isLeftText ? 'leftSideTextCard' : 'rightSideTextCard';

  return (
    <div className={`${classes.card} ${clasificationCard}`} >
      {props.children}
    </div>
  );
};

export default Card;
