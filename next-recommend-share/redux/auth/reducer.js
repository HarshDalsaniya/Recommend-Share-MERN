import {
    LOGIN_USER,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_ERROR
} from "../action-type"

const INIT_STATE = {
    currentUser: false,
    loading: false,
    error: '',
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case LOGIN_USER:
            return {
                ...state,
                loading: true,
                user: action.payload
            }
        case LOGIN_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                currentUser: true
            }
        case LOGIN_USER_ERROR:
            return {
                ...state,
                loading: false,
                error:action.payload 
            }
        default:
            return { ...state }
    }
}