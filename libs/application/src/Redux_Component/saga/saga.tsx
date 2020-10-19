import {takeEvery} from 'redux-saga/effects';
import {SET_ITEM,SET_TITLE, EDIT_ITEM, DELETE_ITEM} from '@todo/application';


function* setItem(action){
    try {

       const obj = {
         id : action.id,
         text : action.text,
         isDone : false
       }
        const existing = yield JSON.parse(localStorage.getItem("content")) || [];
        existing.push(obj);

        yield localStorage.setItem("content",JSON.stringify(existing));
    }
    catch(error){
        yield console.log(error);
    }
}

function* editItem(action) {
    try {
        const existing = yield JSON.parse(localStorage.getItem("content"));
        const newList = existing.map( (listItem) => {return {...listItem}} )
        newList.find( listElement => listElement.id === action.item.id ).text = action.item.text
        newList.find( listElement => listElement.id === action.item.id ).isDone = action.item.isDone

        yield localStorage.setItem("content",JSON.stringify(newList));
    }
    catch(error){
        yield console.log(error);
    }
}

function* setTitle(action){
    try{
        yield localStorage.setItem("title",`${action.title}`);
    }
    catch(error){
        yield console.log(error);
    }
}

function* deleteItem(action) {
    try {
        const existing = JSON.parse(localStorage.getItem("content"));
        const newList = existing.filter( (listElement) => listElement.id !== action.item.id);
        yield localStorage.setItem("content",JSON.stringify(newList));
        
    }
    catch(error){
        yield console.log(error);
    }
}

export default function* waitforaction() {
    yield takeEvery(SET_ITEM, setItem)
    yield takeEvery(SET_TITLE, setTitle)
    yield takeEvery(EDIT_ITEM, editItem)
    yield takeEvery(DELETE_ITEM, deleteItem)

}