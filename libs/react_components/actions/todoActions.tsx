import {SET_ITEM} from '../types/actionTypes';

export const SetItem = (text:string) => 
    ({ type: SET_ITEM,text:text,id:Math.random()});

export const SetItemSuccess = () =>
({
   // type: SET_ITEM_SUCCESS
})
