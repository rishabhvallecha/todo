import React from 'react';
import { PageTitle } from '@todo/shared/ui-components'
import './app.css';
import {TodoForm} from '@todo/shared/ui-components'
import {Provider} from 'react-redux';
import {store} from '@todo/application';
export const App = () => {

  return (
    <div className="app">
      <Provider store={store} className="app">
      <PageTitle />
      <TodoForm />
      </Provider>
    </div>
  );
};

export default App;
