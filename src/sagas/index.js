import { all } from 'redux-saga/effects';

import popups from './popups';
import app from './app';

/* eslint-disable */
/// #if FAKE
import fakeSagas from '../../fakes/sagas';
/// #endif
/* eslint-enable */

import {
  runMessagesService
} from './log';

import suggests from './suggests';

runMessagesService();

export default function* rootSaga() {
  yield all([
    popups(),
    app(),

    suggests(),

    /* eslint-disable */
    /// #if FAKE
    fakeSagas()
    /// #endif
    /* eslint-enable */
  ]);
}
