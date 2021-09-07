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
import Router from "next/router"
import { currentUser } from "../../constants/defaultValues";
import {
    login,
    register,
    logout,
    forgotPassword,
    resetPassword,
    changePassword,
    VerifyKey,
    UserData
} from "../../helper/api"
import { setCurrentUser } from "../../helper/Utils";


export const loginUser = (user) => {
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
                        email: result.data.data[0].email,
                        name: result.data.data[0].name,
                        token: result.data.data[1].token,
                        profile_Picture:result.data.data[0].image
                    }

                    setCurrentUser(item)
                    Router.push("/")
                    dispatch({
                        type: LOGIN_USER_SUCCESS,
                        payload: result.data
                    })
                } else {
                    // console.log(result)
                    // const error = new Array();
                    // result.data.message[0].includes("Invalid request: ")?
                    //     error.blank=result.data.message[0].split("\n ")[1].replace(" should not be blank",'').split(",")
                    // :null
                    // error.notValid=result.data.message[1]
                    // console.log(error)
                    dispatch({
                        type: LOGIN_USER_ERROR,
                        payload: result.data.message
                    })
                }
            })
            .catch((err) => (
                console.log(err)
            ))
    }
}

export const registerUser = (user, path) => {
    return dispatch => {
        dispatch({
            type: REGISTER_USER,
            payload: user
        })
        register(user, path)
            .then((result) => {
                if (result.data.status == true) {
                    Router.push("/")
                    dispatch({
                        type: REGISTER_USER_SUCCESS,
                        payload: result.data
                    })
                } else {
                    // const error = new Array();
                    // result.data.message[0].includes("Invalid request: ")?
                    //     error.blank=result.data.message[0].split("\n ")[1].replace(" should not be blank",'').split(",")
                    // :null
                    // error.notValid=result.data.message[1]
                    console.log(result.data.message)
                    dispatch({
                        type: REGISTER_USER_ERROR,
                        payload: result.data.message
                    })
                }
            })
            .catch((err) => (
                console.log(err)
            ))
    }
}

export const forgotPasswordUser = (email) => {
    return dispatch => {
        dispatch({
            type: FORGOT_PASSWORD,
            payload: email
        })
        forgotPassword(email)     
            .then((result) => {
                console.log(result)
                if (result.data.status == true) {
                    dispatch({
                        type: FORGOT_PASSWORD_SUCCESS,
                        payload: result.data.message
                    })
                } else {
                    dispatch({
                        type: FORGOT_PASSWORD_ERROR,
                        payload: result.data.message
                    })
                }
            })
            .catch((err) => (
                console.log(err)
            ))
    } 
}
export const resetPasswordUser = (user) => {
    return dispatch => {
        dispatch({
            type: RESET_PASSWORD,
            payload: user
        })
        resetPassword(user)        
            .then((result) => {                
                if (result.data.status == true) {                   
                    Router.push("/login")
                    dispatch({
                        type: RESET_PASSWORD_SUCCESS,
                        payload: result.data.message
                    })
                } else {
                    dispatch({
                        type: RESET_PASSWORD_ERROR,
                        payload: result.data.message
                    })
                }
            })
            .catch((err) => (
                console.log(err)
            ))
    }
}
export const changeUserPassword = (user) => {
    return dispatch => {
        dispatch({
            type : CHANGE_PASSWORD,
            payload: user
        })
        changePassword(user)       
            .then((result) => {
                console.log(user)
                console.log(result)
                if(result.data.status == true){
                    dispatch({
                        type : CHANGE_PASSWORD_SUCCESS,
                        payload : result.data.data
                    })
                }else{
                    console.log(result.data.message)
                    dispatch({
                        type : CHANGE_PASSWORD_ERROR,
                        payload : result.data.message
                    })
                }
            })
            .catch((err)=> {
                console.log(err)
            })
    }
}
export const verifyUniqueKey =() =>{
    return dispatch => {
        VerifyKey()
        .then((result) => {          
            if(result.data.status == true){
                dispatch({
                    type: UNIQKEY_VERIFY,
                    payload : result.data.status
                })
            }else{
                console.log("uniqueKey error")
            }
        })
        .catch((err) => {
            console.log(err)
        })
    }
}

export const logoutUser = () => {
    const history = '/'
    return dispatch => {
        dispatch({
            type: LOGOUT_USER,
            payload: history
        })
        logout(history)
            .then((result) => {
                if (result.data.status == true) {
                    localStorage.removeItem("Recommend_Share_current_user")
                    Router.push("/")
                    dispatch({
                        type: LOGOUT_USER_SUCCESS,
                        payload: "logout success"
                    })
                } else {
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

export const UserAction =(id)=>{
    return dispatch => {
        dispatch({
            type : USER_DETAILS,
            payload : id
        })
        UserData(id)
        // console.log(id)
        .then((result) => {
            console.log(result)
            if(result.data.status == true){
                dispatch ({
                    type : USER_DETAILS_SUCCESS,
                    payload : result.data.data[0]
                })  
            }else{
                dispatch({
                    type : USER_DETAILS_ERROR,
                    payload : result.data.message
                })
            }
        })
        .catch((err) => {
            console.log(err)
        })
    }
}