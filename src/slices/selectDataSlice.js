import {createSlice } from "@reduxjs/toolkit";
export const dataSelect = (group, allTickets, allUser,orderValue) => async (dispatch) => {
    try {
        dispatch(SELECT_DATA_REQUEST());
        let mySet = new Set();
        let arr = [];
        let selectedData = [];
        if (group === 'status') {
            allTickets.forEach((element) => {
                mySet.add(element.status);
            })
            arr = [...mySet];
            arr.push('Done');
            arr.push('Cancelled');
            arr.forEach((element, index) => {
                let newArr = allTickets.filter((fElement) => {
                    return element === fElement.status;
                })
                selectedData.push({
                    [index]: {
                        title: element,
                        value: newArr
                    }
                })
            })
            localStorage.setItem('group','status');
        }
        if(group==='user'){
            allUser.forEach((element,index)=>{
                let newArr=allTickets.filter((fElement)=>{
                    return fElement.userId===element.id;
                })
                selectedData.push({
                    [index]:{
                        title:element.name,
                        value:newArr
                    }
                })
            })
            localStorage.setItem('group','user');
        }
        else if(group==='priority'){
            let priority_list=["No Priority","Low","Medium","High","Urgent"];
            priority_list.forEach((element,index)=>{
                let newArr=allTickets.filter((fElement)=>{
                    return fElement.priority===index;
                })
                selectedData.push({
                    [index]:{
                        title:element,
                        value:newArr
                    }
                })
            })
            localStorage.setItem('group','priority');
        }
        //ordering the selected data
        if(orderValue==='title'){
            selectedData.forEach((element,index)=>{
                element[index].value.sort((a,b)=>a.title.localeCompare(b.title))
            })
            localStorage.setItem('ordervalue','title');
        }
        if(orderValue==='priority'){
            selectedData.forEach((element,index)=>{
                element[index].value.sort((a,b)=>b.priority-a.priority);
            })
            localStorage.setItem('ordervalue','priority');
        }
        dispatch(SELECT_DATA_SUCCESS({selectedData}));
    }
    catch (error) {
        dispatch(SELECT_DATA_FAILURE(error.message))
    }
}
const selectDataSlice = createSlice({
    name: 'Selectdata',
    initialState: {},
    reducers: {
        SELECT_DATA_REQUEST: (state) => {
            state.loading = true;
            state.selectedData = [];
        },
        SELECT_DATA_SUCCESS: (state, action) => {
            state.loading = false;
            state.selectedData = action.payload.selectedData;
            state.user = action.payload.user
        },
        SELECT_DATA_FAILURE: (state, action) => {
            state.loading = false;
            state.selectedData = []
            state.message = action.payload.message
        },
    }

})
export const {SELECT_DATA_REQUEST,SELECT_DATA_SUCCESS,SELECT_DATA_FAILURE}=selectDataSlice.actions
export default selectDataSlice.reducer;