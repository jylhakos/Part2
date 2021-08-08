// $ npx json-server --port 3001 --watch db.json
// $ npm start

import React, { useState, useEffect } from 'react'
//import axios from 'axios';
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/personService'

const App = () => {

  const [ persons, setPersons ] = useState([{ person: null, phone: null }]) 

  const [ newName, setNewName ] = useState('')

  const [ newPhone, setNewPhone ] = useState('')

  const [ counter, setCounter ] = useState(0)

  useEffect(() => {
    personService
      .getAll()
      .then(response => {
        setPersons(response.data)
        let max = 0
        response.data.forEach((object) => {
          console.log(object.id);
          if(object.id > max) {
            max = object.id
          }
        });

        setCounter(max)

        //setCounter(response.data.length)
      })
  }, [])

  console.log('counter', counter)

  const addPerson = (event) => {

      event.preventDefault()

      console.log('Clicked', event.target)

      const personObject = {
        name: newName,
        phone: newPhone,
        date: new Date().toISOString(),
        important: Math.random() < 0.5,
        id: counter + 1,
      }

      console.log('personObject', personObject.name, personObject.phone)

      console.log('persons', persons)

      const personExists = persons.filter((person) => person.name === personObject.name)

      console.log('personExists ', personExists)

      if (personExists.length === 0) {

        console.log('personExists.length ', personExists.length)

        //setPersons(persons.concat(personObject))

        // $ npm install axios

        personService.create(personObject)
        .then(response => {

          console.log('response', response)
          
          setPersons(persons.concat(response.data))

          setCounter(personObject.id)
        })
        //axios.post('http://localhost:3001/persons', personObject)
        //.then(response => {
        //  console.log(response)
        //  setPersons(persons.concat(response.data))
        //})

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

    const handleDeletePerson = (event,person) => {

      event.preventDefault()

      const id = event.target.value;

      console.log('handleDeletePerson', id, person)

      if (window.confirm('Delete ' + person + '?')) {

        personService.deletePerson(id)
        .then(response => {
          personService
          .getAll()
          .then(response => {
            setPersons(response.data)
          })
        })
      }
    }

    return (
      <div>
        <h2>Phonebook</h2>
        <PersonForm addPerson={addPerson} newName={newName} handleNameChange={handleNameChange} newPhone={newPhone} handlePhoneChange={handlePhoneChange}/>
        <h2>Numbers</h2>
        <Persons persons={persons} handleDeletePerson={handleDeletePerson}/>
      </div>
    )
}

export default App

