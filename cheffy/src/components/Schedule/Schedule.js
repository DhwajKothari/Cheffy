import React from "react";
import ScheduleTask from "./ScheduleTask";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import "./schedule.css";

const Schedule = (props) => {
  // const [prevDate, setPrevdate] = React.useState({});

  // function cmp(task){
  //     if (prevDate === task.startDate) {
  //       return true;
  //     } else {
  //       setPrevdate(task.startDate);
  //       return false;
  //     }
  // }
  return (
    <div className="scheduleContainer">
      <div className="scheduleBoard">
        {props.schedule.map((task, index) => {
          /* let sameDate = cmp(task) */
          return <ScheduleTask task={task} id={index} key={index} />;
        })}
      </div>
      {/* {console.log(props.schedule)} */}
      <div className="btnBox">
        <button className="btn" onClick={props.addTask}>
          Add a Task
          <AddCircleIcon className="addbtn" />
        </button>
      </div>
    </div>
  );
};

export default Schedule;
