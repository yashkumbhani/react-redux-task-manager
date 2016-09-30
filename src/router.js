// import react- router dependencies
import { Router, Route, IndexRoute , browserHistory} from 'react-router';
import  React  from 'react';
import tasks from './data/tasks.js';
import { history } from './store/configureStore';
//import components
import Dashboard from './components/Dashboard';

import App from './containers/App';
import TaskContainer from './containers/TaskContainer';


const routes = (
  <Router history={history} >
    <Route path="/" component={App} >
      <IndexRoute component={Dashboard} />
      <Route path="task/:title" component={TaskContainer}/>
    </Route>
  </Router>
);

export default routes;
