import * as React from 'react';
import Button from '@mui/material/Button';
import { StyledButton, Text } from './Button.styled';

export default function BasicButtons({text, onClick}) {
  return (
    <StyledButton spacing={2} direction="row">
      <Button variant="contained" onClick={onClick}><Text>{text}</Text></Button>
    </StyledButton>
  );
}
 