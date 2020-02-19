import React from 'react';
import PropTypes from 'prop-types';


function EmployeeAuthentication(props) {
  return (
    <div>
      <h2>Are you an employee?</h2>
      <button onClick={props.onSubmitAuthentication}>Yes</button>
      <h6>Note: I would never do this in the real world.</h6>
    </div>
  );
}

EmployeeAuthentication.propTypes = {
  onSubmitAuthentication: PropTypes.func
};

export default EmployeeAuthentication;  