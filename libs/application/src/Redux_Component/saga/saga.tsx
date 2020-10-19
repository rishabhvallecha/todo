import {takeEvery} from 'redux-saga/effects';
import {SET_ITEM,SET_TITLE, EDIT_ITEM} from '../types/types';
//import {GetTitleSuccess} from '../actions/actions';

function* setitem(action){
    try{
      //console.log(action.title);
       const obj = {
         id : action.id,
         text : action.text,
         isDone : false
       }
        const existing = JSON.parse(localStorage.getItem("content")) || [];
        existing.push(obj);

        yield localStorage.setItem("content",JSON.stringify(existing));
    }
    catch(error){
        yield console.log(error);
    }
}

function* editItem(action) {
    try {
        const existing = JSON.parse(localStorage.getItem("content"));
        const newList = existing.map( (listItem) => {return {...listItem}} )
        newList.find( listElement => listElement.id === action.item.id ).text = action.item.text
        newList.find( listElement => listElement.id === action.item.id ).isDone = action.item.isDone

        yield localStorage.setItem("content",JSON.stringify(newList));
    }
    catch(error){
        yield console.log(error);
    }
}

function* settitle(action){
    try{
        yield localStorage.setItem("title",`${action.title}`);
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
    yield takeEvery(EDIT_ITEM, editItem)
    //yield takeEvery(GET_TITLE,gettitle)

}