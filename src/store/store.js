// actionTypes
const GET_ALL = 'get-all'
const GET_ONE = 'get-one'
const GET_REGION = 'get-region'
const GET_SEARCH = 'get-search'
const TEXT = 'text'
// initState
export const initialState = {
    countries : [],
    country : [],
    search : [],
    text : ''
}

// reducer
export const reducer = (state, action) => {
    switch(action.type) {
        case GET_ALL : 
            return {
                ...state,
                countries : action.payload
            }
        case GET_ONE :
            return {
                ...state,
                country : action.payload
            }
        case GET_REGION : 
            return {
                ...state,
                countries : action.payload
            }
        case GET_SEARCH :
            return {
                ...state,
                search : action.payload
            }
        case TEXT : 
            return {
                ...state,
                text : action.payload
            }
        default :
            return state
    }
}

//actionCreators
export const getAllAC = (data) =>  ({type : GET_ALL, payload : data});
export const getOneAC = (data) => ({type : GET_ONE, payload : data});
export const getRegionAC = (data) => ({type : GET_REGION, payload : data});
export const getSearchAC = (data) => ({type : GET_SEARCH, payload : data});
export const textAC = (event) => ({type : TEXT, payload : event.target.value})
