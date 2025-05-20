import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge'; ``
import Button from 'react-bootstrap/Button';
import "../assets/styles/dish.scss"

export default function Dish({ title, price, img, isNew, addToCart }) {
    return (
        <Card>
            {isNew && <Badge bg="primary">FRESHLY NEW</Badge>}
            <Card.Img src={img} alt={title} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {price}€
                </Card.Text>
                <Button variant="primary" onClick={addToCart}>Ajouter à la lunchbox</Button>
            </Card.Body>
        </Card>
    )
};
