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
    //var list = state.list.content.split(',');
    //console.log(list);
    //var item =JSON.parse(JSON.stringify(state.list));
    //console.log(typeof(item));
    //var items = JSON.parse(item);
    
    
    //var list = JSON.parse(JSON.stringify(state.list));
    //var res = [];
    //for(var i in list)
    //{
      //res.push(list[i]);
    //}
   // var array = JSON.parse(state.list);
    //var array = state.list.split(',');
    console.log(state.list);
    content = state.list.map((item, index) => (
      <CheckListItem key={index} item={item} />
    ));
  } 
return(<div>{content}</div>);}

export default CheckList;
