import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Logo from "../../../public/pizza-ico.png"

export const Footer = () => {
  return (
    <div>
        <Container id='footer' fluid>
            <Row>
                <Col md={6} className='fot-col1'>
                    <Row>
                    <Col  md={6}>
                        <img src={Logo} alt="Logo"  className='logo'/>
                        <h3 className='logo-texto'>Pizza al taglio</h3>
                        <br></br>
                        <h5>Orari</h5>
                            <p>Lunedi al Venerdi: 10:00 – 22:00</p>
                            <p>Fine settimana: 12:00 -  22:00</p>
                        </Col>
                        <Col className='indirizzo' md={6}>
                            <h5>Indirizzo</h5>
                            <p>1614 E. Bell Rd #104.
                                Salerno, AZ 85022
                                (602) 867-1010</p>
                            <p>204 E. Pizzetta Tommaso
                                Sorrento, AZ 85022
                                (358) 867-1010</p>
                            <p>Vale Puglia 54
                                Torre Del Greco AZ 85022
                                (359) 867-1010</p>
                            <p>Corso Itali AA
                                Naples, AZ 85022
                                (989) 867-1010</p>
                        </Col>
                        
                    </Row>
                </Col>
                <Col md={6} className='fot-col2'>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
