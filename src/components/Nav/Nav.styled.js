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
border-radius: 70%;
`;


export const NavMenu = styled(NavLink)`
  display: flex;
  flex-direction: column;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: #FFFFFF;
  font-weight: 500;
  font-size: 24px;
  cursor: pointer;
  text-shadow: 0 1px 0 rgba(19, 74, 70, 0.4);

  @media screen and (max-width: 425px) {
    padding: 14px 32px;
  }

  &.active {
    color:#66CDAA;
   
    text-shadow: 0 1px 2px rgba(0, 0, 70, 0.4);

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


