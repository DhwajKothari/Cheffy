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
        {props.schedule.map((task, index) => {
            /* let sameDate = cmp(task) */
          return <ScheduleTask task={task} id={index} key={index} />;
        })}
        {/* {console.log(props.schedule)} */}
        <div className="btnContainer">
          <button className="btn" onClick={props.addTask}>
            <AddCircleIcon className="addbtn" />
          </button>
        </div>
      </div>
    );
};

export default Schedule;
