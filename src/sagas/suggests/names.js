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

function* handleOrganizationSuggest() {
  const lazily = createLazily();
  while (true) {
    const action = yield take(actions.organization.loading.start.toString());
    yield fork(
      lazily,
      runRequestSuggest,
      action,
      actions.organization,
      Api.dadata.suggestParty
    );
  }
}

function* handleFullNameSuggest() {
  const lazily = createLazily();
  while (true) {
    const action = yield take(actions.fullname.loading.start.toString());
    yield fork(
      lazily,
      runRequestSuggest,
      action,
      actions.fullname,
      Api.dadata.suggestFullName
    );
  }
}

export default function* rootSaga() {
  yield fork(handleOrganizationSuggest);
  yield fork(handleFullNameSuggest);
}
