import React from 'react'

export const User = (props) => {
  return (
    <div className='user-card'>
    <h1>Name :{props.name}</h1>
    <h3>Location :{props.location}</h3>
    <h3>Contact :{props.contact}</h3>
    </div>
  )
}
