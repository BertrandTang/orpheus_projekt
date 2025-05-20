import Header from "./components/Header";
import Footer from "./components/Footer";
import Dish from "./components/Dish";
import "./assets/styles/main.scss"
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Dishes() {
  const dishes = [
    { id: 1, title: "Tacos à l'unité", price: 3, stock: 12, img: "https://cdn.pixabay.com/photo/2016/08/23/08/53/tacos-1613795_960_720.jpg", isNew: true },
    { id: 2, title: "Enchiladas", price: 12, stock: 0, img: "https://cdn.pixabay.com/photo/2014/01/14/22/13/mexican-245240_960_720.jpg", isNew: false },
    { id: 3, title: "Mole poblano", price: 15, stock: 5, img: "https://cdn.pixabay.com/photo/2021/02/04/03/57/mole-5980185_960_720.jpg", isNew: false },
  ];

  const filteredDishes = dishes.filter(dish => dish.stock > 0);

  return (
    <Container as="main">
      <Row>
          {filteredDishes.map(dish => (
            <Col md={4} key={dish.id}>
                <Dish
                  title={dish.title}
                  price={dish.price}
                  img={dish.img}
                  isNew={dish.isNew}
                />
            </Col>
          ))}
      </Row>
    </Container >
  );
}

function App() {
  return (
    <>
      <Header />
      <Dishes />
      <Footer />
    </>
  );
}

export default App;
