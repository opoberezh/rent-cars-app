
import {
  NavMenu,
  HeaderWrapper,
  Container,
  Logo,
  
} from './Nav.styled.js';
import RentLogo from "../../Img/RentLogo.jpg"
 const Nav = () => {
  return (
    <HeaderWrapper>
      <Container>
        <Logo src ={RentLogo}alt="Logo"/>
        <NavMenu to="/" activeClassName="active"className="animated">Home</NavMenu>
        <NavMenu to="/catalog" activeClassName="active"className="animated">Catalog</NavMenu>
        <NavMenu to="/favorites" activeClassName="active"className="animated">Favorites</NavMenu>
      </Container>
    </HeaderWrapper>
    
  );
}

export default Nav;