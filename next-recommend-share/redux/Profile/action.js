import {
    USER_DATA, 
    USER_DATA_SUCCESS, 
    USER_DATA_ERROR,
    USER_UPDATE,
    USER_UPDATE_SUCCESS,
    USER_UPDATE_ERROR,
    USER_UPDATE_PROFILE_PHOTO,
    USER_UPDATE_PROFILE_PHOTO_SUCCESS,
    USER_UPDATE_PROFILE_PHOTO_ERROR,
} from "../action-type"
import { userData, updateProfile, updateProfilePhoto } from "../../helper/api"

export const userProfile = (userId) =>{
    return dispatch => {
        dispatch({
            type:USER_DATA,
            paload:userId
        })
        userData(userId)
            .then((result)=>{
                if (result.data.status == true) {
                    dispatch({
                        type: USER_DATA_SUCCESS,
                        payload: result.data.data
                    })
                } else {
                    dispatch({
                        type: USER_DATA_ERROR,
                        payload: result.data.message
                    })
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }
}

export const profileUpadate = (profileData) =>{
    return dispatch => {
        dispatch({
            type:USER_UPDATE,
            paload:profileData.email
        })
        updateProfile(profileData)
            .then((result)=>{
                console.log(result)
                if (result.data.status == true) {
                    dispatch({
                        type: USER_UPDATE_SUCCESS,
                        payload: result.data.data
                    })
                } else {
                    dispatch({
                        type: USER_UPDATE_ERROR,
                        payload: result.data.message
                    })
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }
}

export const profilePhotoUpdate = (profilPhoto) =>{
    return dispatch => {
        dispatch({
            type:USER_UPDATE_PROFILE_PHOTO,
            paload:profilPhoto
        })
        updateProfilePhoto(profilPhoto)
            .then((result)=>{
                console.log(result)
                if (result.data.status == true) {
                    dispatch({
                        type: USER_UPDATE_PROFILE_PHOTO_SUCCESS,
                        payload: result.data.data
                    })
                } else {
                    dispatch({
                        type: USER_UPDATE_PROFILE_PHOTO_ERROR,
                        payload: result.data.message
                    })
                }
            })
    }
}