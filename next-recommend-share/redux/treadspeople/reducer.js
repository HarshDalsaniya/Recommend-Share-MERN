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
} from '../action-type'

const INIT_STATE = {
    tradeOptions:[],
    tradespeopleData:[],
    loading: false,
    error: '',
};

const tradePeople = (state = INIT_STATE, action) => {
    switch (action.type) {
        case TRADE_OPTIONS:
            return {
                ...state,
                loading: true,
                error: ''
            }
        case TRADE_OPTIONS_SUCCESS:
            return {
                ...state,
                tradeOptions:action.payload,
                loading: false,
                error: ''
            }
        case TRADE_OPTIONS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload.message
            }
// bussiness search 
        case BUSINESS_SEARCH:
            return {
                ...state,
                loading: true,
                error: ''
            }
        case BUSINESS_SEARCH_SUCCESS:
            return {
                ...state,
                searchResult:action.payload,
                loading: false,
                error: ''
            }
        case BUSINESS_SEARCH_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload.message
            }

// tradespeople details 
        case TRADESPEOPLE_DETAILS:
            return {
                ...state,
                loading: true,
                error: ''
            }
        case TRADESPEOPLE_DETAILS_SUCCESS:
            return {
                ...state,
                tradespeopleData:action.payload,
                loading: false,
                error: ''
            }
        case TRADESPEOPLE_DETAILS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload.message
            }

        default:
            return { ...state }
    }
}

export default tradePeople