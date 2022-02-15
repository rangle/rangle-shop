import { render } from '@testing-library/react';

import DsHello from './hello';

describe('DsHello', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DsHello />);
    expect(baseElement).toBeTruthy();
  });
});
