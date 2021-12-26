import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import App_timer from './App_timer';
import App_cronometro from './App_cronometro';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route, RouteProps } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Switch>
            <Route path="/" exact={true} component={App} />
            <Route path="/timer" component={App_timer} />
            <Route path="/cronometro" component={App_cronometro} />

        </Switch>
    </ BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
