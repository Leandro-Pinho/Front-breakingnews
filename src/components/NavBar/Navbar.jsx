import Logo from "../../images/logo.svg";
import { Button, ImageLogo, InputSpace, Nav } from "./navbarStyled";


const Navbar = () => {
  return (
    <>
      <Nav>
        <InputSpace>
          <i className="bi bi-search"></i>
          <input type="text" placeholder="Pesquise por um titulo..." />
        </InputSpace>

        <ImageLogo src={Logo} alt="logo da breaking news" />

        <Button>Entrar</Button>
      </Nav>
    </>
  );
};

export default Navbar;
