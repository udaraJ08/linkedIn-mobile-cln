import { call, takeLatest, put } from "@redux-saga/core/effects";
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { checkProfileCreatedSuccess, loginCanceled, loginSuccess, logoutSuccess } from './action'

import * as actionTypes from "./const";

const logoutByGoogleAsync = async () => {

    return await GoogleSignin.signOut();
}

const signinWithEmailPasswordAsync = async (email, password) => {

    return auth()
        .createUserWithEmailAndPassword(email, password)
        .then((res) => {
            return res;
        })
        .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
                console.log('That email address is already in use!');
            }

            if (error.code === 'auth/invalid-email') {
                console.log('That email address is invalid!');
            }

            console.error(error);
        });
}

const loginWithEmailPasswordAsync = async (email, password) => {

    return auth()
        .signInWithEmailAndPassword(email, password)
        .then((res) => {
            return res;
        })
        .catch(error => {
            console.error(error);
        });
}

const loginByGoogleAsync = async () => {
    const { idToken } = await GoogleSignin.getCurrentUser();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    return auth().signInWithCredential(googleCredential);
}

const checkUserProfile = async (email) => {

    return firestore().
        collection('profile')
        .where("email", "==", email)
        .get()
        .then(res => res.docs);
}

const checkUserAsync = async () => {
    try {
        const { idToken } = await GoogleSignin.signIn();
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);
        return auth().signInWithCredential(googleCredential);
    } catch (err) {
        console.log(err);
        return false;
    }
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
        const data = yield call(checkUserAsync);
        const userData = yield call(checkUserProfile, data.additionalUserInfo.profile.email);
        if (data && userData.length > 0) {
            yield put(checkProfileCreatedSuccess());
            yield put(loginSuccess(data, userData));
        }
        else if (data) yield put(loginSuccess(data));
    } catch (e) {
        yield put(loginCanceled());
        console.log(e);
    }
}

export function* logoutCB() {
    try {
        yield call(logoutByGoogleAsync);
        yield put(logoutSuccess());
    } catch (err) {
        console.error(err);
    }
}

export function* signInWithEmailPasswordCB(payload) {

    const { email, password } = payload;

    try {
        const data = yield call(signinWithEmailPasswordAsync, email, password);
        const userData = yield call(checkUserProfile, email);
        if (data && userData.length > 0) {
            yield put(checkProfileCreatedSuccess());
            yield put(loginSuccess(data, userData));
        }
        else if (data) yield put(loginSuccess(data));
    } catch (err) {
        console.error(err);
    }
}

export function* loginWithEmailPasswordCB(payload) {

    const { email, password } = payload;

    try {
        const data = yield call(loginWithEmailPasswordAsync, email, password);
        const userData = yield call(checkUserProfile, email);

        if (data && userData.length > 0) {
            yield put(checkProfileCreatedSuccess());
            yield put(loginSuccess(data, userData));
        }
        else if (data) yield put(loginSuccess(data));
    } catch (err) {
        console.error(err);
    }
}

function* watchBookingSagas() {
    yield takeLatest(actionTypes.LOGIN_LISTEN, loginByGoogleCB);
    yield takeLatest(actionTypes.CHECK_CUR_USER_LISTEN, checkCurUserCB);
    yield takeLatest(actionTypes.LOGOUT_LISTEN, logoutCB)
    yield takeLatest(actionTypes.SIGNIN_EMPW_LISTEN, signInWithEmailPasswordCB)
    yield takeLatest(actionTypes.LOGIN_EMPW_LISTEN, loginWithEmailPasswordCB);
}

const loginSagas = [watchBookingSagas];

export default loginSagas;