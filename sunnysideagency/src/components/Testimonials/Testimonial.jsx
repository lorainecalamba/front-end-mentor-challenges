import React from 'react';

import classes from './Testimonial.module.css';

const Testimonial = (props) => {
  return (
    <div className={classes.testimonial}>
      <img
        src={props.photo}
        alt="Testimonial"
        className={classes.testimonialPhoto}
      />
      <p className={classes.testimonialBio}>{props.bio}</p>
      <p className={classes.testimonialName}>{props.name}</p>
      <p className={classes.testimonialTitle}>{props.title}</p>
    </div>
  );
};

export default Testimonial;
