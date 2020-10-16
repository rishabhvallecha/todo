import React from 'react';
import './check-list.css';
import {useDispatch,useSelector} from 'react-redux';
import {CheckListItem} from '@todo/shared/ui-components'
/* eslint-disable-next-line */
export interface CheckListProps {}

export const CheckList = (props: CheckListProps) => {
  //var data = require('../../../../../../data.json');
  const state = useSelector(state => state.todo)
  const dispatch = useDispatch();
  let content = "";
  if(state.list)
  {
    
    console.log(state.list);
    content = state.list.map((item, index) => (
      //console.log(item.isDone)
      <CheckListItem key={index} item={item} />
    ));
  } 
return(<div>{content}</div>);}

export default CheckList;
