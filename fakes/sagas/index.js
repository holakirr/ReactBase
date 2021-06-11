import {
  takeEvery,
  delay
} from 'redux-saga/effects';

import {
  AppConsts
} from '../../src/consts';

export function* handleStart() {
  try {
    yield delay(1000);
  } catch (e) {
    console.log(e);
  }
}

export function* handleInit() {
  try {
    yield delay(100);
  } catch (e) {
    console.log(e);
  }
}

export default function* () {
  yield takeEvery(AppConsts.InitApp, handleInit);
}
