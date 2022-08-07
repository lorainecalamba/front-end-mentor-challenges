import React from "react";
import Footer from "./components/Footer/Footer";
import Intro from "./components/Intro/Intro";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <React.Fragment>
      <Navbar />

      <Intro />

      <Footer />
    </React.Fragment>
  );
}

export default App;
