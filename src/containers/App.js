import React, {  PropTypes } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Dashboard from '../components/Dashboard';

//        {React.cloneElement(this.props.children, this.props)}

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
    messages: state.messages
  };
}

export default connect(mapStateToProps)(App);
