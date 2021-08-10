import {
    TRADES_PEOPLE,
    TRADES_PEOPLE_SUCCESS,
    TRADES_PEOPLE_ERROR,
} from "../action-type"

import Router from "next/router"
import { currentUser } from "../../constants/defaultValues";
import {
    tradesPeople
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