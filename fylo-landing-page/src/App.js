import React from "react";
import Footer from "./components/Footer/Footer";
import GetStarted from "./components/GetStarted/GetStarted";
import Intro from "./components/Intro/Intro";
import Navbar from "./components/Navbar/Navbar";
import Productivity from "./components/Productivity/Productivity";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Intro />
      <Productivity />
      <GetStarted />
      <Footer />
    </React.Fragment>
  );
}

export default App;
