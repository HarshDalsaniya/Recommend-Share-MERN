import {
    TRADES_PEOPLE,
    TRADES_PEOPLE_SUCCESS,
    TRADES_PEOPLE_ERROR,
    USER_BUSSINESS,
    USER_BUSSINESS_SUCCESS,
    USER_BUSSINESS_ERROR,
   
} from "../action-type"


const INIT_STATE = {
    currentUser: false,
    loading: false,
    error: '',
    message: '',
    tradespeople: '',
    userbussines:'',
};


const businessReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        // Login user
        case TRADES_PEOPLE:
            return {
                ...state,
                loading: true,
                tradespeople: action.payload
            }
        case TRADES_PEOPLE_SUCCESS:
            return {
                ...state,
                loading: false,
                tradespeople: action.payload
            }
        case TRADES_PEOPLE_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        case USER_BUSSINESS:
            return {
                ...state,
                loading: true,
                userbussines: action.payload
            }
        case USER_BUSSINESS_SUCCESS:
            return {
                ...state,
                loading: false,
                userbussines: action.payload
            }
        case USER_BUSSINESS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        default:
            return { ...state }
    }
}

export default businessReducer