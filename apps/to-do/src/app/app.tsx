import React from 'react';
import { PageTitle } from '@todo/shared/ui-components'
import './app.css';
import {TodoForm} from '@todo/shared/ui-components'
import {Provider} from 'react-redux';
import {store} from '../../../../libs/react_components/store';
import {SetItem} from '../../../../libs/react_components/actions/todoActions'
export const App = () => {

  return (
    <div className="app">
      <Provider store={store}>
      <PageTitle />
      <TodoForm />
      </Provider>
    </div>
  );
};

export default App;
