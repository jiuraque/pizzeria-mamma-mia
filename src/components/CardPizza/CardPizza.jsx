import { Card, Button } from 'react-bootstrap';
import { formatPrice } from '../../utils/FormatPrice';

const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div className="col-md-4 mb-4">
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <strong>Ingredientes:</strong>
            <ul>
              {ingredients.map((ing, index) => (
                <li key={index}>{ing}</li>
              ))}
            </ul>
            <strong>Precio:</strong> ${formatPrice(price)}
          </Card.Text>
          <div className="d-flex justify-content-between">
            <Button variant="primary">Ver más</Button>
            <Button variant="success">Añadir más</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardPizza;

