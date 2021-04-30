import styled from 'styled-components';
import Wrapper from '../Wrapper';

export const Container = styled.div`
background-color: ${({ theme }) => theme.colors.gray.normal};
display: flex;
justify-content: space-between;
padding: ${({ theme: { spacing } }) => spacing.sm}px 0;
  `;

export const NavigationWrapper = styled(Wrapper)`
display: flex;
justify-content: space-between;
`;

export const List = styled.ul`
display: flex; 
`;