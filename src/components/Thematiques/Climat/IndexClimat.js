import { Col, Container, Row } from "react-bootstrap";

const IndexClimat = () => {
  return (
    <Container fluid className="home-about-section">
      <Container>
        <Row>
          <Col md={12} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Thématique <span className="purple">Climat</span> (et open data)
            </h1>
            <p className="home-about-body">
              <br />
              <br />
              Quelques éléments sur la modélisation climatique et les données
              auxquelles on peut accéder en open data. C'est une partie du site
              autant pour être lue que pour moi, comme prise de notes.
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default IndexClimat;
