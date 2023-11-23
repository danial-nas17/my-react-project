import React, { useContext, useState } from 'react'
import { TodoContext } from '../context/TodoContext';
import Swal from 'sweetalert2';

function CreateTodos() {
    const [todo , setTodo] = useState('');
    const [loading , setLoading] = useState(false)
    const {createTodo} = useContext(TodoContext)



    const handleSubmit = async (e) =>{
        e.preventDefault();
        setLoading(true);

        if (todo){
        await createTodo(todo);
        }
        setLoading(false);
        
    }
    

  return (
    <>

        <form onSubmit={(e) => handleSubmit(e)} className="row mt-4">
            <div className="col-md-6">

                <input onChange={(e) =>setTodo(e.target.value)} type="text" className="form-control"  placeholder="todo title..."/>

            </div>
            <div className="col-auto">
                <button className='btn btn-dark'>
                    create 
                    {loading && <span className="spinner-border spinner-border-sm"></span>}
                    </button>
            </div>
           {!todo && <div className="text-form text-danger">title is required</div> }
        </form>
    
    </>
  )
}

export default CreateTodos;
