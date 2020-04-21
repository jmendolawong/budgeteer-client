import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Transaction from './Transaction';

it('Transaction component', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <Transaction />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
