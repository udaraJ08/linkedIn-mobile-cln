import { call, takeLatest, put } from "@redux-saga/core/effects";
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import { loginSuccess } from './action'

import * as actionTypes from "./const";

const loginByGoogleAsync = async () => {
    const { idToken } = await GoogleSignin.getCurrentUser();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    return auth().signInWithCredential(googleCredential);
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
        console.log(data);
        yield put(loginSuccess(data));
    } catch (e) {
        console.error(e.message);
    }
}

export function* checkCurUserCB() {
    try {
        const data = yield call(checkUserAsync);
        yield put(loginSuccess(data));
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