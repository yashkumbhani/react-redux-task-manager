import React, {  PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Dashboard from '../components/Dashboard';
import * as actionCreators from '../actions/tasks';

class App extends React.Component {
  render() {
    return (
       <div>
        <Header header={'Task Management'}/>
        <Dashboard {...this.props}/>
       </div>
    );
  }
}

 App.propTypes = {
   route:  PropTypes.Object
 };

function mapStateToProps(state) {
  return {
    tasks: state.tasks
  };
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps , mapDispachToProps)(App);
