import React from 'react';
import ReactDOM from 'react-dom';
import EntryPoint from './EntryPoint';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<EntryPoint />, div);
  ReactDOM.unmountComponentAtNode(div);
});
