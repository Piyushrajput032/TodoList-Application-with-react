import {createSlice,createAction}from "@reduxjs/toolkit"

const userSlice=createSlice({
    name:'user',
    initialState:[],
    reducers:{
        addUser(state,action){
            state.push(action.payload)
        },
        removeUsers(state,action){
            state.splice(action.payload,1)
        },
        clearallUser(state,action){},
    },
});
console.log(userSlice.actions)
export default userSlice.reducer
export const{addUser,removeUsers}=userSlice.actions;