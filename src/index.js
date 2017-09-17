import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import Dashboard from './components/Dashboard';
import store , { history } from './store';
import Plug from './components/Plug';
import { Router, Route, IndexRoute } from 'react-router';


const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/dashboard" component={App}>
        <IndexRoute component={Dashboard}></IndexRoute>
      </Route>
      <Route path="*" component={Plug}/>
    </Router>
  </Provider>
)

render(router, document.getElementById('application'));

