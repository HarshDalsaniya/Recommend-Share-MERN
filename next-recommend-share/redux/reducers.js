import { combineReducers } from 'redux';
import authUser from "./auth/reducer";

const rootReducer = combineReducers({
    authUser:authUser
});

export default rootReducer;