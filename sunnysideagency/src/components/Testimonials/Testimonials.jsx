import React from 'react';
import Testimonial from './Testimonial';

import EmilyPhoto from '../../images/image-emily.jpg';
import ThomasPhoto from '../../images/image-thomas.jpg';
import JenniePhoto from '../../images/image-jennie.jpg';

import classes from './Testimonials.module.css';

const Testimonials = () => {
  return (
    <div className={classes.testimonialsContainer}>
      <h3>Client Testimonials</h3>
      <div className={classes.testimonials}>
        <Testimonial
          photo={EmilyPhoto}
          bio="We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit."
          name="Emily R."
          title="Marketing Director"
        />
        <Testimonial
          photo={ThomasPhoto}
          bio="We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit."
          name="Thomas S."
          title="Chief Operating Officer"
        />
        <Testimonial
          photo={JenniePhoto}
          bio="We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit."
          name="Jennie F."
          title="Business Owner"
        />
      </div>
    </div>
  );
};

export default Testimonials;
