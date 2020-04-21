import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import TransactionModal from './TransactionModal';

it('TransactionModal component', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <TransactionModal />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
