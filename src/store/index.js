/* eslint-disable */
/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';

import reducer from '../reducers';
import rootSaga from '../sagas';
import {
  sendMessageToServer
} from '../sagas/log';

import {
  AppConsts,
} from '../consts';

import {
  history
} from '../routing';

let sagaMiddleware;

/// #if !DEBUG
sagaMiddleware = createSagaMiddleware();
/// #endif

/// #if DEBUG
sagaMiddleware = createSagaMiddleware({
  sagaMonitor: window.__SAGA_MONITOR_EXTENSION__
});
/// #endif

/** Делаем стор глобальным, чтобы можно было обратится к нему не из саги
 *
 * Возможно, что решение не верное.
 */
let store = null;

export const getStore = () => store;

export default (preloadedState) => {
  /// #if DEBUG
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      name: 'BC-2.0'
    }) :
    compose;
  store = createStore(
    reducer(history),
    preloadedState,
    composeEnhancers(applyMiddleware(routerMiddleware(history), sagaMiddleware))
  );
  /// #endif

  /// #if !DEBUG
  if (typeof window !== 'undefined' && window.__REACT_DEVTOOLS_GLOBAL_HOOK__) {
    window.__REACT_DEVTOOLS_GLOBAL_HOOK__.inject = () => { };
  }

  store = createStore(
    reducer(history),
    preloadedState,
    applyMiddleware(routerMiddleware(history), sagaMiddleware)
  );
  /// #endif

  const rootTask = sagaMiddleware.run(rootSaga);
  rootTask.toPromise().catch((err) => {
    console.log('Error in Sagas', err);
    sendMessageToServer({
      message: `${err.message}
        ${err.fileName}
        ${err.lineNumber}
        ${err.columnNumber}`,
      stack: err.stack
    });
    // Здесь вставить код для отображения ошибки пользователю
  });

  /// #if DEBUG
  window.store = store;
  /// #endif

  // выкидываем событие, что стор приложения готово к использованию
  store.dispatch({ type: AppConsts.InitApp });

  return store;
};
