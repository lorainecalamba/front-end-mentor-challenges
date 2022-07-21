import React from 'react';

const Card = (props) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      {props.children}
    </div>
  );
};

export default Card;
