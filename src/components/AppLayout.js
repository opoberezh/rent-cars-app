import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import {Nav} from './Nav/Nav';
import Footer from './Footer/Footer';

const Container = styled.main`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 0 15px;
  max-width: 900px;
  margin: 0 auto;
`;

const AppLayout = () => {
  return (
    <Container>
      <Nav />
      <hr />
      <Outlet />
      <Footer />
    </Container>
  );
};

export default AppLayout;
