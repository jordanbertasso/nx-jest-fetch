import { useEffect } from 'react';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface TestLibProps {}

const StyledTestLib = styled.div`
  color: pink;
`;

export function TestLib(props: TestLibProps) {
  useEffect(() => {
    fetch('https://github.com')
  }, [])
  

  return (
    <StyledTestLib>
      <h1>Welcome to TestLib!</h1>
    </StyledTestLib>
  );
}

export default TestLib;
