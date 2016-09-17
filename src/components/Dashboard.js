import React, { Component, PropTypes } from 'react';
import TaskCard from './TaskCard';

class Dashboard extends Component {
  render(){
    return (
      <div className = "dashboard">
        <div className = "container">
        {this.props.route.tasks.map(function(element,key){
                return (
                    <TaskCard  {...element} key={key} />
               );
        })}
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  route  : PropTypes.object
};

export default Dashboard;
