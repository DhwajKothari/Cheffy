import React from "react";
import ScheduleTask from "./ScheduleTask";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import "./schedule.css";

const Schedule = (props) => {
  return (
    <div className="scheduleContainer">
      {props.schedule.map((task, index) => {
        return <ScheduleTask task={task} id={index} />;
      })}
      <div className="btn" onClick={props.addTask}>
        <AddCircleIcon />
      </div>
    </div>
  );
};

export default Schedule;
