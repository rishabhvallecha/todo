import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import saga from '../saga/saga';
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';
import rootReducer from '../reducers/reducers';

const middleware=createSagaMiddleware();
export const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(middleware)));

export type AppState = ReturnType<typeof rootReducer>

middleware.run(saga);

export default store;