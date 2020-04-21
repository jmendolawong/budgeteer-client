import React from 'react';
import ReactDOM from 'react-dom';

import ValidationError from './ValidationError'

it.only('ValidationError component', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <ValidationError message={'test'} />, div
  );
  ReactDOM.unmountComponentAtNode(div);
});
