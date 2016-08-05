import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import Routes from './components/ReactRoutes';
const rootElement = document.getElementById('root');
// the PSD was not very clear on what you wanted
// it said zip code but then the picutre had employer info
// i went with the zipcode
render(
  <div>
    <Routes />
  </div>,
  rootElement
);
