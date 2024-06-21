import Contenedor from "./Contenedor"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useContext } from "react";
import { ContextPizzas } from "../../context/Context";

export const Pizzas = () => {
    const { Pizzas, agregarAlCarrito } = useContext(ContextPizzas);
    console.log(Pizzas)
  return (
    <Container id="pizzas">
    <Row>
      <Col className="sec-titulo" xs={12}>
        <h5 className="sub-titulo">Scegli quella che vuoi</h5>
        <h1 className="titulo">Il miglior menu in citta</h1>
      </Col>
      {Pizzas.map((pizza, index) =>(
        <Col xs={12} md={6} lg={4} key={index}>
            <Contenedor titulo={pizza.name} ingredientes={pizza.ingredients} precio={pizza.price} imagen={pizza.img} id={pizza.id}  agregarAlCarrito={agregarAlCarrito}/>
        </Col>
      ))}
    </Row>
  </Container>
  )
}
