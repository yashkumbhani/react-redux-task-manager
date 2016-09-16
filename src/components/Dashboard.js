import React, { Component, PropTypes } from 'react';
import TaskCard from './TaskCard';

class Dashboard extends Component {
  render(){
    return (
      <div className = "dashboard">
        <div className = "container">
        {this.props.tasks.map(function(element,key){
            if(key%3==0){
                return (
                  <div className = "row">
                    <TaskCard  {...element} key={key} />
                  </div>
               );
            }
            else {
              return   (<TaskCard  {...element} key={key} />);
            }

        })}
          <div className = "container">

          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  tasks  : PropTypes.array
};

export default Dashboard;
