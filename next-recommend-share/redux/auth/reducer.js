import {
    LOGIN_USER,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_ERROR,
    REGISTER_USER,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_ERROR,
    LOGOUT_USER,
    LOGOUT_USER_SUCCESS,
    LOGOUT_USER_ERROR,
    FORGOT_PASSWORD,
    FORGOT_PASSWORD_SUCCESS,
    FORGOT_PASSWORD_ERROR,
    RESET_PASSWORD,
    RESET_PASSWORD_SUCCESS,
    RESET_PASSWORD_ERROR,
    CHANGE_PASSWORD,
    CHANGE_PASSWORD_SUCCESS,
    CHANGE_PASSWORD_ERROR,
    UNIQKEY_VERIFY,
    USER_DETAILS,
    USER_DETAILS_SUCCESS,
    USER_DETAILS_ERROR,
} from "../action-type"

const INIT_STATE = {
    currentUser: false,
    loading: false,
    usermail:'',
    error: '',
    message: '',
    userData:[]

};

const authReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        // Login user
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
                error: action.payload
            }
        // user data 
        case USER_DETAILS:
            return {
                ...state,
                loading: true,
               
            }
        case USER_DETAILS_SUCCESS:
            return {
                ...state,
                loading: false,
                userData : action.payload
            }
        case USER_DETAILS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        // Register user 
        case REGISTER_USER:
            return {
                ...state,
                loading: true,
                user: action.payload
            }
        case REGISTER_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                currentUser: true
            }
        case REGISTER_USER_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        //Forgot password
        case FORGOT_PASSWORD:
            return {
                ...state,
                loading: true,
                usermail: action.payload
            }
        case FORGOT_PASSWORD_SUCCESS:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        case FORGOT_PASSWORD_ERROR:
            return {
                ...state,
                loading: false,               
                error: action.payload
            }
        //Reset password
        case RESET_PASSWORD:
            return {
                ...state,
                loading: true,
                error: action.payload
            }
        case RESET_PASSWORD_SUCCESS:
            return {
                ...state,
                loading: false,
                newpassword: action.payload,
                resetPasswordCode: '',
                error: action.payload
            }

        case RESET_PASSWORD_ERROR:
            return {
                ...state,
                loading: false,
                newpassword: '',
                resetPasswordCode: '',
                error: action.payload
            }
// change password 
        case CHANGE_PASSWORD:
            return {
                ...state,
                loading: true,
                error: ''
            }
        case CHANGE_PASSWORD_SUCCESS:
            return {
                ...state,
                currentUser: null,
                loading: false,
                error: ''
            }
        case CHANGE_PASSWORD_ERROR:
            console.log(action.payload)
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        case UNIQKEY_VERIFY:
            // console.log(action.payload);
            return {
                ...state,
                loading: true,
                key: action.payload
            }
        case LOGOUT_USER:
            return {
                ...state,
                loading: true,
                error: ''
            }
        case LOGOUT_USER_SUCCESS:
            return {
                ...state,
                currentUser: null,
                loading: false,
                error: ''
            }
        case LOGOUT_USER_ERROR:
            return {
                ...state,
                loading: false,
                error: payload.message
            }

        default:
            return { ...state }
    }
}

export default authReducer