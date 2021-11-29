import { call, takeLatest, put } from "@redux-saga/core/effects";
import * as actionTypes from './const'
import firestore from '@react-native-firebase/firestore';

const getAllPostsAsync = async () => {

    return await firestore().collection("posts").get();
}

//-----------------------//
//----ASYNC FINISHED----//
//---------------------//

export function* watchGetAllPostsCB() {

    try {
        const data = yield call(getAllPostsAsync);
        console.log('====================================');
        console.log(data._docs);
        console.log('====================================');
    } catch (err) {
        console.log(err);
    }
}

function* watchFeedSagas() {
    yield takeLatest(actionTypes.GET_ALL_POSTS_LISTEN, watchGetAllPostsCB);
}

const feedSagas = [watchFeedSagas];

export default feedSagas;