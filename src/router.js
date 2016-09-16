// import react- router dependencies
import { Router, Route, IndexRoute , browserHistory} from 'react-router';
import  React  from 'react';
import tasks from './data/data.js';
//import components

import App from './containers/App';

const routes = (
  <Router history={browserHistory} >
    <Route path="/" tasks = {tasks} component={App} />

  </Router>
);

export default routes;
