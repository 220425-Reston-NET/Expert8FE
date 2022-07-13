import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({

    name:"Patientss",
    initialState:{
    value : {
        pID : 0,
        mhsID: 0,
        mhpID: 0,
        ssID: 0,
        wID: 0



        }
    },

    reducers:{
        addService : (state, action) => {
            state.value = action.payload;
        },
    },
}
);

export const {addService} = counterSlice.actions;

export default counterSlice.reducer;