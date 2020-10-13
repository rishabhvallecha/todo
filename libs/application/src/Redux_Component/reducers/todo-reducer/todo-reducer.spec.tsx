import React from 'react';
import { render } from '@testing-library/react';

import TodoReducer from './todo-reducer';

describe('TodoReducer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TodoReducer />);
    expect(baseElement).toBeTruthy();
  });
});
