import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Noticias = () => {
  return (
    <Container id='noticias'>
      <Row>
        <Col md={3}>
            <img src="../../../public/h3-img-1.jpeg" alt="Logo"  className='img-banner'/>
        </Col>
        <Col md={3}>
             <img src="../../../public/h3-img-2.jpeg" alt="Logo"  className='img-banner'/>
        </Col>
        <Col md={3}>
            <img src="../../../public/h3-img-3.jpeg" alt="Logo"  className='img-banner'/>
        </Col>
        <Col md={3}>
            <img src="../../../public/h3-img-4.jpeg" alt="Logo"  className='img-banner'/>
        </Col>
      </Row>
    </Container>
  )
}
