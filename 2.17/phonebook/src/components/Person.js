import React from 'react'

const Person = ({ id, person, phone, handleDeletePerson }) => {

  console.log('id', id, 'person', person, 'phone', phone)

  return ( 
      person != null ? ( <li>{person} {phone} <button type="submit" value={id} onClick={(e) => handleDeletePerson(e,person)}>Delete</button></li> ) : null
      )
}

export default Person