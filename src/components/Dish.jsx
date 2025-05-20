import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';
import "../assets/styles/dish.scss"

export default function Dish({ title, price, img, isNew }) {
    return (
        <Card>
            {isNew ? (
                <Stack direction="horizontal">
                    <Badge bg="primary">FRESHLY NEW</Badge>
                </Stack>) : null}
            <Card.Img src={img} alt={title} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {price}€
                </Card.Text>
            </Card.Body>
        </Card>
    )
};
