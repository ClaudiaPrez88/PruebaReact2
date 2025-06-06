
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Slider = () => {
  return (
    <>
      <Container id='slider' fluid>
        <Row>
          <Col xs={12} md={6} className='col1-slider'>
            <h1 className='titulo-slider'>Oltre 100 anni di amore per la pizza</h1>
          </Col>
          <Col xs={12} md={6}>
           <div id='slider'>
              <Carousel>
                <Carousel.Item className='img1'>
                </Carousel.Item>
                <Carousel.Item className='img2'>
                </Carousel.Item>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </>

   
  )
}
