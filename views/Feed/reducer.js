import * as actionTypes from './const';

const init = {
    posts: [],
    loaded: false
}

const feedReducer = (state = init, action) => {

    const { type } = action;

    switch (type) {
        case actionTypes.GET_ALL_POSTS_SUCCESS: {

            return {
                ...state,
                posts: action.data,
                loaded: true
            }
        }
        default: return state;
    }
}

export default feedReducer;