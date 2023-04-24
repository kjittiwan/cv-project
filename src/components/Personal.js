import React, { useState } from 'react'

export default function Personal({ formData, handleChange }) {
  console.log(formData)
  return (
      <form>
        <h2>Personal information</h2>
        <input
        type='text'
        name='userName'
        placeholder='Name'
        onChange={handleChange}
        value={formData.userName}
        />
        <input
        type='text'
        name='title'
        placeholder='Title'
        onChange={handleChange}
        value={formData.title}
        />
        <input
        type='text'
        name='phone'
        placeholder='Phone number'
        onChange={handleChange}
        value={formData.phone}
        />
        <input
        type='email'
        name='email'
        placeholder='Email'
        onChange={handleChange}
        value={formData.email}
        />
        <input
        type='text'
        name='location'
        placeholder='Location'
        onChange={handleChange}
        value={formData.location}
        />
        <input
        type='text'
        name='description'
        placeholder='Description'
        onChange={handleChange}
        value={formData.description}
        />
      </form>  
  )
}