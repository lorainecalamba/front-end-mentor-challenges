import React from 'react';
import Card from './Card';
import PhotoCard from './PhotoCard';
import TextCard from './TextCard';

const LeftSideTextCard = (props) => {
  return (
    <Card isLeftText={true}>
      <TextCard
        title={props.title}
        description={props.description}
        buttonText={props.buttonText}
      />
      <PhotoCard photo={props.photo} />
    </Card>
  );
};

export default LeftSideTextCard;
