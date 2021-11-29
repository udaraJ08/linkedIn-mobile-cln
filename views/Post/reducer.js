import * as actionTypes from './action';

const init = {
    userID: "",
    createdAt: "",
    description: "",
    asset: "",
    likeCount: "",

    posts: []
};

const postReducer = (state = init, action) => {

    const { type } = action;

    switch (type) {
        case actionTypes.postAddSuccess: {
            return {
                ...state,
            }
        }
        case actionTypes.postGetSuccess: {

        }
        case actionTypes.likeSuccess: { }
        default: {
            return state;
        }
    }
};

export default postReducer;