import { 
    USER_DATA, 
    USER_DATA_SUCCESS, 
    USER_DATA_ERROR,
} from "../action-type"

const INIT_STATE ={
    loading: false,
    error: '',
    message: ''
}

const profileReducer = ( state = INIT_STATE, action) =>{
    switch (action.type) {
        case USER_DATA:
            return {
                ...state,
                loading:true,
                userData:action.payload
            }
        case USER_DATA_SUCCESS:
            return {
                ...state,
                loading:false,
                userData:action.payload
            }
        case USER_DATA_ERROR:
            return {
                ...state,
                loading:false,
                userData:action.payload
            }
        default:
            return {
                ...state
            }
    }
}

export default profileReducer