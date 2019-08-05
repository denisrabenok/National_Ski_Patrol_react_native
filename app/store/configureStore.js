import { autoRehydrate, persistStore } from "redux-persist-immutable";
import { combineReducers } from "redux-immutable";
import createActionBuffer from "redux-action-buffer";
import { REHYDRATE } from "redux-persist/constants";
import Immutable from "immutable";
import { applyMiddleware, compose, createStore } from "redux";
import { AsyncStorage } from "react-native";
import loginReducer from "../reducers/loginReducer";
import rootReducer from "../reducers/rootReducer";
import createSagaMiddleware from "redux-saga";
import * as loginSaga from "../saga/login-saga";


const combinedReducers = combineReducers({
    root: rootReducer,
    login: loginReducer,
});

const initialState = new Immutable.Map({
    root: Immutable.Map({
        progress: undefined,
        lang: ''
    }),
    login: Immutable.Map({
        isLoggedIn: false,
        idUser: '',
        loginError: {},
        email: '',
        password: '',
    }),
});

export default function configureStore() {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        combinedReducers,
        initialState,
        compose(applyMiddleware(sagaMiddleware, createActionBuffer(REHYDRATE)), autoRehydrate({ log: true })));

    persistStore(
        store,
        {
            storage: AsyncStorage,
            blacklist: ['root'],
        }
    );
    return {
        ...store, runSaga: [
            sagaMiddleware.run(loginSaga.loginFlow),
        ]
    };
}