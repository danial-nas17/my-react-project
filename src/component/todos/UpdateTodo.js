import React from 'react'

function UpdateTodo({todo}) {

    // <i onClick={handleClick()} className="bi bi-check-all"></i> 
    // const handleClick = () =>{
        
    // }


  return (
   <>
    {todo.completed ?
    <i  className="bi bi-check-all"></i> 
    : 
    <i className="bi bi-check"></i>
    }

   
   </>
  )
}

export default UpdateTodo
