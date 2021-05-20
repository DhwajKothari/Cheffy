import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Calender from "./components/Calender/Calender";
import Intro from "./components/Intro/Intro";
import Schedule from "./components/Schedule/Schedule";
import compareAsc from "date-fns/compareAsc";

const App = (props) => {
  const [AddOn, toggleOn] = React.useState(false)
  const [schedule, setSchedule] = React.useState([]);
  const addToSchedule = (work, date, endTime) => {
    setSchedule((prevSchedule) => {
      return [
        ...prevSchedule,
        {
          title: work,
          startDate: date,
          startTime: date,
          endTime: endTime,
        },
      ].sort(scheduleSorting);
    });
  };
  function scheduleSorting(a, b){
    return compareAsc(a.startDate, b.startDate);
  }
  function addTask() {
    toggleOn(prev => !prev);
  }
  React.useEffect(() => {
    setSchedule([]);
  }, []);
  return (
    <div className="App">
      <Header />
      <Intro />
      <Schedule schedule={schedule} addTask={addTask} />
      {AddOn ? <Calender addToSchedule={addToSchedule} /> : null}
      <Footer />
    </div>
  );
};


export default App;
