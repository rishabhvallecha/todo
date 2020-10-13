import React from 'react';
import { render } from '@testing-library/react';

import CompletedList from './completed-list';

describe('CompletedList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CompletedList />);
    expect(baseElement).toBeTruthy();
  });
});
