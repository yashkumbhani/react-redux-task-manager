// import react- router dependencies
import { Router, Route, IndexRoute , browserHistory} from 'react-router';
import  React  from 'react';
import tasks from './data/tasks.js';
import { history } from './store/configureStore';
//import components

import App from './containers/App';

const routes = (
  <Router history={history} >
    <Route path="/" component={App} />

  </Router>
);

export default routes;
