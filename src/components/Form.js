import React, { useState } from 'react';
import Personal from './Personal'
import Experience from './Experience';
function Form({personalData, handleChange}) {
  //1. personal info => auto display
  //2. work exp and education => click add btn => display form => submit to display
  
  
  return (
    <div>
      <Personal formData={personalData} handleChange={handleChange} />
      <Experience />
    </div>
    
  );
}

export default Form;