import React from 'react';

import './check-list-item.css';

/* eslint-disable-next-line */
export interface CheckListItemProps {
  key: string,
  item
}

export const CheckListItem = (props: CheckListItemProps) => {
  //let listitem = props.item.id;
 // let obj = JSON.parse(props.item);
  //console.log(props.item.id);
  return (
    <div>
      <input type="checkbox" className="addsymbol addsymbol--checkbox"/>
      <input type="text" className="container__inputarea container__inputarea--listItem" value={props.item}/>
    </div>
    );
};

export default CheckListItem;
