import createSagaMiddleware from "@redux-saga/core"
import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducers";
import rootSagas from "./sagas";

const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        rootReducer,
        applyMiddleware(sagaMiddleware)
    )
    sagaMiddleware.run(rootSagas);
    return store;
}

export default configureStore;