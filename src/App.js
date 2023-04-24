import React, { useState } from 'react';
import Form from './components/Form'
import MockCV from './components/MockCV'

function App() {
  const [personalData, setPersonalData] = useState({
    userName: '',
    title: '',
    phone: '',
    email: '',
    location: '',
    description: ''
  })
  function handleChange(e) {
    const {name, value} = e.target;
    setPersonalData(prevState => {
      return {
        ...prevState,
        [name]: value
      }
    })
  }
  return (
    <div>
      <Form personalData={personalData} handleChange={handleChange}/>
      <MockCV personalData={personalData} />
    </div>
  );
}

export default App;
