import React from 'react';

export default props => (
  <button type="button" className="btn btn-dark" onClick={props.click}>{props.label}</button>
);
