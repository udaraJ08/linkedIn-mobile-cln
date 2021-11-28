import { LOGIN_SUCCESS, LOGOUT_SUCCESS, PROFILE_CREATE_CHECK_SUCCESS, LOGIN_CANCELED, CLEAR_CREATE } from "./const";

const init = {
    user: {},
    userData: {},
    sync: true,
    logged: false,
    created: false,
    canceled: false
}

const loginReducer = (state = init, action) => {
    const { type } = action;
    switch (type) {
        case LOGIN_SUCCESS: {
            return {
                ...state,
                user: action.data,
                sync: true,
                logged: true,
                userData: action.userData
            }
        }
        case PROFILE_CREATE_CHECK_SUCCESS: {

            return {
                ...state,
                created: true
            }
        }
        case LOGOUT_SUCCESS: {
            return {
                ...state,
                logged: false
            }
        }
        case LOGIN_CANCELED: {
            return {
                ...state,
                canceled: true
            }
        }
        case CLEAR_CREATE: {
            return {
                ...state,
                created: false
            }
        }
        default: return state
    }
}

export default loginReducer;