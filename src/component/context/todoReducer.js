
const todoReducer = (state , action) =>{

    switch (action.type){

             case 'SET_TODO':
                return{
                    ...state,
                    todos:action.payload
            }

            case 'SET_ERROR':
                return{
                    ...state,
                    error:action.payload
                }
            case 'SET_FILTER':
                return{
                    ...state,
                    todos:action.payload
            }

            case 'CREATE_TODO':
                return{
                    ...state,
                    todos:[action.payload , ...state.todos]
            }

            case 'UPDATE_TODO':
                return{
                    ...state,
                    todos:state.todos.map(todo => todo.id === action.payload.id ? {...todo , completed:action.payload.completed } : todo )
            }
            
            case 'REMOVE_TODO':
                return{
                    ...state,
                    todos:state.todos.filter(todo => todo.id !== action.payload  )
            }





    }


}

export default todoReducer;