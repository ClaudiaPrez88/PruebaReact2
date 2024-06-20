import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useContext,useState } from "react";
import { ContextPizzas } from "../../context/Context";
import { useNavigate } from 'react-router-dom';
import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";

function Detalle() {
    let { id } = useParams();
    const { agregarAlCarritoDetalle, Pizzas} = useContext(ContextPizzas);

    const filteredPizza = Pizzas.find((pizza) => pizza.id === id);

    const navigate = useNavigate();
    const irHome = () => {
      navigate("/");
    };

    const handleAgregarAlCarrito = () => {
      agregarAlCarritoDetalle(filteredPizza.id, cantidad);
      setCantidad(1); 
      navigate('/carrito'); 
    };
  
    if (!filteredPizza) {
      return <p>Non è stata trovata</p>
    }

    const [cantidad, setCantidad] = useState(0)
    const aumentar = () => {
      setCantidad(cantidad + 1);
    };
  
    const disminuir= () => {
      if (cantidad > 1) {
        setCantidad(cantidad - 1);
      }
    };
    
    //Arreglo link para Vercel//
    let pizzaLink = filteredPizza.img;
    if (pizzaLink.startsWith("./")) {
      pizzaLink = `../../../${pizzaLink.substring(1)}`; 
    }

    return (
      <div id='detalle'>
        <Container>
          <Row>
            {filteredPizza && (
              <>
                <Col md={6} lg={5}>
                  <img src={pizzaLink} alt="Pizza" className='img-detalle'/>
                </Col>
                <Col md={6} lg={7}>
                  <h1 className='titulo'>{filteredPizza.name}</h1>
                  <p>{filteredPizza.desc}</p>
                  <p className='sub-titulo'>Ingredienti:</p>
                  <ul>
                    {filteredPizza.ingredients.map((ingrediente, index) => (
                      <li className='ingredientes' key={index}>
                        {ingrediente}{index < filteredPizza.ingredients.length - 1 && ','}
                      </li>
                    ))}
                  </ul>
                  <p className='price'>Prezzo: ${filteredPizza.price}</p>
                      <div className="botones-cantidad">
                        <MDBBtn className="px-3 me-2" onClick={() => disminuir()}>
                        <MDBIcon fas icon="minus" />
                        </MDBBtn>
                        <h2> {cantidad}</h2>
                        <MDBBtn className="px-3 ms-2" onClick={() => aumentar()}>
                            <MDBIcon fas icon="plus" />
                        </MDBBtn>
                      </div>
                  <div className='botones-detalle'>
                    <Button className='btn-comprar'  onClick={handleAgregarAlCarrito} >Aggiungi all'ordine</Button>
                    <Button className='btn-detalle' onClick={irHome}>Torna indietro</Button>
                  </div>
                </Col>
              </>
            )}
          </Row>
        </Container>
      </div>
    );
}

export default Detalle;

