import {takeEvery,put,call} from 'redux-saga/effects';
import {SET_ITEM} from './types/actionTypes';
import {SetItemSuccess} from './actions/todoActions';

function* setitem(action){
    try{
        const success = yield localStorage.setItem(`${action.id}`,`${action.text}`)
    }
    catch(error){
        yield console.log(error);
    }
}

export default function* waitforaction() {
    yield takeEvery(SET_ITEM,setitem)
}