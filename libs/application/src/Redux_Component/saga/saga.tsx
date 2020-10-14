import {takeEvery,put,call} from 'redux-saga/effects';
import {SET_ITEM,SET_TITLE,GET_TITLE} from '../types/types';
//import {GetTitleSuccess} from '../actions/actions';

function* setitem(action){
    try{
      //console.log(action.title);
       var obj = {
         "id" :` ${action.id}`,
         "text" : `${action.text}`,
         "Isdone" : false
       }
       //interface existing 
        //var existing = [];
        var existing = localStorage.getItem("content");
        var values = existing ? existing.split(',') : [];   
        values.push(JSON.stringify(obj));
        const success = yield localStorage.setItem("content",values.toString());
    }
    catch(error){
        yield console.log(error);
    }
}

function* settitle(action){
    try{
        const success = yield localStorage.setItem("title",`${action.title}`);
    }
    catch(error){
        yield console.log(error);
    }
}

/*function* gettitle(action){
    try{
        //const success = yield localStorage.setItem("title",`${action.title}`);
        const title = yield localStorage.getItem("title");
        //console.log(title);
        //const title = success.toString();
        yield put(GetTitleSuccess(title));
    }
    catch(error){
        yield console.log(error);
    }
}*/

export default function* waitforaction() {
    yield takeEvery(SET_ITEM,setitem)
    yield takeEvery(SET_TITLE,settitle)
    //yield takeEvery(GET_TITLE,gettitle)

}