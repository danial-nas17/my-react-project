import { useReducer } from "react"
import { TodoContext } from "./TodoContext"
import todoReducer from "./todoReducer"
import axios from "axios";


 const TodoProvider = ({children}) =>{

    async function getTodos(){
        try {
            
            const res = await axios.get('https://jsonplaceholder.typicode.com/todos');
            console.log(res.data);
            dispatch({type:'SET_TODO' , payload: res.data})
           

            
        } catch (err) {

           
            
            console.log(err.message)
            
            
            
        }

    }




    const initialState ={
        todos : []
    }
    const [state, dispatch] = useReducer(todoReducer , initialState)

return(
        <TodoContext.Provider value={{...state , getTodos}}>

            {children}

        </TodoContext.Provider>

)

 }

export default TodoProvider
