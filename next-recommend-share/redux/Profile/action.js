import {
    USER_DATA, 
    USER_DATA_SUCCESS, 
    USER_DATA_ERROR
} from "../action-type"
import { userData } from "../../helper/api"

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
    }
}