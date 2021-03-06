import React from 'react';

import './Styles.scss';

const Button = (props) => {

  return (
    <div className={"submitButton " + (props.inactive ? "submitButton--inactive" : "")} onClick={props.handleSubmit} >
      {props.label}
      {props.isLoading && (
        <div className="submitButton__icon-container">
          <i className={props.iconClass + " submitButton__icon"}></i>
        </div>
      )}
    </div>
  )
}

export default Button;

