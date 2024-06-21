import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { ContextPizzas } from "../../context/Context";
import Logo from "../../../public/pizza-ico.png"
import { BiMenu } from "react-icons/bi";


export const Menu = () => {

  const { Carrito,calcularTotalCantidadCarrito} = useContext(ContextPizzas);

  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary" fixed="top">
      <Container>
        <Navbar.Brand>
        <Link to="/">
          <img src={Logo} alt="Logo"  className='logo'/>
          <p className='logo-texto'>Pizza al taglio</p>
        </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <BiMenu className='boton-menu' />
          </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
              <Link to="/carrito"> <p className='link-cart'>Il mio carrello</p>
                <FaShoppingCart/>
                <span>
                {Carrito.length > 0 ? (
                    <span className="cart-count"> {calcularTotalCantidadCarrito()}</span>
                  ):("0")}
                </span>
              </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}
