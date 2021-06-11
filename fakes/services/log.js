import {
  delay
} from '../../src/utils';

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
  error: async ({ messages } = {}) => {
    console.log('start run LogApi error', messages);

    await delay({ timeout: 100 });

    console.log('end run LogApi error');

    return {
      isSuccess: true,
      payload: {
        data: ''
      }
    };
  },

  /** Журналирование сообщения
     *
     * @param {string} message текст сообщения
     *
     * @returns {object} результат
     *
     */
  info: async ({ messages } = {}) => {
    console.log('start run LogApi info', messages);

    await delay({ timeout: 100 });

    console.log('end run LogApi info');

    return {
      isSuccess: true,
      payload: {
        data: ''
      }
    };
  },
};
