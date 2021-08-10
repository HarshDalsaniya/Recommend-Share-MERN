import { combineReducers } from 'redux';
import authUser from "./auth/reducer";
import profileReducer from "./Profile/reducer"
import businessReducer from "./bussiness/reducer"

const rootReducer = combineReducers({
    authUser,
    profileReducer,
    businessReducer
});

export default rootReducer;