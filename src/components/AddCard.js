import React , { Component , PropTypes } from 'react';
import PopUpCard from './PopUpCard';


class AddCard extends Component {

  constructor(){
    super();
    console.log(this);
    this.onClick = this.onClick.bind(this);
    this.popCardVisiblity = this.popCardVisiblity.bind(this);
    this.state = {};
    this.state.popup = 'hidden';
  }

  popCardVisiblity (value){
    this.setState({popup:value});
  }

  onClick(e){
    console.log(e.currentTarget.getBoundingClientRect());
    this.setState({popup:'visible'});
  }

  render (){
    return(
      <div>
      <div className="task-card-inner-element col-md-3 col-sm-6">
        <div className = "task-card add-task-card" onClick  = {this.onClick} >
          <i className="fa fa-plus-square-o add-task-card-icon" aria-hidden="true" ></i>
          <div className="add-task-card-description"> Create new Task </div>
        </div>
      </div>
      <PopUpCard visibility = {this.state.popup} title={'Create Project'} subtitle1={'Title'}
        subtitle2={'Description'}  subtitle3={'Members'} {...this.props} popCardVisiblity={this.popCardVisiblity} />
    </div>
    );
  }
}

export default AddCard;
