import {
    USER_LOGGED_IN,
    USER_LOGGED_OUT,
    LOADING_USER,
    USER_LOADED
} from '../actions/actionTypes'

const initialState = {
    name: null,
    email: null,
    //isLoading: false,
    //token: null,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGGED_IN:
            return {
                ...state,
                name: action.payload.name,
                email: action.payload.email,
                //token: action.payload.token,
            }
        case USER_LOGGED_OUT:
            return {
                ...state,
                name: null,
                email: null,
            }

        default:
            return state
    }
}

export default reducer