import React from 'react';
import { render } from '@testing-library/react';

import CheckList from './check-list';

describe('CheckList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CheckList />);
    expect(baseElement).toBeTruthy();
  });
});
