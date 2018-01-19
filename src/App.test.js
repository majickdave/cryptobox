import React from 'react';
import ReactDOM from 'react-dom';
import Fetcher from './components/fetcher';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Fetcher />, div);
  ReactDOM.unmountComponentAtNode(div);
});
