import React from 'react';
import {useSelector} from 'react-redux';
import './completed-list.css';

import {CompletedListItem} from '@todo/shared/ui-components'
/* eslint-disable-next-line */
export interface CompletedListProps {}

export const CompletedList = (props: CompletedListProps) => {
  const state = useSelector(state => state.todo)
  let content = "";
  if(state.list)
  {
    
    content = state.list.map((item, index) => (
      <CompletedListItem key={index} item={item} />
    ));
    
    //console.log(content);
  }
    return(<div><p className="Completed__text">Completed items</p>{content}</div>);
    
  };

export default CompletedList;