import { LOGIN_SUCCESS, PROFILE_CREATE_CHECK_SUCCESS } from "./const";

const init = {
    user: {},
    sync: true,
    logged: false,
    created: false
}

const loginReducer = (state = init, action) => {
    const { type } = action;
    switch (type) {
        case LOGIN_SUCCESS: {
            return {
                ...state,
                user: action.data,
                sync: true,
                logged: true
            }
        }
        case PROFILE_CREATE_CHECK_SUCCESS: {

            return {
                ...state,
                created: true
            }
        }
        default: return state
    }
}

export default loginReducer;