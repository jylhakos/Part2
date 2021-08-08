import React, { useState } from 'react'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {

  const [ persons, setPersons ] = useState([{ person: null, phone: null }]) 

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
        <PersonForm addPerson={addPerson} newName={newName} handleNameChange={handleNameChange} newPhone={newPhone} handlePhoneChange={handlePhoneChange}/>
        <h2>Numbers</h2>
        <Persons persons={persons}/>
      </div>
    )
}

export default App

