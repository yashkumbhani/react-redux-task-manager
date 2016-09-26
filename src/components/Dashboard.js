import React, { Component, PropTypes } from 'react';
import TaskCard from './TaskCard';
import AddCard from './AddCard';

class Dashboard extends Component {
  render(){
    return (
      <div className = "dashboard">
        <div className = "container">
        {this.props.tasks.map(function(element,key){
                return (
                    <TaskCard {...this.props} {...element} key={key} />
               );
        }.bind(this))}
        <AddCard {...this.props}/>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  tasks  : PropTypes.array
};

export default Dashboard;
