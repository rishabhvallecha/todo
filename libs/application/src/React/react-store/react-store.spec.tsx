import React from 'react';
import { render } from '@testing-library/react';

import ReactStore from './react-store';

describe('ReactStore', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactStore />);
    expect(baseElement).toBeTruthy();
  });
});
