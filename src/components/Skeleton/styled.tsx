import { CSSProperties } from 'react';
import styled, { keyframes } from 'styled-components';
import { theme } from '../../theme';

const pulse = keyframes`
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: -135% 0%;
  }
`;

const Skeleton = styled.div<{
  width: CSSProperties['width'];
  height: CSSProperties['height'];
}>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: ${({ theme }) => theme.borderRadius};
  display: inline-block;
  opacity: 0.5;
  background: linear-gradient(
    -90deg,
    ${({ theme }) => theme.secondaryColor} 0%,
    ${({ theme }) => theme.bgColor} 50%,
    ${({ theme }) => theme.secondaryColor} 100%
  );
  background-size: 400% 400%;
  animation: ${pulse} 1.2s ease-in-out infinite;
`;

export default Skeleton;
