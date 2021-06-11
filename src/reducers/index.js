import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as formReducer } from 'redux-form';

import { reducer as popups } from '../symbiotes/popups';
import { reducer as app } from '../symbiotes';

import { reducer as suggests } from '../symbiotes/suggests';

export default history => combineReducers({
  router: connectRouter(history),
  /** Попапы */
  popups,

  suggests,

  /** Данные приложения */
  app,

  form: formReducer,
});
