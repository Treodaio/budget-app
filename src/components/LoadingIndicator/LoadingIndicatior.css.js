import React from 'react';
import styled, { keyframes } from 'styled-components';

const Root = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
`;

const Dot = styled.div`
  position: absolute;
  top: 33px;
  left: ${props => props.left}px;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.gray.normal};
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
  animation: ${props => props.animation} 0.6s infinite;
`;

const move1 = keyframes`
0% {
  transform: scale(0);
}
100% {
  transform: scale(1);
}
`;

const move2 = keyframes`
0% {
  transform: translate(0, 0);
}
100% {
  transform: translate(24px, 0);
}
`;

const move3 = keyframes`
0% {
  transform: scale(1);
}
100% {
  transform: scale(0);
}
`;

function LoadingIndicator() {
  return (
    <Root>
      <Dot left={8} animation={move1} />
      <Dot left={8} animation={move2} />
      <Dot left={32} animation={move2} />
      <Dot left={56} animation={move3} />
    </Root>
  )
}

export default LoadingIndicator;