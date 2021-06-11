import {
  fork, take
} from 'redux-saga/effects';

import {
  actions
} from '../../symbiotes/suggests';

import {
  createLazily
} from '../lazily';

import {
  runRequestSuggest
} from './run';

/* eslint-disable */
import Api from '../../api';
/* eslint-enable */

function* handleaddressSuggest() {
  const lazily = createLazily();
  while (true) {
    const action = yield take(actions.address.loading.start.toString());
    yield fork(
      lazily,
      runRequestSuggest,
      action,
      actions.address,
      Api.dadata.suggestAddress
    );
  }
}

export default function* rootSaga() {
  yield fork(handleaddressSuggest);
}
