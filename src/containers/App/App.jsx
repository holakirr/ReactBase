import React from 'react';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';

import {
  history
} from '../../routing';

import {
  Home
} from '..';

import {
  AppRouters
} from '../../consts';

export const AppRouter = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route
        exact
        path={AppRouters.Home}
        component={Home}
      />
    </Switch>
  </ConnectedRouter>
);
