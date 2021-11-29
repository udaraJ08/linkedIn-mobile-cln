import { call, takeLatest, put } from "@redux-saga/core/effects";
import * as actionTypes from "./const"

const postAddAsync = async (payload) => {

}

//-----------------------//
//----ASYNC FINISHED----//
//---------------------//

export function* watchPostAddCB(payload) {

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