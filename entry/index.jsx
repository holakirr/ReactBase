import React from 'react';
import { Provider } from 'react-redux';

import createStore from '../src/store';

import {
  AppRouter
} from '../src/containers';

export default (props) => {
  const store = createStore(
    props
  );

  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};
