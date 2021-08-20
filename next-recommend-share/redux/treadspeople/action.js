import {
    TRADE_OPTIONS,
    TRADE_OPTIONS_SUCCESS,
    TRADE_OPTIONS_ERROR,
    BUSINESS_SEARCH,
    BUSINESS_SEARCH_SUCCESS,
    BUSINESS_SEARCH_ERROR
} from '../action-type'
import { tradList, businessSearch } from "../../helper/api"
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