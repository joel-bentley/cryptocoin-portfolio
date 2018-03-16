import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';

import rootReducer from '../reducers';
import rootSaga from '../sagas';

import loggingMiddleware from './loggingMiddleware';
const sagaMiddleware = createSagaMiddleware();

const persistConfig = { key: 'root', storage, stateReconciler: hardSet };

const persistedReducer = persistReducer(persistConfig, rootReducer);

function configureStore() {
  const store = createStore(
    persistedReducer,
    applyMiddleware(sagaMiddleware, loggingMiddleware)
  );
  sagaMiddleware.run(rootSaga);
  let persistor = persistStore(store);

  return { store, persistor };
}

export default configureStore;
