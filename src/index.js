import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import Dashboard from './components/Dashboard';
import store , { history } from './store';
import Clients from './components/Clients';
import Products from './components/Products';
import Bills from './components/Bills';
import CreateBill from './components/CreateBill';
import Plug from './components/Plug';
import { Router, Route, IndexRoute, Redirect } from 'react-router';


const router = (
  <Provider store={store}>
    <Router history={history}>
    <Route path="/" component={App}>
    <IndexRoute component={Plug}></IndexRoute>
        <Route  path="dashboard" component={Dashboard}></Route>
        <Route  path="clients" component={Clients}></Route>
        <Route  path="products" component={Products}></Route>
        <Route  path="bills" component={Bills}></Route>
        <Route path="bills/create" component={CreateBill}></Route>
</Route>


    </Router>
  </Provider>
)

render(router, document.getElementById('application'));

