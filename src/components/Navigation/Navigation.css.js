import styled from 'styled-components';

// tag function
export const Container = styled.div`
background-color: ${({ theme }) => theme.colors.gray.normal};
display flex;
padding: ${({ theme: { spacing } }) => spacing.sm}px 0;
justify-content: space-between;
  `;

export const List = styled.ul`
display: flex; 
`;