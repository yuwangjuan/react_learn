import {createStore, applyMiddleware} from 'redux';
import reducer from './reducer';
import thunk from 'redux-thunk';//action中写函数（正常只能是js对象）；
import createSagaMiddleware from 'redux-saga';
import TodoSagas from './sagas';
// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
const store =createStore(
    reducer,
    // applyMiddleware([thunk])
    applyMiddleware(sagaMiddleware)
);
applyMiddleware.run(TodoSagas);
export  default store;