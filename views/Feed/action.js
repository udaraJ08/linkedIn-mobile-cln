import * as actionTypes from './const';

export const getAllPostListen = () => {

    return {
        type: actionTypes.GET_ALL_POSTS_LISTEN
    }
}

export const getAllPostSuccess = (data) => {

    return {
        type: actionTypes.GET_ALL_POSTS_SUCCESS,
        data
    }
}