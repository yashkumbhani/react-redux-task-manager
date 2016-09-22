import React, { Component, PropTypes } from 'react';
import Select from 'react-select';
class PopUpCard extends Component {

  constructor (){
    super();
    this.handleOnChange = this.handleOnChange.bind(this);
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
  console.log(value['0'], '-----------value--------')
  const { multi } = this.state;
  if (multi) {
    this.setState({ multiValue: value });
  } else {
    this.setState({ value });
  }
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
          <input type="text" className="form-control" aria-label="..." />
        </div>

        <div className="pop-up-card-field">
          <div>{this.props.subtitle2}</div>
          <input type="text" className="form-control" aria-label="..." />
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
        <div className="pop-up-card-button col-md-2">Create</div>
        <div className="pop-up-card-button col-md-2">Cancel</div>
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
  visibility:PropTypes.string
};

export default PopUpCard;
