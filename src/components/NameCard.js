import React, { PropTypes } from 'react';


const NameCard =  ({name})=> {
  return(
    <div className="container ">
      <div className="row">
        <div className="col-md-4">
          <div className="name-card-name">
              {name}
          </div>
        </div>
      </div>
    </div>
    );
};

NameCard.propTypes = {
  name:PropTypes.string
};

export default NameCard;
