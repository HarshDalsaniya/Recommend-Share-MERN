import{
    TRADES_PEOPLE,
    TRADES_PEOPLE_SUCCESS,
    TRADES_PEOPLE_ERROR,
}from "../action-type"


const INIT_STATE = {
    currentUser: false,
    loading: false,
    error: '',
    message: '',
    tradespeople:''
};


const businessReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        // Login user
        case TRADES_PEOPLE : 
            return{
                ...state,
                loading : true,
                tradespeople :action.payload
            }
        case TRADES_PEOPLE_SUCCESS :
            return{
                ...state,
                loading : false,
                tradespeople : action.payload
            }
        case TRADES_PEOPLE_ERROR : 
            return{
                ...state,
                loading:false,
                error:action.payload
            }

        default:
            return { ...state }
    }
}

export default businessReducer