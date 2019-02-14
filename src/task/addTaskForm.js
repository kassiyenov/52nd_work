import React from 'react';

let TaskForm = (props) => {
  return (
    <div>
      <input type="text" onChange={props.changeCT} value={props.value}/>
      <button onClick={props.add}>Add</button>
    </div> 
  );
};
export default TaskForm