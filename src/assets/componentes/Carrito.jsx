
import React, { useContext } from "react";
import {MDBBtn, MDBCard,MDBCardBody,MDBCardHeader, MDBCol, MDBContainer, MDBIcon,MDBListGroup, MDBListGroupItem, MDBRow,MDBTypography} from "mdb-react-ui-kit";
import { ContextPizzas } from "../../context/Context";

const Carrito = () => {
  const { Carrito, calcularTotalCarrito, disminuirCantidad, aumentarCantidad,eliminarPizzaDelCarrito,calcularTotalCantidadCarrito } = useContext(ContextPizzas);


  return (
    <section className="h-100 gradient-custom" id="carrito">
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center my-4">
          <MDBCol lg="7" md="6" xs="12">
            <MDBCard className="mb-4">
              <MDBCardHeader className="py-3">
                <MDBTypography tag="h5" className="mb-0">
                Carrello - 
                  {Carrito.length > 0 ? (
                  <span className="cart-count">({calcularTotalCantidadCarrito()})</span>
                  ):(" (0) ")}

                </MDBTypography>
              </MDBCardHeader>
              <MDBCardBody>
                {Carrito.length > 0 ?(Carrito.map((pizza, index) => (
                  <MDBRow key={index}>
                    <MDBCol lg="3" md="6" xs="6" className="mb-4 mb-lg-0">
                      <div className="bg-image rounded hover-zoom hover-overlay">
                        <img src={pizza.img} className="w-100" alt={pizza.name} />
                      </div>
                    </MDBCol>

                    <MDBCol lg="5" md="6" xs="6" className=" mb-4 mb-lg-0">
                      <p>
                        <strong>{pizza.name}</strong>
                      </p>
                      <p>Prezz: ${pizza.price}</p>
                      <p>Quantità: {pizza.cantidad}</p>
                      
                    </MDBCol>

                    <MDBCol lg="4" md="12" className="mb-4 mb-lg-0">

                      <MDBListGroup className="mb-4">
                        <MDBListGroupItem className="contenedor-botones">
                            <div className="botones-cantidad">
                                <MDBBtn className="btn-detalle px-3 me-2" onClick={() => disminuirCantidad(pizza.id)}>
                                <MDBIcon fas icon="minus" />
                                </MDBBtn>
                                <h2> {pizza.cantidad}</h2>
                                <MDBBtn className="btn-detalle px-3 ms-2" onClick={() => aumentarCantidad(pizza.id)}>
                                    <MDBIcon fas icon="plus" />
                                </MDBBtn>
                            </div>
                            <div>
                                <MDBBtn onClick={() => eliminarPizzaDelCarrito(pizza.id)} className="me-2" color="danger">
                                <MDBIcon fas icon="trash" />
                                </MDBBtn>
                            </div>
                        </MDBListGroupItem>
                      </MDBListGroup>
                    </MDBCol>
                  </MDBRow>
                ))):(
                    <p>Il carrello è vuoto.</p>
                  )}
                
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="5" md="6" xs="12" >
            <MDBCard className="mb-4">
              <MDBCardHeader>
                <MDBTypography tag="h5" className="mb-0">
                Totale
                </MDBTypography>
              </MDBCardHeader>
              <MDBCardBody>
                
                <MDBListGroup flush>
                <MDBListGroupItem className="d-flex justify-content-between align-items-center px-0">
                Ordine totale:
                    <span>{calcularTotalCantidadCarrito()}</span>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center px-0">
                  Consegna:
                    <span>Gratuito</span>
                  </MDBListGroupItem>
                  <MDBListGroupItem
                    className="d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                    <div>
                      <strong>Totale:</strong>
                    </div>
                    <span>
                      <strong>${calcularTotalCarrito()}</strong>
                    </span>
                  </MDBListGroupItem>
                </MDBListGroup>

                <MDBBtn  className="btn-comprar" block size="lg">
                Procedi all'acquisto
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
      );
    };

export default Carrito;
