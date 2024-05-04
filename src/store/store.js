// actionTypes
const GET_ALL = 'get-all'


// initState
export const initialState = {
    countries : []
}

// reducer
export const reducer = (state, action) => {
    switch(action.type) {
        case GET_ALL : 
            return {
                ...state,
                countries : action.payload
            }
        default :
            return state
    }
}

//actionCreators
export const getAllAC = (data) => {
    return {type : GET_ALL, payload : data}
}
