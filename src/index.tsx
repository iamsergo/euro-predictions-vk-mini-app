import React from 'react';
import ReactDOM from 'react-dom';

import '@vkontakte/vkui/dist/vkui.css';
import './index.sass';

import { Provider } from 'react-redux';
import store from './store/store';

import App from './App';

import bridge from '@vkontakte/vk-bridge'
bridge.send('VKWebAppInit')

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
