import { createStore,applyMiddleware } from 'redux';
import rootReducers from './root-reducer';
import logger from 'redux-logger';

const middleware = [logger];

const store = createStore(rootReducers,applyMiddleware(...middleware))
export default store;