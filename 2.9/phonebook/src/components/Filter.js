import React from 'react'
import Person from './Person'

const Filter = ({ persons, filtered, handleFilter }) => {

  console.log('person', persons.name)

  return ( 
        <div>
          <label>Filter: </label><input value={persons.name} onChange={handleFilter}/>
          <div style={{padding:5}}>
          <table>
            { filtered.map(person => <Person key={person.id} person={person.name} phone={person.phone}/> )}
          </table>
          </div>
        </div>
      )
}

export default Filter