import {combineReducers} from 'redux';
//import todoReducer from './todo-reducer/todo-reducer';
import {todoReducer} from '@todo/application';

export const rootReducer =  combineReducers({
    todo: todoReducer
});

//export default rootReducer;