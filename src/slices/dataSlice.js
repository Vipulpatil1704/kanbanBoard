import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchAllData=createAsyncThunk("fetchAllData",async ()=>{
    const data =await axios.get('https://api.quicksell.co/v1/internal/frontend-assignment/').then(data=>data.data).catch(err=>console.log(err))
    // console.log(data);
    return data;
})
const dataSlice=createSlice({
    name:'Data',
    initialState:{
        //
    },
    reducers:{
        // DATA_REQUEST:(state)=>{
        //     state.loading=true;
        // },
        // DATA_SUCCESS:(state,action)=>{
        //     state.loading=false;
        //     state.allTickets=action.payload.tickets;
        //     state.allUser=action.payload.users;
        // },
        // DATA_FAILURE:(state)=>{
        //     state.loading=false;
        //     state.allTickets=[];
        //     state.allUser=[];
        // }
    },
    extraReducers:(builder)=>{
        builder
            .addCase(fetchAllData.pending,(state)=>{
                state.loading=true;
                state.error=null;
            })
            .addCase(fetchAllData.fulfilled,(state,action)=>{
                state.loading=false;
                state.allTickets=action.payload.tickets;
                state.allUser=action.payload.users;
            })
    }
})
export const {DATA_SUCCESS,DATA_REQUEST,DATA_FAILURE}=dataSlice.actions;
export default dataSlice.reducer;