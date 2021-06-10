import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Store from "./store";
import { Provider } from "mobx-react";

const Root = (
  <Provider Store = {Store}>
    <App />
  </Provider>
)

ReactDOM.render(
    Root,
  document.getElementById('root')
);

