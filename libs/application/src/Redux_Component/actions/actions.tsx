import {SET_ITEM,SET_TITLE,GET_TITLE,GET_TITLE_SUCCESS} from '@todo/application';



export const SetItem = (text:string) => 
    ( 
      //console.log(title)
      { type: SET_ITEM,text:text,id:Math.random()}
    );

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
