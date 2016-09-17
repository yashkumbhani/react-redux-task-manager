import React, { Component, PropTypes } from 'react';

class TaskCard extends Component {

constructor(){
  super();
  this.abc = this.abc.bind(this);
}

  abc(){
    console.log('---------adasd------');
  }

  render(){
    const { description , members , name } = this.props;

    return (
      <div className = "col-md-3 task-card" onClick  = {this.abc} >
        <div className = "task-card-header">{name} </div>
        <div className = "task-card-body">{description} </div>
        <div className= "task-card-footer">Team Members :{members} </div>
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
