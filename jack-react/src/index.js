import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import EditUser from './components/EditUser';
import AddUser from './components/AddUser';
import ShowUser from './components/ShowUser';

ReactDOM.render(
  <Router>
      <div>
        <Route exact path='/' component={App} />
        <Route path='/edit/:id' component={EditUser} />
        <Route path='/create' component={AddUser} />
        <Route path='/show/:id' component={ShowUser} />
      </div>
  </Router>,
  document.getElementById('root')
);

serviceWorker.unregister();