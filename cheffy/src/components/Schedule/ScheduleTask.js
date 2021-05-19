import React from 'react'

const ScheduleTask = (props) => {
    return (
      <div className="task">
        <p>{props.task.title}</p>
        <div className="taskDate">
          <p>{props.task.startDate}</p>
        </div>
        <div className="taskTime">
          <p>{props.task.startTime}</p>
          <p>{props.task.endTime}</p>
        </div>
      </div>
    );
}

export default ScheduleTask
