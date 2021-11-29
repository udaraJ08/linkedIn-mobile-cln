import { call, takeLatest, put } from "@redux-saga/core/effects";
import * as actionTypes from "./const";
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';

const postAddAsync = async (data) => {
    console.log(data);
}

//-----------------------//
//----ASYNC FINISHED----//
//---------------------//

export function* watchPostAddCB(payload) {

    const { data } = payload;

    try {
        const data = yield call(postAddAsync, data);
        // console.log(data);
    } catch (err) {
        console.log(err);
    }
}

export function* watchPostGetCB(payload) {
}

export function* watchLikteListen(payload) {

}

function* watchPostSagas() {

    yield takeLatest(actionTypes.POST_ADD_LISTEN, watchPostAddCB);
    yield takeLatest(actionTypes.POST_GET_LISTEN, watchPostGetCB);
    yield takeLatest(actionTypes.POST_GET_LISTEN, watchLikteListen);
}

const postSagas = [watchPostSagas];

export default postSagas;