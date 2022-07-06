import { createRoot } from "react-dom/client";
import './index.css';
import App from "./App/App";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from "react-redux";
import rootReducer from './redux/reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './redux/sagas';
import logger from 'redux-logger';


const sagaMiddleware = createSagaMiddleware();

const middlewareList = process.env.NODE_ENV === 'development' ? [sagaMiddleware, logger] : [sagaMiddleware];

const store = createStore(
  rootReducer,
  applyMiddleware(...middlewareList),
);

sagaMiddleware.run(rootSaga);

const root = createRoot( document.getElementById('root') );
root.render(
  <Provider store={store}>
    <App tab="home" />
  </Provider>
);

