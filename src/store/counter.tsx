import { createSlice } from "@reduxjs/toolkit";



export const counterSlice = createSlice({

    name:"Patientss",
    initialState:{
    value : {pid : 0,
        firstName : '',
        lastName : '',
        email : '',
        phone : '',
        address : '',
        city : '',
        state : '',
        zip : '',
        password : '',
        services : [
            {
                sid : 0,
                serviceName : '',
                specialists : [
                    {
                        ssid : 0,
                        specialistName : '',
                        wayOfMeeting : [
                            {
                                wID : 0,
                                meetingServices : '',
                                prices : [
                                    {
                                        prID : 0,
                                        servicePrice : 0
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]}
    },

    reducers:{
        addUser : (state, action) => {
            state.value = action.payload;
        },
    },
}
);

export const {addUser} = counterSlice.actions;

export default counterSlice.reducer;