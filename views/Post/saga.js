import { call, takeLatest, put } from "@redux-saga/core/effects";
import * as actionTypes from "./const";
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import { ASSET } from "./Post";
import { getAllPostListen } from "../Feed/action";

const postAddAsync = async (data, postType) => {

    const { asset } = data;
    const reference = storage().ref(`/posts/${asset}`);
    if (postType === ASSET) {
        return reference.putFile(asset).then(async res => {
            return reference.getDownloadURL().then(async res => {
                data.asset = res;
                return await firestore()
                    .collection('posts')
                    .add(data).then(res => res.get())
            }).catch(err => {
                console.error(err);
            })
        }).catch(err => {
            console.error(err);
        })
    } else {
        data.asset = "";
        return await firestore()
            .collection('posts')
            .add(data).then(res => res.get()).catch(err => {
                console.error(err);
            })
    }
}

//-----------------------//
//----ASYNC FINISHED----//
//---------------------//

export function* watchPostAddCB(payload) {

    const { data, postType } = payload;

    try {
        const addData = yield call(postAddAsync, data, postType);
        yield put(getAllPostListen());
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
    yield takeLatest(actionTypes.LIKE_LISTEN, watchLikteListen);
}

const postSagas = [watchPostSagas];

export default postSagas;