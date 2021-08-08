import React from 'react'
import Person from './Person'

const Persons = ({ persons, handleDeletePerson }) => {

  return (  
    <div>
      <ul>
        { persons.map(person => <Person key={person.id} id={person.id} person={person.name} phone={person.phone} handleDeletePerson={handleDeletePerson}/> )}
      </ul>
    </div>
          )

}

export default Persons