import {SET_ITEM,SET_TITLE, EDIT_ITEM} from '@todo/application';

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
/*export const GetTitleSuccess = (title:string) =>
({
    type: GET_TITLE_SUCCESS,
    title: title,
})

export const GetTitle = () =>
(
  //console.log(title)
  { type: GET_TITLE}
);
*/

export const SetTitle = (title: string) =>
(
  //console.log(title)
  { type: SET_TITLE, title:title,}
);
