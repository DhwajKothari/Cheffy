import React from "react";
import ScheduleTask from "./ScheduleTask";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import "./schedule.css";

const Schedule = (props) => {
    return (
    <div className="scheduleContainer">
      {props.schedule.map((task, index) => {
        return <ScheduleTask task={task} id={index} key={index} />;
      })}
      {/* {console.log(props.schedule)} */}
      <button className="btn" onClick={props.addTask}>
        <AddCircleIcon />
      </button>
    </div>
  );
};

export default Schedule;
