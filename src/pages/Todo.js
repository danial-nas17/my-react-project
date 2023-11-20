import React, { useContext, useEffect, useState } from 'react'
import { TodoContext } from '../component/context/TodoContext'
import axios from 'axios';

function Todo() {
    const [loading , setLoading] = useState(true)
    const [error , setError] = useState(null)

    const {todos , getTodos} = useContext(TodoContext)

    useEffect( () =>{

            const fetchData = async () =>{

                await getTodos();
                setLoading(false)
            }

            fetchData();
        
    } ,[])

  return (
    <>

        {loading && <div className="spinner-border text-danger text-center mt-2 ms-4" role="status">
            <span className="visually-hidden">Loading...</span>
            </div>}

        {error && <div className='text-center text-danger'>error is happend</div>}
    
        {todos && todos.map(todo => (
            <h1 key={todo.id}>{todo.title}</h1>
        ))}

   
   
   
   
    
    </>

  )
}

export default Todo
