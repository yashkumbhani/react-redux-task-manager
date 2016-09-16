import React, { Component, PropTypes } from 'react';

class Header extends Component {
  render(){
    return (
      <div className = "header"> {this.props.header} </div>
    );
  }
}

Header.propTypes = {
  header  : PropTypes.string
};

export default Header;
