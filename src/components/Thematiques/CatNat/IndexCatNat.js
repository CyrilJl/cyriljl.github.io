import { Col, Container, Row } from "react-bootstrap";

const IndexCatNat = () => {
  return (
    <Container fluid className="home-about-section">
      <Container>
        <Row>
          <Col md={12} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Thématique <span className="purple">catastrophes naturelles</span>{" "}
              (et open data)
            </h1>
            <p className="home-about-body">
              <br />
              <br />
              Quelques éléments sur la modélisation de catastrophes naturelles
              et les données que l'on peut trouver en open data. C'est une
              partie du site autant pour être lue que pour moi, comme prise de
              notes.
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default IndexCatNat;
