import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import ReportsPage from './ReportsPage';

it('ReportsPage component', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <ReportsPage />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
