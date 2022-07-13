import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter'
import testing from './Add'


export default configureStore(
    {
        reducer: {
            counter : counterReducer,
            service : testing
        }
    }
);