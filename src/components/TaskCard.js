import React, { Component, PropTypes } from 'react';

class TaskCard extends Component {

  onClick(){
  }

  render(){
    const { description , members , name } = this.props;

    return (
      <div className="task-card-inner-element col-md-3 col-sm-6">
        <div className = "task-card " onClick  = {this.onClick} >
          <div className = "task-card-header">{name} </div>
          <div className = "task-card-body">{description} </div>
          <div className= "task-card-footer">Team Members :{members} </div>
        </div>
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
