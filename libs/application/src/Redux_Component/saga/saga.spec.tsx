import React from 'react';
import { render } from '@testing-library/react';

import Saga from './saga';

describe('Saga', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Saga />);
    expect(baseElement).toBeTruthy();
  });
});
