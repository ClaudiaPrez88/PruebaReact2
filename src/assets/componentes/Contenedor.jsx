import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';


function Contenedor({imagen,titulo,ingredientes,precio,id,agregarAlCarrito}) {

  const navigate = useNavigate();
  const handleNavigate = (id) => {
    navigate(`/pizza/${id}`);
  };
  const handleAgregarAlCarrito = () => {
    agregarAlCarrito(id);
  };
   

  return (
    <div>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imagen} />
      <Card.Body>
        <Card.Title>{titulo}</Card.Title>
        <Card.Text>
        <p className='ingredientes'>
              {ingredientes.join(', ')}
            </p>
        </Card.Text>
        <p className='price'>Precio: ${precio}</p>
        <div className='botones'>
          <Button className='btn-detalle' onClick={() => handleNavigate(id)}>Ver más</Button>
          <Button className='btn-comprar' onClick={handleAgregarAlCarrito}>añadir</Button>
        </div>
      </Card.Body>
    </Card>
    </div>
  )
}

Contenedor.propTypes = {}

export default Contenedor

