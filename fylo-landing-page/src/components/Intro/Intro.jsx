import React from 'react';
import Card from '../UI/Card';
import IntroIllustration from '../../img/illustration-1.svg';

const Intro = () => {
  return (
    <Card className="h-auto mt-10 items-center box-border">
      <div className="basis-1/2 mr-14">
        <h4 className="text-4xl text-primary font-Raleway font-bold mb-7">
          All your files in one secure location, accesible anywhere.
        </h4>
        <p className="text-primary text-lg leading-6 font-OpenSans">
          Fylo stores your most important files in one secure location. Access
          them wherever you need, share and collaborate with friends, family,
          and co-workers.
        </p>
        <div className="flex flex-row box-border justify-between mt-7">
          <div className="basis-3/4	pr-4">
            <input
              type="text"
              className="border bottom-2 border-gray-600 focus:border-none active:border-none w-full h-10"
            />
          </div>
          <div className="basis-1/4">
            <button className="bg-blue-800 text-white py-2 w-full">
              Get Started
            </button>
          </div>
        </div>
      </div>
      <div className="basis-1/2 text-center">
        <img src={IntroIllustration} alt="Intro" className="w-full" />
      </div>
    </Card>
  );
};

export default Intro;
