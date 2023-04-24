import React from 'react';

function CreateForm(props) {
  return (
    <form>
      <h2>Work Experience</h2>
      <input
      type='text'
      name='company'
      placeholder='Company'
      />
      <input
      type='text'
      name='position'
      placeholder='Position'
      />
      <input
      type='text'
      name='startDate'
      placeholder='Start date'
      />
      <input
      type='text'
      name='endDate'
      placeholder='End date'
      />
      <input
      type='text'
      name='endDate'
      placeholder='End date'
      />
      <input
      type='text'
      name='description'
      placeholder='Description'
      />
    </form>
  );
}

export default CreateForm;