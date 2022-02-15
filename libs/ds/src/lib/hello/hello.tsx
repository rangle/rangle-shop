import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface DsHelloProps {
  title: string;
}

const StyledDsHello = styled.div`
  color: var(--ds-color-brand-primary-main);
`;

export function DsHello(props: DsHelloProps) {
  return (
    <StyledDsHello>
      <h1>{props.title}</h1>
    </StyledDsHello>
  );
}

export default DsHello;
