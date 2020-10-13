import {combineReducers} from 'redux';
import TodoReducer from './todo-reducer/todo-reducer';

export default combineReducers({
    todo: TodoReducer
});