import { combineReducers } from 'redux';
import authUser from "./auth/reducer";

const rootReducer = combineReducers({
    authUser
});

export default rootReducer;