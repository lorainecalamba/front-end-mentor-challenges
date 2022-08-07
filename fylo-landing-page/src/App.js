import React from "react";
import Footer from "./components/Footer/Footer";
import GetStarted from "./components/GetStarted/GetStarted";
import Intro from "./components/Intro/Intro";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <React.Fragment>
      <Navbar />

      <Intro />

      <GetStarted />
      <Footer />
    </React.Fragment>
  );
}

export default App;
