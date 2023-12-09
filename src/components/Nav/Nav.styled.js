import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';


export const HeaderWrapper = styled.header`
  padding: 12px;
  background: #3470ff;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  min-height: 3rem;
  padding-top: 0.3125rem;
  padding-bottom: 0.3125rem;
  max-width: 91.25em;
  margin: 0 auto;
  padding: 0 0.9375rem;
  @media screen and (max-width: 425px) {
    gap: 8px;
  }
`;

export const Logo = styled.img`
height:80px;
margin-right: 20px;
`;

export const NavMenu = styled(NavLink)`
  display: flex;
  flex-direction: column;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: #FFFFFF;
  font-weight: 500;
  cursor: pointer;
  text-shadow: 0 1px 0 rgba(19, 74, 70, 0.4);

  @media screen and (max-width: 425px) {
    padding: 14px 32px;
  }

  &.active {
    color:#00008B;
   
text-shadow: 0 1px 0 rgba(255, 255, 255, 0.7);
    position: relative;

    &:after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 2px;
      background:  #FFFFFF;
    }
  }

  &.animated {
    position: relative;
    overflow: hidden;

    &:after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 0;
      height: 2px;
      background:  #FFFFFF;
      transition: width 0.3s ease;
    }

    &:hover:after {
      width: 100%;
    }
  }
`;


export const Span = styled.span`
  @media screen and (max-width: 767px) {
    display: none;
  }
`;