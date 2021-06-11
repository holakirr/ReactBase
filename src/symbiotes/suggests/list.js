/** Первоначальное состояние для списков */
export const listState = {
  isLoading: false,
  payload: [],
  hasError: false,
  errorMessage: ''
};

/** Формирует набор симбиотов для списка */
export const getListSymbiotes = key => ({
  loading: {
    start: state => ({
      ...state,
      [key]: {
        ...(state[key] || {}),
        ...listState
      }
    }),
    cancel: state => ({
      ...state,
      [key]: {
        ...listState
      }
    }),
    pending: state => ({
      ...state,
      [key]: {
        ...(state[key] || {}),
        ...listState,
        isLoading: true
      }
    }),
    fail: (state, { errorMessage }) => ({
      ...state,
      [key]: {
        ...(state[key] || {}),
        ...listState,
        errorMessage
      }
    }),
    success: (state, { items }) => ({
      ...state,
      [key]: {
        ...(state[key] || {}),
        ...listState,
        payload: items
      }
    })
  }
});
