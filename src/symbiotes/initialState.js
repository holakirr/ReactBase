import {
  AppModes
} from '../consts';

export const initialState = {
  /** Информация о документах */
  documents: {
    /** Список отправленных документов (ид., название, тип) */
    items: []
  },

  mode: AppModes.Home
};
