import { call, takeLatest, put } from "@redux-saga/core/effects";
import * as actionTypes from './const'
import firestore from '@react-native-firebase/firestore';
import { getAllPostSuccess } from "./action";

const getAllPostsAsync = async () => {

    return await firestore().collection("posts").get();
}

//-----------------------//
//----ASYNC FINISHED----//
//---------------------//

export function* watchGetAllPostsCB() {

    try {
        const data = yield call(getAllPostsAsync);
        yield put(getAllPostSuccess(data._docs));
    } catch (err) {
        console.log(err);
    }
}

function* watchFeedSagas() {
    yield takeLatest(actionTypes.GET_ALL_POSTS_LISTEN, watchGetAllPostsCB);
}

const feedSagas = [watchFeedSagas];

export default feedSagas;