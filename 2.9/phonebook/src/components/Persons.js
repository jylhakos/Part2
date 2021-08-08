import React from 'react'
import Person from './Person'

const Persons = ({ persons }) => {

  return (  
    <div>
      <table>
        { persons.map(person => <Person key={person.id} person={person.name} phone={person.phone}/> )}
      </table>
    </div>
          )

}

export default Persons