import React from "react";
import DateFnsUtils from "@date-io/date-fns";
import enLocale from "date-fns/locale/en-US";
import {
  DatePicker,
  TimePicker,
  DateTimePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import "./calender.css";

const Calender = (props) => {
  const [selectedDate, setSelectedDate] = React.useState(new Date());
    const [selectedEndTime, setSelectedEndTime] = React.useState(selectedDate);
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const handleEndTimeChange = (date) => {
    setSelectedEndTime(date);
  };
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={enLocale}>
      <div className="container">
        <form>
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
          <h2>Select Time Slot of Booking</h2>
          <div className="time">
            <div className="startTime">
              <label>Start Time</label>
              <TimePicker value={selectedDate} onChange={handleDateChange} />
            </div>
            <div className="endTime">
              <label>End Time</label>
              <TimePicker
                value={selectedEndTime}
                onChange={handleEndTimeChange}
              />
            </div>
          </div>
        </form>
      </div>
    </MuiPickersUtilsProvider>
  );
};

export default Calender;
