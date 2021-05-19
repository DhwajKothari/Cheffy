import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Calender from "./components/Calender/Calender";
import Intro from "./components/Intro/Intro";
import Schedule from "./components/Schedule/Schedule";

const App = (props) => {
  const [schedule, setSchedule] = React.useState([]);
  const addToSchedule = (work, date, endTime) => {
    setSchedule((schedule) => {
      schedule.push({
        title: work,
        startDate: date,
        startTime: date,
        endTime: endTime,

      });
    });
    console.log(schedule);
  };
  function addTask() {
    return
    <Calender addToSchedule={addToSchedule} />;
  }
  return (
    <div className="App">
      <Header />
      <Intro />
      <Schedule schedule={schedule} addTask={addTask}/>
      <Footer />
    </div>
  );
};

export default App;
