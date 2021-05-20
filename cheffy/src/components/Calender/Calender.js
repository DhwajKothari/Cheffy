import React from "react";
import DateFnsUtils from "@date-io/date-fns";
import enLocale from "date-fns/locale/en-US";
import {
  DatePicker,
  TimePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import "./calender.css";
import Button from "@material-ui/core/Button";

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
          <div className="work">
            <input
              type="text"
              name="Work"
              onChange={handleChange}
              placeholder="Work"
              value={work}
            />
          </div>
          <div className="calender">
            <DatePicker
              orientation="landscape"
              variant="static"
              disablePast={true}
              openTo="date"
              value={selectedDate}
              onChange={handleDateChange}
            />
          </div>
          <h2>Select Time Slots</h2>
          <div className="time">
            <div className="startTime">
              <p>Start Time</p>
              <TimePicker value={selectedDate} onChange={handleDateChange} />
            </div>
            <div className="endTime">
              <p>End Time</p>
              <TimePicker
                value={selectedEndTime}
                onChange={handleEndTimeChange}
              />
            </div>
          </div>
          <Button className="AddTaskbtn" onClick={setSchedule}>Add to Schedule</Button>
        </form>
      </div>
    </MuiPickersUtilsProvider>
  );
};

export default Calender;
