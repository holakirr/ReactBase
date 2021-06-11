import { all } from 'redux-saga/effects';

import names from './names';
import address from './address';

export default function* rootSaga() {
  yield all([
    names(),
    address()
  ]);
}
