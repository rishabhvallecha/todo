import {SET_ITEM,SET_TITLE, EDIT_ITEM} from '@todo/application';
import { DELETE_ITEM } from '../types/types';

export interface ItemType {
  isDone: boolean,
  id: number,
  text: string
}

export const SetItem = (text:string) => 
    ( 
      //console.log(title)
      { type: SET_ITEM,text:text,id:Math.random()}
    );

export const EditItem = (item: ItemType) => ({
  type: EDIT_ITEM,
  item
})

export const DeleteItem = (item: ItemType) => ({
  type: DELETE_ITEM,
  item
})


export const SetTitle = (title: string) =>
(
  { type: SET_TITLE, title:title,}
);
