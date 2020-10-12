import React from 'react';

import './page-title.css';

/* eslint-disable-next-line */
export interface PageTitleProps {}

export const PageTitle = (props: PageTitleProps) => {
  return (
    <div>
      <h1>The To-Do List</h1>
    </div>
  );
};

export default PageTitle;
