import {
    LOGIN_USER,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_ERROR,
    REGISTER_USER,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_ERROR,
    LOGOUT_USER,
    LOGOUT_USER_SUCCESS,
    LOGOUT_USER_ERROR
} from "../action-type"
import Router from "next/router"
import { currentUser } from "../../constants/defaultValues";
import {
    login,
    register,
    logout
} from "../../helper/api"
import { setCurrentUser } from "../../helper/Utils";
import { result } from "lodash";


export const loginUser = (user) => {
    console.log("login")
    return dispatch => {
        dispatch({
            type: LOGIN_USER,
            payload: user
        })
        login(user)
            .then((result) => {
                if (result.data.status == true) {
                    const item = {
                        ...currentUser,
                        id: result.data.data[0].id,
                        name:result.data.data[0].name,
                        email: result.data.data[0].email,
                        token: result.data.data[1].token

                    }
                    setCurrentUser(item)
                    Router.push("/")
                    dispatch({
                        type: LOGIN_USER_SUCCESS,
                        payload: result.data
                    })
                } else {
                    dispatch({
                        type: LOGIN_USER_ERROR,
                        payload: [result.data.message.split("\n ")[1].replace(" should not be blank",'').split(",").includes("email")==true?"_username":"",result.data.message.split("\n ")[1].replace(" should not be blank",'').split(",").includes("password")==true?"_password":""]
                    })
                }
            })
            .catch((err) => (
                console.log(err)
            ))
    }
}

export const registerUser = (user) => {
    return dispatch => {
        dispatch({
            type: REGISTER_USER,
            payload: user
        })
        register(user)
            .then((result) => {
                if (result.data.status == true) {
                    Router.push("/")
                    dispatch({
                        type: REGISTER_USER_SUCCESS,
                        payload: result.data
                    })
                } else {
                    // console.log(result.data.message.split("\n ")[1].replace(" should not be blank",'').split(","))
                    dispatch({
                        type: REGISTER_USER_ERROR,
                        payload: result.data.message.split("\n ")[1].replace(" should not be blank",'').split(",")
                    })
                }
            })
            .catch((err) => (
                console.log(err)
            ))
    }
}
 export const logoutUser = () =>{
     const history = '/'
     return dispatch =>{
         dispatch({
             type :LOGOUT_USER,
             payload :history
         })
         logout(history)
         .then((result) => {
             if(result.data.status == true){
                localStorage.removeItem("Recommend_Share_current_user")
                Router.push("/")
                dispatch({
                    type: LOGOUT_USER_SUCCESS,
                    payload:"logout success"
                })
             }else{
                dispatch({
                    type: LOGOUT_USER_ERROR,
                    payload: result.data.message
                })
             }
         })
         .catch((err) => (
            console.log(err)
        ))
     }
 }
