import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { Text } from './Button.styled';

export default function CustomButton({ text, onClick, width }) {
  const StylesButton = styled(Button)(({ theme }) => ({
    width: width,
    padding: '14px 0 14px 0',
    borderRadius: '12px',
    color: theme.palette.getContrastText('#3470FF'),
    backgroundColor: '#3470FF',
    '&:hover': {
      backgroundColor: '#0B44CD',
    },
  }));

  return (
    <StylesButton variant="contained" onClick={onClick}>
      <Text>{text}</Text>
    </StylesButton>
  );
}