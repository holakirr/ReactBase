import {
  createSelector
} from 'reselect';

import { DocumentStates } from '../consts';

export const getState = state => (state || {});

export const getAppState = createSelector(
  [getState],
  state => state.app || {}
);

export const getDocsState = createSelector(
  [getAppState],
  state => state.documents || {}
);

export const getDocuments = createSelector(
  [getDocsState],
  state => state.items || []
);

export const getFormattedDocuments = createSelector(
  [getDocuments],
  docs => docs
    .filter(x => x.status !== DocumentStates.Error)
    .map(x => ({
      ...x,
      isLoading: x.status === DocumentStates.Uploading,
      title: x.name
    }))
);

export const getDocumentsProcess = createSelector(
  [getDocuments],
  documents => !!documents.find(x => x.status === DocumentStates.Uploading)
);
