import { LOGIN_SUCCESS } from "./const";

const init = {
    user: {},
    sync: true,
    logged: false
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
        default: return state
    }
}

export default loginReducer;