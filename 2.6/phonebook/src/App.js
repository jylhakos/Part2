import React, { useState } from 'react'
import Person from './components/Person'

const App = () => {

  /*const [ persons, setPersons ] = useState([
    { person: '' }
  ]) */

  const [ persons, setPersons ] = useState([
    { person: null }
  ]) 

  const [ newName, setNewName ] = useState('')

  // you can use the person's name as value of the key property
  // remember to prevent the default action of submitting HTML forms!

  const addName = (event) => {
    event.preventDefault()

    console.log('Clicked', event.target)

    const personObject = {
      name: newName,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: persons.length + 1,
    }

    setPersons(persons.concat(personObject))
    
    setNewName('')

  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        { persons.map(person => <Person key={person.id} person={person.name} /> )}
      </ul>
    </div>
  )
}

export default App

