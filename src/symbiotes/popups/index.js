import { createSymbiote } from 'redux-symbiote';

/** Первоначальное состояние хранилища попапов */
export const initState = {
  /** список видимых попапов */
  opened: []
};

/** Симбиоты попапов */
export const { actions, reducer } = createSymbiote(initState, {
  popups: {
    /** Открыть */
    open: {
      start: state => ({ ...state }),
      pending: state => ({ ...state }),
      /**
       * Успешное открытие
       *
       * @param {string} name имя попапа
       * @param {object} data данные попапа
       */
      success: (state, { name, data } = {}) => ({
        ...state,
        opened: [
          ...(state.opened || []),
          ...((state.opened || []).find(x => x.name === name) ?
            [] :
            [{
              name,
              data
            }])
        ]
      }),
      fail: state => ({ ...state })
    },
    /** Закрыть */
    close: {
      start: state => ({ ...state }),
      pending: state => ({ ...state }),
      /**
       * Успешное закрытие
       *
       * @param {string} name имя попапа
       */
      success: (state, { name } = {}) => ({
        ...state,
        opened: [
          ...state.opened.filter(x => x.name !== name)
        ]
      }),
      fail: state => ({ ...state })
    },
    clear: () => ({
      ...initState
    })
  }
}, '');
