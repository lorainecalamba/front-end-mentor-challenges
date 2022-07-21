import React from 'react';

import ArrowIconDown from '../../images/icon-arrow-down.svg';
import classes from './Banner.module.css';

const Banner = () => {
  return (
    <div className={classes.banner}>
      <div className={classes.bannerContents}>
        <h3>We are creatives</h3>
        <img src={ArrowIconDown} alt="Arrow" />
      </div>
    </div>
  );
};

export default Banner;
