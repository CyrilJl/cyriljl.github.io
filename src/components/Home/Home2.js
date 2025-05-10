import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              PRÉSENTATION <span className="purple"> PROFESSIONNELLE </span>
            </h1>
            <p className="home-about-body">
              
                Je suis ingénieur spécialisé en <b className="purple">mathématiques appliquées,</b> avec une dominante en <b className="purple">apprentissage statistique</b> et <b className="purple">assimilation de données</b>.
              
              <br />
              <br />
              
                <b className="purple">Expert en Python</b>, je développe aussi en <b className="purple">R</b>, et me forme actuellement au <b className="purple">Rust</b>.
              
              <br />
              <br />
              
                Passionné par les <b className="purple">données temporelles</b> et <b className="purple">géospatiales</b>, j'ai développé un intérêt croissant pour toute l'<b className="purple">algorithmie liée à la compression</b> (lossy ou lossless) au fil de mes progrès en <b className="purple">data engineering</b>.
              
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>RETROUVEZ-MOI SUR</h1>
            <p>
              N'hésitez pas à <span className="purple">me contacter</span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/CyrilJl"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/cyril-joly-ml"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;