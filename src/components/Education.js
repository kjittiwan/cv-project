import React from 'react';

function Education(props) {
  return (
    <form>
      <h2>Education</h2>
      <input
      type='text'
      name='program'
      placeholder='Course/Program'
      />
      <input
      type='text'
      name='university'
      placeholder='University'
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

export default Education;