import React , { Component , PropTypes } from 'react';
import PopUpCard from './PopUpCard';
import Modal from 'react-modal';

class AddCard extends Component {

  constructor(){
    super();
    this.onClick = this.onClick.bind(this);
    this.popCardVisiblity = this.popCardVisiblity.bind(this);
    this.state = {};
    this.state.popup = false;
  }

  popCardVisiblity (value){

    this.setState({popup:value});
  }

  onClick(e){
    console.log(e.currentTarget.getBoundingClientRect());
    console.log(document.documentElement.clientWidth	);
    this.setState({popup:'visible'});
  }

  render (){
    return(
      <div>
      <div className="task-card-inner-element col-md-3 col-sm-6">
        <div className = "task-card add-task-card " data-toggle="modal" data-target="#myModal" onClick  = {this.onClick} >
          <i className="fa fa-plus-square-o add-task-card-icon" aria-hidden="true" ></i>
          <div className="add-task-card-description"> Create new Task </div>
        </div>
      </div>

      <Modal className="pop-up-modal"   isOpen={this.state.popup} >
        <PopUpCard title={'Create Project'} subtitle1={'Title'}
          subtitle2={'Description'}  subtitle3={'Members'} {...this.props} popCardVisiblity={this.popCardVisiblity} />
      </Modal>
  </div>
    );
  }
}

export default AddCard;
