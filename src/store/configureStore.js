import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import DevTools from '../containers/ReduxDevTools';
import { syncHistoryWithStore} from 'react-router-redux';
import { browserHistory } from 'react-router';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import tasks from '../data/tasks';

const initialState = {
  tasks
};

const store = createStore(rootReducer, initialState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
