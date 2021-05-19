import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Calender from "./components/Calender/Calender";
import Intro from "./components/Intro/Intro";

const App = (props) => {
  return (
    <div className="App">
      <Header />
      <Intro />
      <Calender />
      <Footer />
    </div>
  );
};

export default App;
