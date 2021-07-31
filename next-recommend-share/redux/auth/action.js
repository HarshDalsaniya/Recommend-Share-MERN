import { LOGIN_USER,
         LOGIN_USER_SUCCESS,
         LOGIN_USER_ERROR,
         REGISTER_USER,
         REGISTER_USER_SUCCESS,
         REGISTER_USER_ERROR 
} from "../action-type"
import Router from "next/router"
import {currentUser} from "../../constants/defaultValues";
import {
    login,
    register
} from "../../helper/api"
import { setCurrentUser } from "../../helper/Utils";

export const loginUser = (user) => {
    return dispatch => {
        dispatch({type: LOGIN_USER,
                payload: user})
        login(user)
            .then((result)=>{
                if(result.data.status==true){
                    const item ={
                        ...currentUser,
                        id:result.data.data[0].id,
                        email:result.data.data[0].email,
                        token:result.data.data[1].token                     
                   
                    }
                    console.log(item)
                    setCurrentUser(item)
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
        console.log(user)
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

