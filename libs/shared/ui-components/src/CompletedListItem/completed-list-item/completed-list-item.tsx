import React from 'react';

import './completed-list-item.css';

import {useDispatch} from 'react-redux';
import {EditItem, DeleteItem} from '@todo/application';


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

  const handleDelete = () => {
    dispatch(DeleteItem(item))
  }
    
   return (
     <div>
       {item.isDone && 
        <div className="checklist-container">
          <input type="checkbox" className="addsymbol addsymbol--checkbox" checked={item.isDone} onChange={handleCheckBoxChange}/>
          <input type="text" className="container__inputarea container__inputarea--listItem completed__item" value={item.text} onChange={handleChange}/>
          <button className="checklist-container__delete-button" onClick={handleDelete}>
            <i className="fa fa-times fa-1.5x" aria-hidden="true"></i>
          </button>
        </div>
       }
     </div>
   )

 };
 
 export default CompletedListItem;


