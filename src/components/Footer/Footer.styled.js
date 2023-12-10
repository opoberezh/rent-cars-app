import styled from 'styled-components';

export const FooterContainer = styled.div`
  display: flex;
  padding: 12px;
  align-items: center;
  justify-content: space-between;
  justify-content: space-evenly;
  gap: 12px;
  background: #3470ff;

  @media screen and (max-width: 425px) {
    gap: 8px;
  }
`;

export const FooterList = styled.ul`
  display: flex;
  align-items: center;
  gap: 18px;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const SocialNet = styled.a`
  color: #ffffff;
  text-decoration: none;
  text-shadow: 0 1px 2px rgba(0, 0, 70, 0.4);

  &:hover {
    color: #66cdaa;
    text-shadow: 0 1px 2px rgba(0, 0, 70, 0.4);
    position: relative;
    transition: width 0.3s ease;
  }
`;
export const Span = styled.span`
  vertical-align: top;
`;
