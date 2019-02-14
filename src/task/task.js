import React from 'react';

let Task = (props) => {
  return (
    <div>
      <h1>{props.text}</h1>
      <button onClick={props.delete}>delete</button>
    </div>
  );
};
 
export default Task