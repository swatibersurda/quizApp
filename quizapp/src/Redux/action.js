import * as Types from "./actionTypes";
import axios from "axios"

export const getData = (data) => (dispatch) => {
    console.log(data)
    dispatch({ type: Types.GET_DATA_REQUEST })
    return axios.
        get(`https://opentdb.com/api.php?amount=${data.amount}&category=${data.category}&difficulty=${data.difficulty}&type=multiple`).then((res) => {
            console.log(res.data.results);
            return dispatch({ type: Types.GET_DATA_SUCESS, payload: res.data.results })
        }).catch((err) => {
            return dispatch({ type: Types.GET_DATA_FAILURE })
        })

}



export const correctCount=(payload)=>(dispatch)=>{
    console.log(payload,"payy")
    dispatch({type:Types.CORRECT_COUNT,payload:payload})
}