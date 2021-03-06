import { combineReducers } from 'redux';
import authUser from "./auth/reducer";
import profileReducer from "./Profile/reducer"
import businessReducer from "./bussiness/reducer"
import tradePeople from "./treadspeople/reducer"

const rootReducer = combineReducers({
    authUser,
    profileReducer,
    businessReducer,
    tradePeople
});

export default rootReducer;