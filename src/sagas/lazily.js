import {
  fork, delay
} from 'redux-saga/effects';

/** Создает сагу/задачу с отменой если она уже запущена
 *
 * @param {numner} msec задержка запуска задачи
 *
 */
export function createLazily(msec = 400) {
  let ongoing;
  return function* a(task, ...args) {
    if (ongoing && ongoing.isRunning()) {
      ongoing.cancel();
    }

    ongoing = yield fork(function* b() {
      yield delay(msec);
      yield fork(task, ...args);
    });
  };
}
