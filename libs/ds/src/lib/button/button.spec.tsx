import { render } from '@testing-library/react';

import { DsButton } from './button';

describe('DsButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DsButton variant='primary' size='medium' />);
    expect(baseElement).toBeTruthy();
  });
});
