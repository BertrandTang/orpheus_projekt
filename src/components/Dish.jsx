import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge'; ``
import Button from 'react-bootstrap/Button';

import "../assets/styles/dish.scss"

export default function Dish({ title, price, img, isNew }) {
    const handleClick = (title) => {
        alert(
            `Le plat ${title} est maintenant dans votre panier`
        )
    };
    return (
        <Card>
            {isNew ? (<Badge bg="primary">FRESHLY NEW</Badge>) : null}
            <Card.Img src={img} alt={title} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {price}€
                </Card.Text>
                <Button variant="primary" onClick={() => handleClick(title)}>Ajouter à la lunchbox</Button>
            </Card.Body>
        </Card>
    )
};
