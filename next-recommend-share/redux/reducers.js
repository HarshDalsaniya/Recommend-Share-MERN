import { combineReducers } from 'redux';
import authUser from "./auth/reducer";
import profileReducer from "./Profile/reducer"

const rootReducer = combineReducers({
    authUser,
    profileReducer
});

export default rootReducer;