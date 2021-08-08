import React from 'react'

const Person = ({ person, phone }) => {

  console.log('person', person, 'phone', phone)

  return ( 
      person != null ? ( <tr><td>{person}</td> <td>{phone}</td></tr> ) : null
      )
}

export default Person