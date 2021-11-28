import { call, takeLatest, put } from "@redux-saga/core/effects";
import * as actionTypes from './const'
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import { userRegisterSuccess } from "./action";
import { loginSuccess } from "../Login/action";

const createUser = async (data) => {

    const { image } = data;

    const reference = storage().ref(`/avatar/${image}`);
    return reference.putFile(image).then(async res => {
        return reference.getDownloadURL().then(async res => {
            data.image = res;
            return await firestore()
                .collection('network')
                .add({ links: [] }).then(async network => {
                    return await reference.getDownloadURL().then(async res => {
                        data.network = network._documentPath._parts[1];
                        console.log(data);
                        return await firestore()
                            .collection('profile')
                            .add(data).then(res => res.get())
                    }).catch(err => {
                        console.error(err);
                    })
                })
        }).catch(err => {
            console.error(err);
        })
    }).catch(err => {
        console.error(err);
    });;
}

//-----------------------//
//----ASYNC FINISHED----//
//---------------------//

export function* createUserCB(data) {

    const { user } = data;

    try {
        const data = yield call(createUser, user);
        if (data) {
            yield put(userRegisterSuccess());
            yield put(loginSuccess(data, [data]))
        }
    } catch (err) {
        console.error(err);
    }
}

function* watchTourSagas() {
    yield takeLatest(actionTypes.USER_REGISTER_LISTEN, createUserCB)
}

const tourSagas = [watchTourSagas];

export default tourSagas;