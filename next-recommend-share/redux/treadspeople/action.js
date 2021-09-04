import {
    TRADE_OPTIONS,
    TRADE_OPTIONS_SUCCESS,
    TRADE_OPTIONS_ERROR,
    BUSINESS_SEARCH,
    BUSINESS_SEARCH_SUCCESS,
    BUSINESS_SEARCH_ERROR,
    TRADESPEOPLE_DETAILS,
    TRADESPEOPLE_DETAILS_SUCCESS,
    TRADESPEOPLE_DETAILS_ERROR,
    RECOMMENDATION,
    RECOMMENDATION_SUCCESS,
    RECOMMENDATION_ERROR,
} from '../action-type'
import { tradList, 
        businessSearch,
        tradesPeopleDetails,
        Recommendation } from "../../helper/api"
import Router from 'next/router'

export const tradOption = () => {
    return dispatch => {
        dispatch({
            type: TRADE_OPTIONS,
            payload: "Get Trade Option"
        })
        tradList()
            .then((result) => {
                if (result.data.status == true) {
                    const optionList = [];
                    result.data.data.map((value) => {
                        optionList.push({ value: value.id, title: value.name })
                    })
                    dispatch({
                        type: TRADE_OPTIONS_SUCCESS,
                        payload: optionList
                    })
                } else {
                    dispatch({
                        type: TRADE_OPTIONS_ERROR,
                        payload: result.data.message
                    })
                }
            })
            .catch((err) => (
                console.log(err)
            ))
    }

}

export const searchBusiness = (searchFilter) => {
    return dispatch => {
        dispatch({
            type: BUSINESS_SEARCH,
            payload: "Search Trade People"
        })
        businessSearch(searchFilter)
            .then((result) => {
                if (result.data.status == true) {
                    dispatch({
                        type: BUSINESS_SEARCH_SUCCESS,
                        payload: result.data.data
                    })
                } else {
                    dispatch({
                        type: BUSINESS_SEARCH_ERROR,
                        payload: result.data.message
                    })
                }
            })
            .catch((err) => (
                console.log(err)
            ))
    }

}

export const TradesPeople_Profile_Details = (slug) =>{
    return dispatch => {
        dispatch({
            type: TRADESPEOPLE_DETAILS,
            payload : slug
        })
        tradesPeopleDetails(slug)
        .then((result)=> {
            console.log(result)
            if(result.data.status == true){
                 dispatch({
                     type:  TRADESPEOPLE_DETAILS_SUCCESS,
                     payload : result.data.data[0]
                 })
            }else{
                dispatch({
                    type:TRADE_OPTIONS_ERROR,
                    payload : result.data.message
                })
            }
        })
        .catch((err) =>(
            console.log(err)
        ))
    }

}

export const Recommendation_Data =(tradepersonname)=>{
    return dispatch => {
        dispatch({
            type:RECOMMENDATION,
            payload:tradepersonname
        })
        Recommendation(tradepersonname)                
        .then((result)=>{
            console.log("name--->",tradepersonname)
            console.log("result---->",result)
            if(result.data.status == true){
                dispatch({
                    type:RECOMMENDATION_SUCCESS,
                    payload:result.data.data[0]
                })
            }else{
                dispatch({
                    type:RECOMMENDATION_ERROR,
                    payload:result.data.data[0]
                })
            }
        })
        .catch((err)=> (
            console.log(err)
        ))
    }
}