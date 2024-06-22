import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';


function Contenedor({imagen,titulo,ingredientes,precio,id,agregarAlCarrito}) {

  const navigate = useNavigate();
  const handleNavigate = (id) => {
    window.scrollTo(0, 0);
    navigate(`/pizza/${id}`);
  };
  const handleAgregarAlCarrito = () => {
    agregarAlCarrito(id);
  };
   

  return (
    <div>
      <Card>
      <Card.Img variant="top" src={imagen} />
      <Card.Body>
        <Card.Title>{titulo}</Card.Title>
        <Card.Text>
        <p className='ingredientes'>
              {ingredientes.join(', ')}
            </p>
        </Card.Text>
        <p className='price'>Prezzo: ${precio}</p>
        <div className='botones'>
      <Button className='btn-detalle' onClick={() => handleNavigate(id)}>Dettagli</Button>
      <Button className='btn-comprar' onClick={handleAgregarAlCarrito}>Aggiungi</Button>
    </div>
      </Card.Body>
    </Card>
    
    </div>
  )
}

Contenedor.propTypes = {}

export default Contenedor

