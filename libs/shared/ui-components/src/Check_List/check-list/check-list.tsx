import React from 'react';
import './check-list.css';
import {useSelector} from 'react-redux';
import {CheckListItem} from '@todo/shared/ui-components'

/* eslint-disable-next-line */
export interface CheckListProps {}

export const CheckList = (props: CheckListProps) => {
  //var data = require('../../../../../../data.json');
  const state = useSelector(state => state.todo)
  let content = "";
  if(state.list)
  {
    content = state.list.map((item, index) => (
      <CheckListItem key={index} item={item} />
    ));
  } 
return(<div>{content}</div>);}

export default CheckList;
