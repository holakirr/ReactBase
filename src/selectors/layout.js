import {
  createSelector
} from 'reselect';

import {
  TopMenuItems,
  AppModes
} from '../consts';

import {
  getAppMode
} from './routing';

export const getLayoutProps = createSelector(
  [getAppMode],
  mode => ({
    isShow: true,
    headerProps: {
      title: 'здесь название приложения'
    },
    height: null,
    topMenuProps: {
      items: [{
        id: TopMenuItems.Products,
        title: 'Все продукты'
      },
      {
        id: TopMenuItems.MyRequests,
        title: 'Мои заявки'
      }]
    },
    navigationProps: {
      stepperProps: {
        items: [{
          id: AppModes.Home,
          step: 1,
          isActive: true,
          title: 'Здесь меню'
        }].map(x => ({
          ...x,
          isActive: mode === x.id
        }))
      }
    },
  })
);
