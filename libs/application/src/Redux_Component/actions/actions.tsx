import {SET_ITEM,SET_TITLE} from '../types/types';



export const SetItem = (text:string, title:string) => 
    ({ type: SET_ITEM,title:title,text:text,id:Math.random()});

export const SetItemSuccess = () =>
({
   // type: SET_ITEM_SUCCESS
})

export const SetTitle = (title: string) =>
(
  //console.log(title)
  { type: SET_TITLE, paylaod:title,}
)
