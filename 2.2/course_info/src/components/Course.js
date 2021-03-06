import React from 'react'

const Header = ({ course }) => {
  return (
    <h1>{course.name}</h1>
  )
}

const Total = (props) => {

    const total = props.parts.map(excercise => excercise.exercises).reduce((a, b) => a + b)
    
    return (
        <p>The sum of the exercises {total}</p>
    )
  }


const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>    
  )
}

const Content = ({ course }) => {
  return (
    <div>
      {course.parts.map(part => <Part key={part.id} part={part} />)}
    </div>
  )
}

const Course = (props) => {
  console.log(props)
  const { course } = props
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total parts={course.parts} />
    </div>
  )
}

export default Course