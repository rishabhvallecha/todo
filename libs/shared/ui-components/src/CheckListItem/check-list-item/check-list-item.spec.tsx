import React from 'react';
import { render } from '@testing-library/react';

import CheckListItem from './check-list-item';

describe('CheckListItem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CheckListItem />);
    expect(baseElement).toBeTruthy();
  });
});
