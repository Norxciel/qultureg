import { createSlice } from "@reduxjs/toolkit";

const stackNavSlice = createSlice({
    name:"stackNav",
    initialState:"",
    reducers:{
        setNav:(state, action)=>{
            state = action.payload()
        }
    }
});

export const {stackNav} = stackNavSlice.actions;

export default stackNavSlice.reducer