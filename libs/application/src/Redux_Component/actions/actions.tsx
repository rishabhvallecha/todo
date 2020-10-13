import {SET_ITEM,SET_TITLE} from '@todo/application';



export const SetItem = (text:string, title:string) => 
    ( 
      //console.log(title)
      { type: SET_ITEM,title:title,text:text,id:Math.random()}
    );

export const SetItemSuccess = () =>
({
   // type: SET_ITEM_SUCCESS
})

export const SetTitle = (title: string) =>
(
  //console.log(title)
  { type: SET_TITLE, title:title,}
);
