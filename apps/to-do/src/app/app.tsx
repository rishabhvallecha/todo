import React from 'react';
import { PageTitle } from '@todo/shared/ui-components'
import './app.css';
import {TodoForm} from '@todo/shared/ui-components'
export const App = () => {

  return (
    <div className="app">
      <PageTitle />
      <TodoForm />
    </div>
  );
};

export default App;
