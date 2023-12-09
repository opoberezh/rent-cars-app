
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import  Nav from './Nav/Nav';

const Container = styled.main`
display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 0 15px;
  max-width: 900px;
  margin: 0 auto;
`;

export const AppLayout = () => {
  return (
    <Container>
      <Nav />
      <hr />

      <Outlet />
    </Container>
  );
};