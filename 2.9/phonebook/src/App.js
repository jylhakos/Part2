import React, { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '040-123456' },
    { name: 'Ada Lovelace', phone: '39-44-5323523' },
    { name: 'Dan Abramov', phone: '12-43-234345' },
    { name: 'Mary Poppendieck', phone: '39-23-6423122' }
  ])

  //const [ persons, setPersons ] = useState([{ person: null, phone: null }])

  const [filtered, setFiltered] = useState([]);

  const [ newName, setNewName ] = useState('')

  const [ newPhone, setNewPhone ] = useState('')

  const handleFilter = (event) => {

    event.preventDefault()

    let value = event.target.value.toLowerCase();

    let result = [];

    console.log('value', value);

    result = persons.filter((person) => {

      console.log('person.name', person.name);

      return person.name.toLowerCase().indexOf(value) !== -1;

    });

    setFiltered(result)

    //setPersons(result)
  }

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
        setFiltered(persons)
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
        <Filter persons={persons} filtered={filtered} handleFilter={handleFilter}/>
        <h3>Add New</h3>
        <PersonForm addPerson={addPerson} newName={newName} handleNameChange={handleNameChange} newPhone={newPhone} handlePhoneChange={handlePhoneChange}/>
        <h2>Numbers</h2>
        <Persons persons={persons}/>
      </div>
    )
}

export default App

