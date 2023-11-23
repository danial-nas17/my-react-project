
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




    }


}

export default todoReducer;