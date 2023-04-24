import React from 'react';

function MockCV({personalData}) {
  return (
    <div>
      <p>{personalData.userName}</p>
      <p>{personalData.title}</p>
      <p>{personalData.phone}</p>
      <p>{personalData.email}</p>
      <p>{personalData.location}</p>
      <p>{personalData.description}</p>
    </div>
  );
}

export default MockCV;