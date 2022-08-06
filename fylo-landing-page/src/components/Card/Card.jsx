import React from 'react';

const Card = (props) => {
  return (
    <div className={`flex justify-between px-14 ${props.className}`}>
      {props.children}
    </div>
  );
};

export default Card;
