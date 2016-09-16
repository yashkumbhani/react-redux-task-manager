import React, {  PropTypes } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
//        {React.cloneElement(this.props.children, this.props)}

class App extends React.Component {
  render() {
    return (
       <div>
        <Header header={'Task Management'}/>

       </div>
    );
  }
}

App.propTypes = {
  children:  PropTypes.element.isRequired
};

function mapStateToProps(state) {
  return {
    messages: state.messages
  };
}

export default connect(mapStateToProps)(App);
