import React from 'react';

import './completed-list-item.css';

import {useDispatch} from 'react-redux';
import {EditItem} from '@todo/application';


/* eslint-disable-next-line */
export interface CompletedListItemProps {
  key,
  item
}

export const CompletedListItem = (props: CompletedListItemProps) => {

  const dispatch = useDispatch();
 
   const {item} = props;
 
   const handleChange = (e) => {
     const {value} = e.target;
 
     const newItem = { ...item, text: value }
     dispatch(EditItem(newItem))
   }
 
   const handleCheckBoxChange = (e) => {
     const {checked} = e.target;
 
     const newItem = { ...item, isDone: checked }
     dispatch(EditItem(newItem))
   }
 
   if(props.item.isDone)
   {return (
     <div>
       <input type="checkbox" className="addsymbol addsymbol--checkbox" checked={item.isDone} onChange={handleCheckBoxChange}/>
       <input type="text" className="container__inputarea container__inputarea--listItem" value={item.text} onChange={handleChange}/>
     </div>
     );}
     else
   {
     return (<div></div>)
   }
   
 };
 
 export default CompletedListItem;


