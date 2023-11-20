
const todoReducer = (state , action) =>{

    switch (action.type){

        case 'SET_TODO':
            return{
                ...state,
                todos:action.payload
            }

            console.log(state)




    }


}

export default todoReducer;