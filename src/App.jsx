import Header from "./components/Header";
import Footer from "./components/Footer";
import Dish from "./components/Dish";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import "./assets/styles/main.scss"
import 'bootstrap/dist/css/bootstrap.min.css'

function Dishes() {
  const dishes = [
    { title: "Tacos à l'unité", price: 3, stock: 12, img: "https://cdn.pixabay.com/photo/2016/08/23/08/53/tacos-1613795_960_720.jpg", isNew: true },
    { title: "Enchiladas", price: 12, stock: 0, img: "https://cdn.pixabay.com/photo/2014/01/14/22/13/mexican-245240_960_720.jpg", isNew: false },
    { title: "Mole poblano", price: 15, stock: 5, img: "https://cdn.pixabay.com/photo/2021/02/04/03/57/mole-5980185_960_720.jpg", isNew: false },
  ];

  const [showNewOnly, setShowNewOnly] = useState(false);
  const handleShowNewOnly = () => {
    setShowNewOnly(!showNewOnly); // Inverse le booléen
  };
  
// showNewOnly = false, donc initialement la page affiche tous les plats car !showNewOnly est true. 
// Pareil pour l'affichage sur le bouton, on affiche "Nouveauté" car !showNewOnly est true. 
// Quand on clique, on fait passer !showNewOnly à false (car showNewOnly passe à true).
  const filteredDishes = dishes.filter(dish => dish.stock > 0 && (!showNewOnly || dish.isNew));

  return (
    <Container as="main">
      <Button variant="primary" onClick={handleShowNewOnly}>{!showNewOnly ? "Nouveautés Uniquement" : "Voir tous les plats"}</Button>
      <Row>
        {filteredDishes.map((dish, index) => (
          <Col md={4} key={index}>
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
