import {takeEvery,put,call} from 'redux-saga/effects';
import {SET_ITEM} from '@todo/application';
//import {SetItemSuccess} from '../actions/actions';

function* setitem(action){
    try{

      console.log(action.id);
       var obj = {
         "id" :` ${action.id}`,
         "text" : `${action.text}`,
         "Isdone" : false
       }
        const success = yield localStorage.setItem(`${action.title}`,JSON.stringify(obj))
    }
    catch(error){
        yield console.log(error);
    }
}

export default function* waitforaction() {
    yield takeEvery(SET_ITEM,setitem)
}