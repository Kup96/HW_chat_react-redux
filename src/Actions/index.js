import ACTION_TYPES from "./actionTypes";


export const addMsg = (data) =>{
    return {
    type: ACTION_TYPES.ADD_MESSAGE,
    data: data,
}}

