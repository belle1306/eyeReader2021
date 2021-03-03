import * as types from '../redux/types'

const initialState = {
    authors: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case types.SET_AUTHORS:
            return {
                ...state,
                authors: action.payload
            }
        default: 
            return state
    }
}