import { LOGIN_USER,
         LOGIN_USER_SUCCESS,
         LOGIN_USER_ERROR 
} from "../action-type"
import Router from "next/router"
import {
    login
} from "../../helper/api"

export const loginUserSucessfull = (user, history) => (
    {
    type: LOGIN_USER,
    payload: { user, history },
})

export const loginUser = (user) => {
    return dispatch => {
        login(user)
            .then((result)=>{
                console.log(result)
                if(result.data.status==true){
                    Router.push("/")
                    dispatch({type: LOGIN_USER_SUCCESS,
                            payload: result.data})
                }else{
                    dispatch({type: LOGIN_USER_ERROR,
                            payload: result.data.message})
                }
            })
            .catch((err)=>(
                console.log(err)
            ))
    }
}

export const loginUserError = (message) => ({
    type: LOGIN_USER_ERROR,
    payload: message
})