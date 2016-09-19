import React , { Component , PropTypes } from 'react';



class AddCard extends Component {

  onClick(){
  }

  render (){
    return(

      <div className="task-card-inner-element col-md-3 col-sm-6">
        <div className = "task-card add-task-card" onClick  = {this.onClick} >
          <i className="fa fa-plus-square-o add-task-card-icon" aria-hidden="true" ></i>
          <div className="add-task-card-description"> Create new Task </div>
        </div>
      </div>
    );
  }
}

export default AddCard;
