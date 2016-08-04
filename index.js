import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import Routes from './components/ReactRoutes';
const rootElement = document.getElementById('root');
render(
  <div>
    <header>
      <Routes />
    </header>
  </div>,
  rootElement
);
