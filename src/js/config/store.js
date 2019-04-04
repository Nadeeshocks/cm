import { createStore, applyMiddleware , compose } from 'redux';
import rootReducer from './rootReducer';
import thunk from 'redux-thunk';


const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION_ && window.__REDUX_DEVTOOLS_EXTENSION_())
);

export default store;