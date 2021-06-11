import {
  call, put
} from 'redux-saga/effects';

export function* runRequestSuggest(
  action = {},
  symbiote,
  api,
  callback,
  onSuccess,
  onFail
) {
  try {
    yield put(symbiote.loading.pending());

    const { id = '', term = '' } = action.payload || {};

    if (!term) {
      yield put(symbiote.loading.success(
        { items: [] }
      ));
      return;
    }

    const {
      isSuccess = false,
      payload = {},
      errorMessage
    } = yield call(api, { id, term });

    const { suggestions = [], list = [] } = (payload || {}).data || {};

    if (isSuccess) {
      yield put(symbiote.loading.success({
        items: suggestions.length ?
          suggestions :
          list
      }));

      if (onSuccess) {
        yield call(onSuccess);
      }
    } else {
      yield put(symbiote.loading.fail({ errorMessage }));
      console.log(errorMessage);
      if (onFail) {
        yield call(onFail);
      }
    }

    if (callback) {
      yield call(callback);
    }
  } catch (e) {
    yield put(symbiote.loading.fail({ errorMessage: e.message }));
    console.log(e);
  }
}
