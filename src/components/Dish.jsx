import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge'; ``
import Button from 'react-bootstrap/Button';
import useCart from '../hooks/useCart.js';
import "../assets/styles/dish.scss"

export default function Dish({ title, price, img, isNew }) {
    const { addToCart, removeFromCart } = useCart();
    return (
        <Card>
            {isNew && <Badge bg="primary">FRESHLY NEW</Badge>}
            <Card.Img src={img} alt={title} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {price}€
                </Card.Text>
                <Button variant="primary" onClick={addToCart}>Ajouter du panier</Button>
                <Button variant="primary" onClick={removeFromCart}>Retirer du panier</Button>
            </Card.Body>
        </Card>
    )
};
