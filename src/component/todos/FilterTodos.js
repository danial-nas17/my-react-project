import React, { useContext, useState } from 'react'
import { TodoContext } from '../context/TodoContext'

function FilterTodos() {
    const [loading , setLoading] = useState(false)
    const {filterTodos} = useContext(TodoContext)
    
    const handleChange = async (e) =>{
        setLoading(true);
        await filterTodos(e.target.value)
        setLoading(false);
    }
  return (
    
    
        
        <>  
            <div className="row">
                <div className="col-md-3"> 
                    <h6>filter</h6>
                    <select className='form-select form-select-sm' onChange={(e) => handleChange(e)}>
                        <option value="50">all</option>
                        <option value="7">7</option>
                        <option value="15">15</option>
                        <option value="30">30</option>

                    </select> 
                    {loading && <div className="spinner-border  text-center text-primary mt-5 ms-4" role="status">
                    <span className="visually-hidden">Loading...</span>
                    </div>}
                </div>
            </div>

        
      
        </>
  )
}

export default FilterTodos;
