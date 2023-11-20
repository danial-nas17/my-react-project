import React, { useContext } from 'react'
import { TodoContext } from '../component/context/TodoContext'

function Todo() {
    
    const {state , dispatch} = useContext(TodoContext)
  return (
   
    <h1>its a {state.todos}</h1>

  )
}

export default Todo
