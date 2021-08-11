import { 
    USER_DATA, 
    USER_DATA_SUCCESS, 
    USER_DATA_ERROR,
    USER_UPDATE,
    USER_UPDATE_SUCCESS,
    USER_UPDATE_ERROR,
    USER_UPDATE_PROFILE_PHOTO,
    USER_UPDATE_PROFILE_PHOTO_SUCCESS,
    USER_UPDATE_PROFILE_PHOTO_ERROR
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
        case USER_UPDATE:
            return {
                ...state,
                loading:true,
                userId:action.payload
            }
        case USER_UPDATE_SUCCESS:
            return {
                ...state,
                loading:false,
                profileUpdate:action.payload
            }
        case USER_UPDATE_ERROR:
            return {
                ...state,
                loading:false,
                profileUpdateError:action.payload
            }
        case USER_UPDATE_PROFILE_PHOTO:
            return {
                ...state,
                loading:true,
                profilePhoto:action.payload
            }
        case USER_UPDATE_PROFILE_PHOTO_SUCCESS:
            return {
                ...state,
                loading:false,
                profilePhotoUpdate:action.payload
            }
        case USER_UPDATE_PROFILE_PHOTO_ERROR:
            return {
                ...state,
                loading:false,
                profilePhotoUpdateError:action.payload
            }            
        default:
            return {
                ...state
            }
    }
}

export default profileReducer