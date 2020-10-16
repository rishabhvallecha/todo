import React from 'react';

import './completed-list-item.css';

/* eslint-disable-next-line */
export interface CompletedListItemProps {
  key,
  item
}

export const CompletedListItem = (props: CompletedListItemProps) => {
  if(props.item.Isdone == true)
  {
  return (
    <div>
      <input type="checkbox" className="addsymbol addsymbol--checkbox" checked/>
      <input type="text" className="container__inputarea container__inputarea--listItem completed__item" value={props.item.text}/>
    </div>
  );
  }
  else
  {
    return (<div></div>)
  }
};

export default CompletedListItem;;
