import React, { useState } from 'react'
import Person from './components/Person'

const App = () => {

  const [ persons, setPersons ] = useState([
    { person: null, phone: null }
  ]) 

  const [ newName, setNewName ] = useState('')

  const [ newPhone, setNewPhone ] = useState('')

  const addPerson = (event) => {

    event.preventDefault()

    console.log('Clicked', event.target)

    const personObject = {
      name: newName,
      phone: newPhone,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: persons.length + 1,
    }

    console.log('personObject', personObject.name, personObject.phone)

    console.log('persons', persons)

    const personExists = persons.filter((person) => person.name === personObject.name)

    console.log('personExists', personExists)

    if (personExists.length === 0) {
      setPersons(persons.concat(personObject))
    } else {
      alert(`${newName} is already added to phonebook`)
    }
    
    setNewName('')
    setNewPhone('')
  }

  const handleNameChange = (event) => {
    console.log('handleNameChange', event.target.value)
    setNewName(event.target.value)
  }

  
  const handlePhoneChange = (event) => {
    console.log('handlePhoneChange', event.target.value)
    setNewPhone(event.target.value)
  }
  
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
      <div>
        <div>
          <label>Name: </label><input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          <label>Phone: </label><input value={newPhone} onChange={handlePhoneChange}/>
        </div>
        
        </div>
        <div><button type="submit">Add</button></div>
      </form>
      <h2>Numbers</h2>
      <ul>
        { persons.map(person => <Person key={person.id} person={person.name} phone={person.phone}/> )}
      </ul>
    </div>
  )
}

export default App

