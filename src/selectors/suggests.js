import { createSelector } from 'reselect';
import { getState } from '.';

export const getSuggests = createSelector(
  [getState],
  state => state.suggests || []
);

export const getFullNameSuggestions = createSelector(
  [getSuggests],
  state => (state.fullName || {}).payload || []
);

export const getOrganizationSuggests = createSelector(
  [getSuggests],
  suggests => (suggests.organization || {}).payload || []
);

export const getAddressSuggestions = createSelector(
  [getSuggests],
  state => (state.address || {}).payload || []
);
