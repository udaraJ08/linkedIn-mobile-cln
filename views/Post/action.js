import * as actionTypes from "./const"

export const postAddListen = (data) => {

    return {
        type: actionTypes.POST_ADD_LISTEN,
        data
    }
}

export const postAddSuccess = (data) => {

    return {
        type: actionTypes.POST_ADD_SUCCESS
    }
}

export const postGetListen = () => {

    return {
        type: actionTypes.POST_GET_LISTEN
    }
}

export const postGetSuccess = (data) => {

    return {
        type: actionTypes.POST_GET_SUCCESS
    }
}

export const likeListen = (data) => {

    return {
        type: actionTypes.LIKE_LISTEN
    }
}

export const likeSuccess = (data) => {

    return {

        type: actionTypes.LIKE_SUCCESS
    }
}