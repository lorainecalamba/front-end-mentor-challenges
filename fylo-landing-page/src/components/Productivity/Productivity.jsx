import React from 'react';
import Card from '../UI/Card';
import ProductivityPhoto from '../../img/illustration-2.svg';
import TopImage from '../../img/bg-curve-desktop.svg';
import Testimonial from './Testimonial';

const Productivity = () => {
  return (
    <React.Fragment>
      <img src={TopImage} alt="Top" className="w-full mt-10" />
      <Card className="h-auto items-center box-border bg-productivity pb-10">
        <div className="basis-1/2 mr-14">
          <p className="primary-header">Stay Productivity, wherever you are</p>
          <p className="pb-2">
            Never let location be an issue when accessing your files. Fylo has
            you covered for all of your file storage needs.
          </p>
          <p>
            Securey share files and folders with friends, family and collegagues
            for live collaboration. No email attachments required!
          </p>

          <span className="hover:underline hover:decoration-2 hover:cursor-pointer mt-4 text-xl">
            See how Fylo works
          </span>

          <Testimonial />
        </div>
        <div className="basis-1/2 flex justify-center">
          <img src={ProductivityPhoto} alt="Productivity" className="w-3/4" />
        </div>
      </Card>
    </React.Fragment>
  );
};

export default Productivity;
