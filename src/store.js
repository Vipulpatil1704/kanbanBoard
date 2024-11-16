import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './slices/dataSlice';
import selectDataReducer from './slices/selectDataSlice';
const store=configureStore({
    reducer:{
        dataReducer,selectDataReducer
    }
})
export default store;