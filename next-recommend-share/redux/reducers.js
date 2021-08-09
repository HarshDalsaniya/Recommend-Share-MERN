import { combineReducers } from 'redux';
import authUser from "./auth/reducer";
import businessReducer from "./bussiness/reducer"

const rootReducer = combineReducers({
    authUser,
    businessReducer
});

export default rootReducer;