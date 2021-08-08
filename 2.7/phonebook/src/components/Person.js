import React from 'react'

const Person = ({ person }) => {

  return ( person != null ? ( <li>{person} </li> ) : null )

}

export default Person