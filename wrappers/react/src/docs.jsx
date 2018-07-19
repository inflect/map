// @flow
import * as React from 'react';
import ReactDOM from 'react-dom';

// pages
import InflectMap from './InflectMap';

ReactDOM.render(
  <InflectMap 
    apiBase="https://api.dev.inflect.com"
    token="LKpWadaVKrGfLXQAjb3tPMzi"
    theme="day"
    dotColor="magenta"
  />,
  // flow-disable-next-line
  document.querySelector('#container')
);
