import Header from "./components/Header";
import Footer from "./components/Footer";
import Dish from "./components/Dish";
import "./assets/styles/main.scss"
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <>
      <Header />
      <main>
      <Container>
        <Row>
          <Col>
            <Dish
              title={"Tacos à l'unité"}
              price={3}
              img={
                "https://cdn.pixabay.com/photo/2016/08/23/08/53/tacos-1613795_960_720.jpg"
              }
            />
          </Col>
          <Col>
            <Dish
              title={"Enchiladas"}
              price={12}
              img={
                "https://cdn.pixabay.com/photo/2014/01/14/22/13/mexican-245240_960_720.jpg"
              }
            />
          </Col>
          <Col>
            <Dish
              title={"Mole poblano"}
              price={15}
              img={
                "https://cdn.pixabay.com/photo/2021/02/04/03/57/mole-5980185_960_720.jpg"
              }
            />
          </Col>
        </Row>
      </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
