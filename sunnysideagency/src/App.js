import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import Card from "./components/Card/Card";
import LeftSideTextCard from "./components/Card/LeftSideTextCard";
import RightSideTextCard from "./components/Card/RightSideTextCard";
import PhotoCardWithText from "./components/Card/PhotoCardWithText";
import Testimonials from "./components/Testimonials/Testimonials";

import EggPhoto from "./images/desktop/image-transform.jpg";
import WinePhoto from "./images/desktop/image-stand-out.jpg";
import CherryPhoto from "./images/desktop/image-graphic-design.jpg";
import OrangePhoto from "./images/desktop/image-photography.jpg";
import BottlesPhoto from "./images/desktop/image-gallery-milkbottles.jpg";
import GalleryPhoto from "./images/desktop/image-gallery-orange.jpg";
import ConePhoto from "./images/desktop/image-gallery-cone.jpg";
import SugarPhoto from "./images/desktop/image-gallery-sugarcubes.jpg";

import classes from "./app.module.css";
import Footer from "./components/Footer/Footer";
import PhotoCard from "./components/Card/PhotoCard";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Banner />
      <LeftSideTextCard
        title="Transform your brand"
        description="We are full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you."
        buttonText="Learn More"
        photo={EggPhoto}
      />
      <RightSideTextCard
        title="Stand out to the right"
        description="Using a collaborative formula of designer, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places"
        buttonText="Learn More"
        photo={WinePhoto}
      />
      <Card>
        <PhotoCardWithText
          photo={CherryPhoto}
          textColor="#27594e" />
        <PhotoCardWithText
          photo={OrangePhoto}
          textColor="#1a546c"
        />
      </Card>

      <Testimonials />

      <div style={{ display: "flex", height: "50vh" }}>
        <PhotoCard
          photo={BottlesPhoto}
        />
        <PhotoCard
          photo={GalleryPhoto}
        />
        <PhotoCard
          photo={ConePhoto}
        />
        <PhotoCard
          photo={SugarPhoto}
        />
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default App;
