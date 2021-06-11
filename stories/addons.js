import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  withKnobs
} from '@storybook/addon-knobs';
import {
  withInfo
} from '@storybook/addon-info';
import { withOptions } from '@storybook/addon-options';
import {
  ThemeProvider
} from 'styled-components';


const storiesOfBase = (name = '', module) => {
  const stories = storiesOf(name, module);
  stories
    .addDecorator(withKnobs)
    .addDecorator(withOptions({
      hierarchyRootSeparator: /\|/,
      name: 'BC-2.0 WebApp',
      addonPanelInRight: true
    }))
    .addDecorator(withInfo({
      header: true,
      inline: true,
      maxPropsIntoLine: 1
    }));

  return stories;
};

export const storiesOfDecorator = (name = '', module) => {
  const stories = storiesOfBase(name, module);

  stories.addDecorator(storyFn => (
    <div style={{ padding: '20px' }}>
      {storyFn()}
    </div>
  ));

  return stories;
};


export const storiesOfDecoratorWithTheme = (name = '', module) => {
  const stories = storiesOfBase(name, module);

  stories.addDecorator(storyFn => (
    <div style={{ padding: '20px' }}>
      <React.Fragment>
        {storyFn()}
      </React.Fragment>
    </div>
  ));

  return stories;
};
