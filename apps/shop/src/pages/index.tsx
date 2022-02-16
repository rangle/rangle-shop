import React from 'react';
import styled from '@emotion/styled';

import { DsButton, DsHello } from '@rangle-shop/ds'

const StyledApp = styled.div``;

export function Index() {
  return (
    <StyledApp>
      <DsHello title='Welcome to Rangle Shop'></DsHello>
      <DsButton size='medium' variant='primary'>
        Buy Stuff
      </DsButton>
    </StyledApp>
  );
}

export default Index;
