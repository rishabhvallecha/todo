import React from 'react';
import { render } from '@testing-library/react';

import ReactSaga from './react-saga';

describe('ReactSaga', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactSaga />);
    expect(baseElement).toBeTruthy();
  });
});
