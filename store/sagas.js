import { all, fork } from "redux-saga/effects";
import loginSagas from "../views/Login/saga";

export default function* rootSagas() {
    yield all(loginSagas.map((s) => fork(s)))
}