import React from 'react';
import { connect } from 'react-redux';

import {
  TopMenuItems
} from '../../consts';

import {
  getLayoutProps
} from '../../selectors/layout';

import {
  getOrdersSiteUrl
} from '../../configuration';

import {
  actions
} from '../../symbiotes';

const HomeContainer = () => (
  <div>
    BC-2.0 work.
  </div>
);

export default connect(
  state => ({
    ...getLayoutProps(state)
  }),
  dispatch => ({
    onTopMenuClick: ({ id }) => {
      if (id === TopMenuItems.MyRequests) {
        // eslint-disable-next-line no-restricted-globals
        location.href = getOrdersSiteUrl();
      }
    },
    onStepClick: ({ step }) => dispatch(actions.app.mode.set({ mode: step.id }))
  })
)(HomeContainer);
