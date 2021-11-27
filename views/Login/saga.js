import { call, takeLatest, put } from "@redux-saga/core/effects";
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { checkProfileCreatedSuccess, loginSuccess } from './action'

import * as actionTypes from "./const";

const loginByGoogleAsync = async () => {
    const { idToken } = await GoogleSignin.getCurrentUser();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    return auth().signInWithCredential(googleCredential);
}

const checkUserProfile = async () => {

    return firestore().
        collection('profile')
        .where("email", "==", "udaraj08@gmail.com")
        .get()
        .then(res => res.docs);
}

const checkUserAsync = async () => {
    const { idToken } = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    return auth().signInWithCredential(googleCredential);
}
//-----------------------//
//----ASYNC FINISHED----//
//---------------------//

///Watchers start
export function* loginByGoogleCB() {
    try {
        const data = yield call(loginByGoogleAsync);
        yield put(loginSuccess(data));
    } catch (e) {
        console.error(e.message);
    }
}

export function* checkCurUserCB() {
    try {
        const userData = yield call(checkUserProfile);
        const data = yield call(checkUserAsync);
        if (data && userData.length > 0) {
            yield put(checkProfileCreatedSuccess());
            yield put(loginSuccess(data));
        }
        else if (data) yield put(loginSuccess(data));
    } catch (e) {
        console.error(e.message);
    }
}

function* watchBookingSagas() {
    yield takeLatest(actionTypes.LOGIN_LISTEN, loginByGoogleCB);
    yield takeLatest(actionTypes.CHECK_CUR_USER_LISTEN, checkCurUserCB);
}

const loginSagas = [watchBookingSagas];

export default loginSagas;