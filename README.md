# React

React is a JavaScript library for building user interfaces.

You can add React to an HTML page.

The React app compiling is handled by Babel.

Babel is a toolchain that is used to convert ECMAScriptcode into a backwards compatible version of JavaScript in older browsers. 

An example React app looks like this.

```

ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
)

```

**JSX**

The layout of React components is mostly written using JSX.

JSX returned by React components is compiled into JavaScript.

JSX is looks like HTML with the distinction that with JSX you can embed dynamic content by writing appropriate JavaScript using curly braces.

```

const Hello = () => {
  return (
    <div>
      <p>Hello world</p>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <h1>Greetings</h1>
      <Hello />
    </div>
  )
}

```
**Component**

The file App.js defines a React component with the name App.

When using React, all content that needs to be rendered is defined as React components.

The simplest way to define a component is to write a JavaScript function.

```

import React from 'react'

const Hello = () => {
  return (
    <div>
      <p>Hello world</p>
    </div>
  )
}

export default Hello

```
 
When React sees an element representing a user-defined component, it passes JSX attributes and children to this component as a single object.

Always start component names with a capital letter, otherwise React treats components starting with lowercase letters as DOM tags.

The the contents of the file index.js looks like the following Javascript code.

```

import ReactDOM from 'react-dom'

import App from './App'

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

```
The Javascript on the final line of file index.js renders its contents into the div-element, defined in the file public/index.html, having the id value 'root' in the following template.

```

<!DOCTYPE html>
<html lang="en">
  <head>
    <title>React App</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
    <!--
      This HTML file is a template.
    -->
  </body>
</html>

```

Components can refer to other components in their output, but never define components inside of other components.

For example, we can create an App component that renders other component.

```

import React from 'react'

import Note from './components/Hello'

const App = () => {
  return (
    <div>
      <h1>Greetings</h1>
      <Hello />
    </div>
  )
}

export default App

```

**Adding styles to React app**

CSS (Cascading Style Sheets) is the syntax that styles web content.

In React we have to use the className attribute instead of the class attribute to apply CSS style.

Class selectors are defined with the .classname syntax.

```

.note {
  color: grey;
  padding-top: 5px;
  font-size: 15px;
}

```

We could use the selector li, because the notes are wrapped inside li tags.

```

const Note = ({ note, toggleImportance }) => {
  const label = note.important 
    ? 'make not important' 
    : 'make important';

  return (
    <li className='note'>
      {note.content} 
      <button onClick={toggleImportance}>{label}</button>
    </li>
  )
}

```

**Component state**

We add state to our application's App component using of React's state hook.

When the application starts, the code in App is executed. 

App uses a useState hook to create the application state, setting an initial value of the variable counter.

The function call adds state to the component and renders it initialized with the value.

The variable setCounter is assigned to a function that will be used to modify the state.

```

const App = () => {
  const [ counter, setCounter ] = useState(0)

  const handleClick = () => {
    console.log('clicked')
  }

  return (
    <div>
      <div>{counter}</div>
      <button onClick={handleClick}>
        plus
      </button>
    </div>
  )
}

```

**Complex state**

History component renders different React elements depending on the state of the application.

The useState function as well as the useEffect function must not be called from inside of a loop, a conditional expression, or any place that is not a function defining a component.

It's forbidden in React to mutate state directly, since it can result in unexpected side effects.

```

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }

  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
  }

  return (
    <div>
      {left}
      <Button handleClick={handleLeftClick} text='left' />
      <Button handleClick={handleRightClick} text='right' />
      {right}
      <History allClicks={allClicks} />
    </div>
  )
}

```

**Event handlers**

We want the clicking of the button to reset the state stored in the value variable.

In order to make the button react to a click event, we have to add an event handler to it.

Event handlers must always be a function or a reference to a function.

We set the value of the button's onClick attribute to be a reference to the handleClick function defined in the App.

The event handler of handleClick function can also be defined directly in the value assignment of the onClick attribute.

We define the event handlers for our buttons where we declare their onClick attributes.

When one of the buttons is clicked, the event handler is executed. 

The event handler changes the state of the App component with the setCounter function. 

Calling a function which changes the state causes the component to rerender.

**The props**

It is possible to pass data to React components using so called props.

The function defining the React component has a parameter props, which has fields corresponding to all the "props" the user of the component defines.

Any JavaScript code within the curly braces is evaluated and the result of this evaluation is embedded into the defined place in the HTML produced by the component.

```

const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}</p>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="George" />
      <Hello name="Daisy" />
    </div>
  )
}

```
**Rendering a collection**

We can generate React elements from the array objects using the map function, which can then be placed inside ul tags.

```

const App = (props) => {
  const { notes } = props

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note => <li>{note.content}</li>)}
      </ul>
    </div>
  )
}


```

**Forms**

In order to get our page to update when new notes are added then store the notes in the App component's state.

To able to access the data contained in the form's input element we add state called newNote to store the user-submitted input.

In order to enable editing of the input element, we have to register an event handler called handleNoteChange that synchronizes the changes made to the input with the component's state

The handleNoteChange event handler is called every time a change occurs in the input element. The event handler function receives the event object as its event parameter.

We create new object for the note using noteObject that will receive its content from the component's newNote state in the addNote function to create new notes.

The new note is added to the list of notes in the App component's state using the concat array method.

The concat method does not mutate the original notes array, but rather creates a new copy of the array with the new item added to the end.

```

import React, { useState } from 'react'
import Note from './components/Note'

const App = (props) => {

  const [notes, setNotes] = useState(props.notes)

  const [newNote, setNewNote] = useState('') 

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() > 0.5,
      id: notes.length + 1,
    }
    
    setNotes(notes.concat(noteObject))

    setNewNote('')
  }

  const handleNoteChange = (event) => {

    console.log(event.target.value)

    setNewNote(event.target.value)
  }

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note => 
            <Note key={note.id} note={note} />
        )}
      </ul>
      <form onSubmit={addNote}>
        <input
          value={newNote}
          onChange={handleNoteChange}
        />
        <button type="submit">save</button>
      </form>  
    </div>
  )
}

export default App

```

**Fetching data from a server**

The requirement is to use a non-blocking model for executing IO operations.

We could use the promise based function fetch to pull the data from the server or we could using the axios library for communication between the browser and server.

Promise is an object representing the eventual completion or failure of an asynchronous operation.

The json-server package is a so called JSON Server.

You can install JSON server on your machine, but we can also run the json-server using the command npx.

```

$ npm install -g json-server

```

The json-server starts running on port 3000 by default and json-server stores all the data in the db.json file.

```

$ npx json-server --port 3000 --watch db.json


```

We can start the json-server from the project root directory with the following command.

```

$ npm run server


```

The React app fetches the notes from the server and renders them to the browser. 

The browsers already support the fetch method, which is based on Javascript promises.

```

$ npm install axios


```

Add the following Javascript to the index.js file.

```

import axios from 'axios'

const promise = axios.get('http://localhost:3000/notes')

console.log(promise)

```

**Altering data in a server**

We refer to data objects, such as the notes in our application, as resources in REST terminology.

Every resource has a unique URL address associated with it.

Resources are fetched from the server with HTTP GET requests.

Creating new resource for storing a note is done by making an HTTP POST request to the notes URL.

The data for the new note resource is sent in the body of the HTTP POST request.

The object is sent to the server using the axios post method in the HTTP POST request.

The newly created note resource is stored in the value of the data property of the response object.

The new note returned by the backend server is added to the list of notes in our application's state in the way of using the setNotes function.


```

import React, { useState, useEffect } from 'react'
import Note from './components/Note'
import axios from 'axios'

const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(false)

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/notes')
      .then(response => {
        console.log('promise fulfilled')
        setNotes(response.data)
      })
  }, [])
  console.log('render', notes.length, 'notes')

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() > 0.5,
    }

    axios
    .post('http://localhost:3001/notes', noteObject)
    .then(response => {
      setNotes(notes.concat(response.data))
      setNewNote('')
    })
  }

  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  const notesToShow = showAll
  ? notes
  : notes.filter(note => note.important)

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all' }
        </button>
      </div>   
      <ul>
        {notesToShow.map(note => 
            <Note key={note.id} note={note} />
        )}
      </ul>
      <form onSubmit={addNote}>
        <input
          value={newNote}
          onChange={handleNoteChange}
        />
        <button type="submit">save</button>
      </form>  
    </div>
  )
}

export default App


```

We add a button to the component and assign its event handler as the toggleImportance function passed in the component's props.

```

import React from 'react'

const Note = ({ note, toggleImportance }) => {
  const label = note.important
    ? 'make not important' : 'make important'

  return (
    <li className='note'>
      {note.content} 
      <button onClick={toggleImportance}>{label}</button>
    </li>
  )
}

export default Note

```

We can use the "dollar-bracket" syntax to add parts to the string that will evaluate JavaScript expressions, e.g. the value of a variable.

The notes stored in the backend can be modified in different ways by making HTTP requests to the note's unique URL. 

We can either replace the entire note with an HTTP PUT request, or only change some of the note's properties with an HTTP PATCH request.

The array find method is used to find the note we want to modify, and we then assign it to the note variable.

After this we create a new object that is an exact copy of the old note using object spread syntax.

The variable note is a reference to an item in the notes array in the component's state, and we shall never mutate state directly in React.

When we add properties inside the curly braces after the spreaded object, e.g. { ...note, important: true }, then the value of the important property of the new object will be true. 

The new note is then sent with a PUT request to the backend where it will replace the old object.

The callback function sets the component's notes state to new array that contains all the items from the previous notes array, except for the old note which is replaced by the updated version of it returned by the server.

The map method creates a new array by mapping every item from the old array into an item in the new array.

The new array is created conditionally so that if note.id !== id is true, we copy the item from the old array into the new array. 

If the condition is false, then the note object returned by the server is added to the array instead.

The functions of the notes module can be used directly with the imported variable noteService.

```

import React, { useState, useEffect } from 'react'
import Note from './components/Note'
import Notification from './components/Notification'
import noteService from './services/notes'

const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    noteService
      .getAll()
      .then(initialNotes => {
      setNotes(initialNotes)
    })
  }, [])

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() > 0.5,
    }

    noteService
      .create(noteObject)
        .then(returnedNote => {
        setNotes(notes.concat(returnedNote))
        setNewNote('')
      })
  }

  const toggleImportanceOf = id => {
    const note = notes.find(n => n.id === id)
    const changedNote = { ...note, important: !note.important }
  
    noteService
    .update(id, changedNote)
      .then(returnedNote => {
      setNotes(notes.map(note => note.id !== id ? note : returnedNote))
    })
    .catch(error => {
      setErrorMessage(
        `Note '${note.content}' was already removed from server`
      )
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    })    
  }

  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  const notesToShow = showAll
  ? notes
  : notes.filter(note => note.important)

  return (
    <div>
      <h1>Notes</h1>
      <Notification message={errorMessage} />
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all' }
        </button>
      </div>   
      <ul>
        {notesToShow.map(note => 
            <Note
              key={note.id}
              note={note} 
              toggleImportance={() => toggleImportanceOf(note.id)}
            />
        )}
      </ul>
      <form onSubmit={addNote}>
        <input
          value={newNote}
          onChange={handleNoteChange}
        />
        <button type="submit">save</button>
      </form>  
    </div>
  )
}

export default App


```

The notes module returns an object that has three functions (getAll, create, and update).

The new note is sent with a PUT request to the backend where it will replace the old object.

We assign the promise to the request variable and call its then method.

The App component uses the response.data property of the response object.

When the HTTP request is successful, the promise returns the data sent back in the response from the backend.

```

import axios from 'axios'
const baseUrl = 'http://localhost:3000/notes'

const getAll = () => {
  const request = axios.get(baseUrl)
  const nonExisting = {
    id: 0,
    content: 'The note is not saved to server',
    date: '2022-01-16T18:03:30.096Z',
    important: true,
  }
  return request.then(response => response.data.concat(nonExisting))
}

const create = newObject => {
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
}

export default { 
  getAll, create, update
}

```

A link to React

https://reactjs.org/


![alt text](https://github.com/jylhakos/Part2/blob/main/Part2.png?raw=true)

