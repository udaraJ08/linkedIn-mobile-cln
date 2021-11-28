import { CHECK_CUR_USER_LISTEN, LOGIN_LISTEN, LOGIN_SUCCESS, LOGOUT_LISTEN, PROFILE_CREATE_CHECK_SUCCESS, LOGOUT_SUCCESS, SIGNIN_EMPW_LISTEN, SIGNIN_EMPW_SUCCESS, LOGIN_EMPW_LISTEN, LOGIN_EMPW_SUCCESS, LOGIN_CANCELED, CLEAR_CREATE } from "./const"

export const loginListen = (data) => {

    return {
        type: LOGIN_LISTEN,
    }
}

export const loginSuccess = (data, userData) => {

    return {
        type: LOGIN_SUCCESS,
        data,
        userData
    }
}

export const loginCanceled = () => {
    return {
        type: LOGIN_CANCELED
    }
}

export const checkUserListen = () => {
    return {
        type: CHECK_CUR_USER_LISTEN,
    }
}

export const checkProfileCreatedSuccess = () => {
    return {
        type: PROFILE_CREATE_CHECK_SUCCESS
    }
}

export const logoutListen = () => {
    return {
        type: LOGOUT_LISTEN
    }
}

export const logoutSuccess = () => {
    return {
        type: LOGOUT_SUCCESS
    }
}

export const signInWithEmailPasswordListen = (email, password) => {
    return {
        type: SIGNIN_EMPW_LISTEN,
        email, password
    }
}

export const signInWithEmailPasswordSuccess = (data) => {

    return {
        type: SIGNIN_EMPW_SUCCESS,
        data
    }
}

export const loginWithEmailPasswordListen = (email, password) => {

    return {
        type: LOGIN_EMPW_LISTEN,
        email, password
    }
}

export const loginWithEmailPasswordSuccess = (data) => {

    return {
        type: LOGIN_EMPW_SUCCESS,
        data
    }
}

export const clearCreateListen = () => {

    return {
        type: CLEAR_CREATE
    }
}