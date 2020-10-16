import React from 'react';
import { render } from '@testing-library/react';

import CompletedListItem from './completed-list-item';

describe('CompletedListItem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CompletedListItem />);
    expect(baseElement).toBeTruthy();
  });
});
