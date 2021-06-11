import {
  takeEvery
} from 'redux-saga/effects';

import {
  AppConsts,
} from '../consts';

export function* handleInit() {
  try {
    yield console.log('init!!!');
  } catch (e) {
    console.log(e);
  }
}

export default function* () {
  yield takeEvery(AppConsts.InitApp, handleInit);
}
