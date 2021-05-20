import React from "react";
import { format } from "date-fns";
import "./scheduleTask.css";

const ScheduleTask = (props) => {
  let sameDay = props.sameDate;
  let date = format(props.task.startDate, "dd-MM-yyyy");
  let startTime = format(props.task.startTime, "hh:mm aaa");
  let endTime = format(props.task.endTime, "hh:mm aaa");
  console.log(sameDay);

  return (
    <div className="task">
      {sameDay ? null : (
        <div className="taskDate">
          <h4>{date}</h4>
        </div>
      )}
      <p className="taskTitle">{props.task.title}</p>
      <div className="taskTime">
        <p>{"Start Time: " + startTime}</p>
        <p>{"End Time: " + endTime}</p>
      </div>
    </div>
  );
};

export default ScheduleTask;
