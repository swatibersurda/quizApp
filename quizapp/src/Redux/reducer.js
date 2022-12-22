import * as Types from "./actionTypes";
const initialState={
    data:[],
    extra:[],
    isLodaing:false,
    isError:false,
    correct:0
}

export const reducer=(state=initialState,action)=>{
    switch(action.type){
        case Types.GET_DATA_REQUEST:{
            return{
                ...state,
                isLodaing:true
            }
        }
        case Types.GET_DATA_SUCESS:{
            return{
                ...state,
                isLodaing:false,
                data:action.payload,
                extra:action.payload
            }
        }
        case Types.GET_DATA_FAILURE:{
            return{
                ...state,
                isError:true
            }
        }

        case Types.PAGE_DATA:{
            console.log(action.payload)
            return{
                ...state,
                data:action.payload
            }
        }
       case Types.CORRECT_COUNT:{
        return{
            ...state,
            correct:state.correct+action.payload
        }
       }
        default:
            return state;
    }
}