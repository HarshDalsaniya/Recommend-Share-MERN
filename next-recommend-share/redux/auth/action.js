import { LOGIN_USER,
         LOGIN_USER_SUCCESS,
         LOGIN_USER_ERROR,
         REGISTER_USER,
         REGISTER_USER_SUCCESS,
         REGISTER_USER_ERROR 
} from "../action-type"
import Router from "next/router"
import {
    login
} from "../../helper/api"

export const loginUser = (user) => {
    return dispatch => {
        dispatch({type: LOGIN_USER,
                payload: user})
        login(user)
            .then((result)=>{
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

export const registerUser = (user) => {
    return dispatch => {
        dispatch({type: REGISTER_USER,
                payload: user})
        register(user)
            .then((result)=>{
                if(result.data.status==true){
                    Router.push("/")
                    dispatch({type: REGISTER_USER_SUCCESS,
                            payload: result.data})
                }else{
                    dispatch({type: REGISTER_USER_ERROR,
                            payload: result.data.message})
                }
            })
            .catch((err)=>(
                console.log(err)
            ))
    }
}

