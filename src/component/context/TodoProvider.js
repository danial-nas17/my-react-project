import { useReducer } from "react"
import { TodoContext } from "./TodoContext"
import todoReducer from "./todoReducer"
import axios from "axios";
import { isValidInputTimeValue } from "@testing-library/user-event/dist/utils";
import Swal from "sweetalert2";


 const TodoProvider = ({children}) =>{

    async function getTodos(){
        try {
            
            const res = await axios.get('https://jsonplaceholder.typicode.com/todos');
            console.log(res.data);
            dispatch({type:'SET_TODO' , payload: res.data})
           

            
        } catch (err) {

            dispatch({type:'SET_ERROR' , payload: err.message})
            console.log(err.message)
            
        }

    }

    async function filterTodos(count){
        try {
            
            const res = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${count}`);

            dispatch({type:'SET_FILTER' , payload: res.data})
           
        } catch (err) {

            dispatch({type:'SET_ERROR' , payload: err.message})
            console.log(err.message)
            
        }

    }

    const createTodo = async (title) =>{
        try {
            const res = await axios.post("https://jsonplaceholder.typicode.com/todos" , {
            title:title,
            completed: false    
            })
            dispatch({type:'CREATE_TODO' , payload: res.data})

            Swal.fire({
                position: "top",
                icon: "success",
                title: "Task added",
                showConfirmButton: false,
                timerProgressBar:true,
                toast:true,
                timer: 2000
              });
            

        } catch (err) {

            console.log(err.message)

        }
    } 




    const initialState ={
        todos : [],
        error: null
    }
    const [state, dispatch] = useReducer(todoReducer , initialState)

return(
        <TodoContext.Provider value={{...state , getTodos, filterTodos , createTodo}}>

            {children}

        </TodoContext.Provider>

)

 }

export default TodoProvider
