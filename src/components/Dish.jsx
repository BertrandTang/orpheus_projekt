import Card from 'react-bootstrap/Card';
import "../assets/styles/dish.scss"

export default function Dish({ title, price, img }) {
    return (
        <Card>
            <Card.Img src={img} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {price}€
                </Card.Text>
            </Card.Body>
        </Card>
    )
};
