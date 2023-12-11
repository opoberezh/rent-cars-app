
import { Button } from '@mui/material';
import styled from 'styled-components';

export const Text = styled.span`
  font-family: 'Manrope';
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.42;
  color: #ffffff;
  text-transform: none;
`;

export const StyledButton = styled(Button)`
  width: ${({ width }) => width || 'auto'}; 
  padding: 14px 0;
  border-radius: 12px;
  background-color: #3470FF;

  &:hover {
    background-color: #0B44CD;
  }
`;
