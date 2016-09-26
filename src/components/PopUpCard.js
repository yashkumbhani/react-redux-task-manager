import React, { Component, PropTypes } from 'react';
import Select from 'react-select';
class PopUpCard extends Component {

  constructor (){
    super();
    this.handleOnChange = this.handleOnChange.bind(this);
    this.onCreate = this.onCreate.bind(this);
    this.onCancel = this.onCancel.bind(this);

    this.state = {};
    this.state = {
      multi: true,
      multiValue: [],
      options: [
        { value: 'R', label: 'Red' },
        { value: 'G', label: 'Green' },
        { value: 'B', label: 'Blue' }
      ],
      value: undefined
    };
  }

handleOnChange (value) {
    this.setState({ multiValue: value });
}

  onCreate(){
    const task = {
      name : this.refs.title.value,
      description : this.refs.description.value,
      members : this.state.multiValue.length,
      memberArray : this.state.multiValue
    };
    this.setState({multiValue: []});
    this.props.addTask(task);
    this.props.popCardVisiblity('hidden');
    this.refs.title.value ='';
    this.refs.description.value = '';
  }

  onCancel(){
    this.setState({title:'',description:'',multiValue: []});
    this.props.popCardVisiblity('hidden');
    this.refs.title.value ='';
    this.refs.description.value = '';
  }

  render(){
    let divStyle = {
      visibility : this.props.visibility
    };
    const { multi, multiValue, options, value } = this.state;

    return (

      <div className = "pop-up-card col-md-4" style = {divStyle} >
        <div className="pop-up-card-field">{this.props.title}</div>
        <div className="pop-up-card-field">
          <div>{this.props.subtitle1}</div>
          <input type="text" className="form-control" aria-label="..." ref="title" value={this.state.title}/>
        </div>

        <div className="pop-up-card-field">
          <div>{this.props.subtitle2}</div>
          <input type="text" className="form-control" aria-label="..."  ref="description"  value={this.state.description}/>
        </div>

        <div className="pop-up-card-field">
          <div> {this.props.subtitle3}</div>
      				<Select.Creatable
              multi={multi}
              options={options}
      				onChange={this.handleOnChange}
              value={multi ? multiValue : value}
              />
        </div>
        <div className="row">
        <div className="pop-up-card-button col-md-2" onClick = {this.onCreate} >Create</div>
        <div className="pop-up-card-button col-md-2" onClick = {this.onCancel}>Cancel</div>
        </div>
      </div>
    );
  }
}

PopUpCard.propTypes = {
  title:PropTypes.string,
  subtitle1:PropTypes.string,
  subtitle2:PropTypes.string,
  subtitle3:PropTypes.string,
  visibility:PropTypes.string,
  addTask:PropTypes.function,
  popCardVisiblity:PropTypes.function
};

export default PopUpCard;
