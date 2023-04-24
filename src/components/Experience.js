import React from 'react';
import CreateForm from './CreateForm'
function Experience(props) {
  //button that creates form
  function handleClick() {
    <CreateForm />
  }
  return (
  <div>
    <h2>Experience</h2>
    <button onClick={handleClick} >Add</button>
  </div>    
  );
}

export default Experience;