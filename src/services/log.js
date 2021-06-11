import {
  post
} from './rest';

const action = '/api/log';

/** Сервис журналирования */
export const LogApi = {
  /** Журналирование ошибки
     *
     * @param {string} message текст ошибки
     * @param {string} stack стек выполнения
     *
     * @returns {object} результат
     *
     */
  error: ({ messages } = {}) => post({
    action: `${action}/error`,
    options: {
      body: messages
    }
  }),

  /** Журналирование сообщения
     *
     * @param {string} message текст сообщения
     *
     * @returns {object} результат
     *
     */
  info: ({ messages } = {}) => post({
    action: `${action}/info`,
    options: {
      body: messages
    }
  })
};
