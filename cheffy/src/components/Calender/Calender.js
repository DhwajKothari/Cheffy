import React from "react";
import DateFnsUtils from "@date-io/date-fns";
import enLocale from "date-fns/locale/en-US";
import {
  DatePicker,
  KeyboardTimePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import "./calender.css";
import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";

const materialTheme = createMuiTheme({
  overrides: {
    MuiPickersToolbar: {
      toolbar: {
        backgroundColor: "#d73d36",
      },
    },
    MuiPickersDay: {
      daySelected: {
        color: "#fff",
        backgroundColor: "#d73d36",
      },
      current: {
        color: "#000",
      },
    },
  },
});

const Calender = (props) => {
  const [work, setWork] = React.useState("");
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const [selectedEndTime, setSelectedEndTime] = React.useState(selectedDate);
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const handleEndTimeChange = (date) => {
    setSelectedEndTime(date);
  };

  function setSchedule(event) {
    props.addToSchedule(work, selectedDate, selectedEndTime);
    setWork("");
    setSelectedDate(new Date());
    setSelectedEndTime(new Date());
    event.preventDefault();
  }

  function handleChange(event) {
    const { value } = event.target;
    setWork(value);
  }

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={enLocale}>
      <div className="container">
        <form>
          <ThemeProvider theme={materialTheme}>
            <div className="work">
              <div className="titleText">
                <h2>Task</h2>
              </div>
              <input
                type="text"
                name="Work"
                className="titleInput"
                onChange={handleChange}
                placeholder="Work"
                value={work}
              />
            </div>
            <div className="calender">
              <div className="dateSlotText">
                <h3>Select Date</h3>
              </div>
              <DatePicker
                orientation="landscape"
                variant="static"
                disablePast={true}
                openTo="date"
                value={selectedDate}
                onChange={handleDateChange}
              />
            </div>
            <div className="timeSlotText">
              <h3>Select Time Slots</h3>
            </div>
            <div className="time">
              <div className="startTime">
                <p>Start Time</p>
                <KeyboardTimePicker
                  variant="inline"
                  value={selectedDate}
                  onChange={handleDateChange}
                />
              </div>
              <div className="endTime">
                <p>End Time</p>
                <KeyboardTimePicker
                  variant="inline"
                  value={selectedEndTime}
                  onChange={handleEndTimeChange}
                />
              </div>
            </div>
            <div className="btnContainer">
              <button className="AddTaskbtn" onClick={setSchedule}>
                Add to Schedule
              </button>
            </div>
          </ThemeProvider>
        </form>
      </div>
    </MuiPickersUtilsProvider>
  );
};

export default Calender;
