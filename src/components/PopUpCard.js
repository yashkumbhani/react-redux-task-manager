import React, { Component, PropTypes } from 'react';
import Select from 'react-select';
import MultiSelectField from './MultiSelectField';
//https://github.com/JedWatson/react-select/blob/master/examples/src/components/Creatable.js
class PopUpCard extends Component {

  constructor (){
    super();
    this.logChange = this.logChange.bind(this);
  }

  logChange(val) {
    console.log("Selected: " + val);
  }

  render(){
    let divStyle = {
      visibility : this.props.visibility
    };

    let options = [
      { value: 'one', label: 'One' },
      { value: 'two', label: 'Two' }
    ];

    return (
      <div className = "pop-up-card col-md-4" style = {divStyle} >
        <div>{this.props.title}</div>
        <div>
          <div>{this.props.subtitle1}</div>
          <input type="text" className="form-control" aria-label="..." />
        </div>
        <div>
          <div>{this.props.subtitle2}</div>
          <input type="text" className="form-control" aria-label="..." />
        </div>
        <div>
        <div>{this.props.subtitle3}</div>
          <Select
              name="form-field-name"
              options={options}
              onChange={this.logChange}
              multi={true}
          />
        </div>
        <div><MultiSelectField label="asdasd"/></div>

      </div>
    );
  }
}

PopUpCard.propTypes = {
  title : PropTypes.string,
  subtitle1:PropTypes.string,
  subtitle2:PropTypes.string,
  subtitle3:PropTypes.string,
  visibility:PropTypes.string
};

export default PopUpCard;
