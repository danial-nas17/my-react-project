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
            dispatch({type:'SET_ERROR' , payload: null})

           

            
        } catch (err) {

            dispatch({type:'SET_ERROR' , payload: err.message})
            dispatch({type:'SET_TODO' , payload: []})

            console.log(err.message)
            
        }

    }

    async function filterTodos(count){
        try {
            
            const res = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${count}`);

            dispatch({type:'SET_FILTER' , payload: res.data})
            dispatch({type:'SET_ERROR' , payload: null})

           
        } catch (err) {

            dispatch({type:'SET_ERROR' , payload: err.message})
            dispatch({type:'SET_FILTER' , payload: []})

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
            dispatch({type:'SET_ERROR' , payload: null})


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
            dispatch({type:'SET_ERROR' , payload: err.message})
            dispatch({type:'CREATE_TODO' , payload: []})


            console.log(err.message)

        }
    } 

    const updateTodo = async (todo) =>{
        try {
            const res = await axios.put(`https://jsonplaceholder.typicode.com/todos/${todo.id}` , {
            title:todo.title ,
            completed: !todo.completed    
            })
            
            dispatch({type:'UPDATE_TODO' , payload: res.data})
            dispatch({type:'SET_ERROR' , payload: null})


            Swal.fire({
                position: "top",
                icon: "success",
                title: "Task done!",
                showConfirmButton: false,
                timerProgressBar:true,
                toast:true,
                timer: 2000
              });
              
            

        } catch (err) {
            dispatch({type:'SET_ERROR' , payload: err.message})
            dispatch({type:'SET_FILTER' , payload:[]})

            console.log(err.message)

        }
    } 

    const removeTodo = async (todoId) =>{
        try {
            const res = await axios.delete(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
            
            console.log(res.data)
            dispatch({type:'REMOVE_TODO' , payload: todoId})
            dispatch({type:'SET_ERROR' , payload: null})


            Swal.fire({
                position: "top",
                icon: "warning",
                title: "Task deleted!",
                showConfirmButton: false,
                timerProgressBar:true,
                toast:true,
                timer: 2000
              });
              
            

        } catch (err) {
            dispatch({type:'SET_ERROR' , payload: err.message})
            dispatch({type:'REMOVE_TODO' , payload: todoId})

            console.log(err.message)

        }
    } 





    const initialState ={
        todos : [],
        error: null
    }
    const [state, dispatch] = useReducer(todoReducer , initialState)

return(
        <TodoContext.Provider value={{...state , getTodos, filterTodos , createTodo, updateTodo , removeTodo}}>

            {children}

        </TodoContext.Provider>

)

 }

export default TodoProvider
