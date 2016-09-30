import React, { Component, PropTypes } from 'react';
import NameCard from './NameCard';
import SubTask from './SubTask';

class Task extends Component {


  render(){
    return(
      <div>
        <NameCard name="Yash Kumbhani"/>
        <SubTask name="Publish View" status = "Done" description="blah blah blah blah blah" />
      </div>
    );
  }

}

Task.propTypes = {

};

export default Task;
