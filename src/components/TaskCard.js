import React, { Component, PropTypes } from 'react';

class TaskCard extends Component {

  render(){
    const { description , members , name } = this.props;

    return (
      <div className = "TaskCard">
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
