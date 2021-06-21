import React from 'react';
 
let TaskForm = (props) => {
  return (
    <div>
      <input type="text" onChange={props.changeCT} value={props.value}/>
      <button className="btn btn-secondary" onClick={props.add}>Add</button>
    </div> 
  );
};
export default TaskForm 