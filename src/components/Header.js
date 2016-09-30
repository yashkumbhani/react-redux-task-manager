import React, { Component, PropTypes } from 'react';

class Header extends Component {
  render(){
    let head;

    if(this.props.params.title){
      head = this.props.params.title;
    }
      else {
        head='Task Management';
      }
    return (
      <div className = "header"> {head} </div>
    );
  }
}

Header.propTypes = {
    params : PropTypes.object
};

export default Header;
