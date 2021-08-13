import {
    TRADES_PEOPLE,
    TRADES_PEOPLE_SUCCESS,
    TRADES_PEOPLE_ERROR,
    USER_BUSSINESS,
    USER_BUSSINESS_SUCCESS,
    USER_BUSSINESS_ERROR,
    USER_CONTACT_US,
    USER_CONTACT_US_SUCCESS,
    USER_CONTACT_US_ERROR,
} from "../action-type"

import Router from "next/router"
import { currentUser } from "../../constants/defaultValues";
import {
    tradesPeople,
    userBusiness,
    contactUs
} from "../../helper/api"

import { setCurrentUser } from "../../helper/Utils";


export const tradesPeopleRegister = (tradespeople) => {
    return dispatch => {
        dispatch({
            type: TRADES_PEOPLE,
            payload: tradespeople
        })
        tradesPeople(tradespeople)
        
            .then((result) => {
                console.log(result)
                if (result.data.status == true) {
                    Router.push('/')
                    dispatch({
                        type: TRADES_PEOPLE_SUCCESS,
                        payload: result.data
                    })
                } else {
                    dispatch({
                        type: TRADES_PEOPLE_ERROR,
                        payload: result.data.message
                    })
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }

}

export const userTradeBussines = (id)=>{
    
    return dispatch => {
        dispatch({
            type:USER_BUSSINESS,
            payload : id
        })
        userBusiness(id)

        .then((result)=> {
        //    console.log(result.data)
            if(result.data.status == true){
                dispatch({
                    type : USER_BUSSINESS_SUCCESS,
                    payload : result.data.data
                })
            }else{
                dispatch({
                    type:USER_BUSSINESS_ERROR,
                    payload:result.data.message
                })
            }
        })
        .catch((err) => {
            console.log(err)
        })
    }
}

export const contactUsData  = (emaildata)=>{
    return dispatch => {
        dispatch({
            type:USER_CONTACT_US,
            payload:emaildata
        })
        contactUs(emaildata)
        .then((result)=> {
            console.log(result)
            if(result.data.status == true){
                dispatch({
                    type:USER_CONTACT_US_SUCCESS,
                    payload:result.data.data
                })
            }else{
                dispatch({
                    type:USER_CONTACT_US_ERROR,
                    payload:result.data.message
                })
            }
        })
        .catch((err) => {
            console.log(err)
        })
    }
}