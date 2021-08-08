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

  const addName = (event) => {

    event.preventDefault()

    console.log('Clicked', event.target)

    const personObject = {
      name: newName,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: persons.length + 1,
    }

    console.log(personObject.name)

    console.log(persons)

    const personExists = persons.filter((person) => person.name === personObject.name)

    console.log('personExists', personExists)

    if (personExists.length === 0) {
      setPersons(persons.concat(personObject))
    } else {
      alert(`${newName} is already added to phonebook`)
    }
    
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

