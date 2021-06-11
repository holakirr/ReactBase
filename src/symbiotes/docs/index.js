import {
  DocumentStates
} from '../../consts';

/** Документы заявки */
export const docs = {
  docs: {
    /** Добавление документа */
    add: {
      start: state => ({ ...state }),

      pending: (state, {
        type, name, size, id, ...props
      }) => ({
        ...state,
        documents: {
          ...state.documents,
          items: [
            ...state.documents.items,
            {
              id,
              type,
              name,
              size,
              status: DocumentStates.Uploading,
              additional: {
                ...props || {}
              }
            }
          ]
        }
      }),

      progress: (state, { id, percentage = 0 } = {}) => ({
        ...state,
        documents: {
          ...state.documents,
          items: state.documents.items.map(x => ({
            ...x,
            percentage: x.id === id ? percentage : x.percentage
          }))
        }
      }),

      success: (state, { id, data } = {}) => ({
        ...state,
        documents: {
          ...state.documents,
          items: state.documents.items.map(x => ({
            ...x,
            fileId: x.id === id ?
              (typeof data === 'object' ?
                x.id :
                data) :
              x.fileId,
            status: x.id === id ? DocumentStates.Uploaded : x.status,
            percentage: x.id === id ? 100 : x.percentage
          }))
        }
      }),

      fail: (state, {
        id, errorMessage
      }) => ({
        ...state,
        documents: {
          ...state.documents,
          items: state.documents.items.map(x => ({
            ...x,
            status: x.id === id ? DocumentStates.Error : x.status,
            errorMessage: x.id === id ? errorMessage : x.errorMessage,
            percentage: x.id === id ? 0 : x.percentage
          }))
        }
      })
    },
    /** Удаление документа */
    remove: {
      start: state => ({
        ...state
      }),
      pending: state => ({
        ...state
      }),
      success: (state, { id } = {}) => ({
        ...state,
        documents: {
          ...state.documents,
          items: [
            ...state.documents.items
              .filter(x => x.id !== id),
          ]
        }
      }),
      fail: (state, {
        id, errorMessage
      }) => ({
        ...state,
        documents: {
          ...state.documents,
          items: state.documents.items.map(x => ({
            ...x,
            status: x.id === id ? DocumentStates.Error : x.status,
            errorMessage: x.id === id ? errorMessage : ''
          }))
        }
      })
    },
  }
};
