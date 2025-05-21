import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge'; ``
import Button from 'react-bootstrap/Button';
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../assets/styles/dish.scss"

export default function Dish({ title, price, img, isNew }) {
    const { dispatch } = useContext(CartContext);
    return (
        <Card>
            {isNew && <Badge bg="primary">FRESHLY NEW</Badge>}
            <Card.Img src={img} alt={title} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {price}€
                </Card.Text>
                <Button variant="primary" onClick={() => dispatch({ type: "increment"})}>Ajouter du panier</Button>
                <Button variant="primary" onClick={() => dispatch({ type: "decrement"})}>Retirer du panier</Button>
            </Card.Body>
        </Card>
    )
};
