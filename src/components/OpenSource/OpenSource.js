import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import icon_optimask from "../../Assets/Projects/icon_optimask.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function OpenSource() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mes projets <strong className="purple">open source </strong>
        </h1>
        <p style={{ color: "white" }}>
          Mes principaux projets open source, sous forme de package python (disponibles sur PyPI et conda-forge).
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={icon_optimask}
              isBlog={false}
              title="OptiMask"
              description="OptiMask résout le problème d'optimisation suivant : dans une matrice contenant des valeurs
              manquantes, quelle est la plus grande sous-matrice (pas forcément contiguë) sans valeurs manquante ?
              OptiMask implémente une heuristique répondant à ce problème, y compris pour des matrices de grande taille.
              OptiMask repose en grande partie sur numba pour les performances."
              ghLink="https://github.com/CyrilJl/OptiMask"
              documentationLink="https://optimask.readthedocs.io"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="TimeFiller"
              description="Un package python conçu pour l'imputation de données manquantes de séries temporelles, mais
              également la prévision dans des contextes où les variables explicatives comportent aussi des valeurs
              manquantes. Le package est facile d'utilisation et s'interface avec scikit-learn."
              ghLink="https://github.com/CyrilJl/TimeFiller"
              documentationLink="https://timefiller.readthedoc.io"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="meteofetch"
              description="Un client python pour récupérer les données des modèles Arome et Arpege de MétéoFrance sans
              clé d'API. meteoftech télécharge et met en forme les fichiers grib mis à disposition par MétéoFrance sous
              forme de xarray.DataArray."
              ghLink="https://github.com/CyrilJl/meteoftech"
              documentationLink="https://meteofetch.readthedoc.io"    
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default OpenSource;
