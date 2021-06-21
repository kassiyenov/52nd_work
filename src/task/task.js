import React from 'react';

let Task = (props) => {
  const mystyle = {
      width: '180px'
  };
  return (
    <div>
      <h1>{props.text}</h1>
      <button className="btn btn-success" onClick={props.delete}>delete</button>
    </div>
  );
};
  
export default Task