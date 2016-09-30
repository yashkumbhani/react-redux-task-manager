import React , { Component,PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actionCreators from '../actions/tasks';
import Task from '../components/Task';

class TaskContainer extends Component{

  render(){
    return(
      <Task {...this.props} /> 
    );
  }
}


function mapStateToProps(state) {
  return {
    tasks: state.tasks
  };
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps , mapDispachToProps)(TaskContainer);
