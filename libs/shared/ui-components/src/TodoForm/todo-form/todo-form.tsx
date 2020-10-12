import React from 'react';

import './todo-form.css';

/* eslint-disable-next-line */
export interface TodoFormProps {}

export const TodoForm = (props: TodoFormProps) => {
  return (
    <div>
      <form className="container">
        <input type="text" name="Title" placeholder="Title" className="container__inputarea"/>
        <div className="addsymbol"> + </div>
        <input type="text" placeholder="List item" className="container__inputarea container__inputarea--listItem"/>
      </form>
    </div>
  );
};

export default TodoForm;
