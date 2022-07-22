import React from 'react';
import Card from './Card';
import PhotoCard from './PhotoCard';
import TextCard from './TextCard';

const RightSideTextCard = (props) => {
  return (
    <Card isLeftText={false}>
      <PhotoCard photo={props.photo} />

      <TextCard
        title={props.title}
        description={props.description}
        buttonText={props.buttonText}
      />
    </Card>
  );
};

export default RightSideTextCard;
