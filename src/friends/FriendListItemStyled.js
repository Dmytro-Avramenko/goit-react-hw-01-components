import styled from 'styled-components';

export const StyledStatus = styled.span`
  background: ${props => (props.isOnline ? 'green' : 'red')};
  width: 20px;
  height: 20px;
  border-radius: 50%;
`;