import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import {persistStore} from 'redux-persist';
import thunk from 'redux-thunk'; // not needed anymore

import rootSaga from './root-saga';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './root-reducer';

// const middlewares=[thunk]; - not needed anymore/ replaced by sagas.

const sagaMiddleware= createSagaMiddleware();

const middlewares=[sagaMiddleware];

if(process.env.NODE_ENV ===  'development'){
    middlewares.push(logger);
}

export const store=createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export default {store, persistor};