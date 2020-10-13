import React from 'react';
import './check-list.css';
/* eslint-disable-next-line */
export interface CheckListProps {}

export const CheckList = (props: CheckListProps) => {
  //var data = require('../../../../../../data.json');
  return (
    <form>
      <input type="checkbox" className="addsymbol addsymbol--checkbox"/>
      <input type="text" className="container__inputarea container__inputarea--listItem"/>
    </form>
  );
};

export default CheckList;
