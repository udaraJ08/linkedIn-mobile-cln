import { CHECK_CUR_USER_LISTEN, LOGIN_LISTEN, LOGIN_SUCCESS } from "./const"

export const loginListen = (data) => {

    return {
        type: LOGIN_LISTEN,
    }
}

export const loginSuccess = (data) => {

    return {
        type: LOGIN_SUCCESS,
        data
    }
}

export const checkUserListen = () => {
    return {
        type: CHECK_CUR_USER_LISTEN
    }
}