import { useReducer } from "react"
import { TodoContext } from "./TodoContext"


 const TodoProvider = ({children}) =>{





    const initialState ={
        todos : []
    }
    const [state, dispatch] = useReducer(todoReducer , initialState)

return(
        <TodoContext.Provider value={{state , dispatch}}>

            {children}

        </TodoContext.Provider>

)

 }

export default TodoProvider
