import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';


class TaskCard extends Component {


  render(){
    const { description , members , name } = this.props;

    return (
      <div className="task-card-inner-element col-md-3 col-sm-6">
        <Link to={`task/${name}`}>
          <div className = "task-card "  >
            <div className = "task-card-header">{name} </div>
            <div className = "task-card-body">{description}</div>
            <div className= "task-card-footer">Team Members :{members} </div>
          </div>
        </Link>
    </div>
    );
  }
}

TaskCard.propTypes = {
  description  : PropTypes.string,
  members  : PropTypes.number,
  name  : PropTypes.string
};

export default TaskCard;
