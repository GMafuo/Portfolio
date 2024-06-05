import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import "./CSS/SAE2.04.css";

class Experience extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="experience-main">
        <Header theme={theme} />
        <div className="basic-experience">
          <div className="experience-grid">
            <Fade left duration={1000} distance="40px">
              <div className="experience-card">
                <h2 style={{ color: theme.text }}>
                  Identifier ses aptitudes pour travailler dans une équipe
                </h2>
                <ul style={{ color: theme.secondaryText }}>
                  <p style={{ color: theme.secondaryText }}>
                    Pendant la SAÉ, notre projet nécessitait une collaboration
                    étroite entre cinq étudiants, chacun apportant des
                    compétences spécifiques. J'ai appris à appréhender notre
                    projet et à découvrir les aptitudes requises selon les
                    différents secteurs informatiques que nous avons abordés,
                    tels que le développement mobile, la gestion de bases de
                    données et la création d'API. J'ai pu identifier les
                    statuts, les fonctions et les rôles de chaque membre de
                    l'équipe, ce qui a facilité une répartition efficace des
                    tâches et une meilleure synergie <br></br> <br></br>
                    Au cours de mon stage, j'ai acquis des compétences
                    interpersonnelles importantes pour travailler en équipe.
                    J'ai collaboré avec des développeurs, des chefs de projet et
                    des designers, ce qui m'a permis de comprendre l'importance
                    de la communication et de la collaboration dans le succès
                    d'un projet informatique.
                  </p>
                </ul>
              </div>
            </Fade>
            <Fade right duration={1000} distance="40px">
              <div className="experience-image-container, experience-image-trello">
                <h2 style={{ color: theme.text }}>Trello SAE</h2>
                <img
                  src={require("../../assests/images/Trello.png")}
                  alt="MCD du site"
                  className="experience-image"
                />
              </div>
            </Fade>
          </div>

          <div className="experience-grid">
            <Fade bottom duration={1000} distance="40px">
              <div className="experience-card">
                <h2 style={{ color: theme.text }}>
                  Situer son rôle et ses missions au sein d’une équipe
                  informatique
                </h2>
                <p style={{ color: theme.secondaryText }}>
                  L'intégration à la SAÉ fût beaucoup plus simple étant donné
                  que nous sommes amis avant tout. J'ai pu collaborer
                  efficacement avec mes collègues, partager des idées et des
                  solutions, et rendre compte régulièrement de l'avancement de
                  mon travail. Cela a été crucial pour garantir que nous
                  restions tous alignés sur les objectifs du projet.
                </p>
                <p style={{ color: theme.secondaryText }}>
                  Mon stage m'a également permis de comprendre la diversité, la
                  structure et la dimension de l'informatique dans une
                  organisation. J'ai participé à des réunions d'équipe,
                  contribué à des discussions et rendu compte de mon activité
                  grâce à des réunions. De plus l'utilisation de GitHub a été
                  essentielle pour suivre l'avancement du projet de mon collègue
                  et sécuriser le code en cas de perte. GitHub permet une
                  collaboration en temps réel, un suivi des modifications et un
                  stockage fiable, garantissant ainsi la continuité et la
                  sécurité du développement. Cette expérience m'a aidé à
                  comprendre comment intégrer une équipe informatique et
                  apporter une valeur ajoutée grâce à une communication claire
                  et efficace.
                </p>
              </div>
            </Fade>

            <Fade right duration={1000} distance="40px">
              <div className="experience-image-container, experience-image-git">
                <h2 style={{ color: theme.text }}>Github SAE</h2>
                <img
                  src={require("../../assests/images/Github.png")}
                  alt="MCD du site"
                  className="experience-image"
                />
              </div>
            </Fade>
          </div>

          <div className="experience-grid">
            <Fade bottom duration={1000} distance="40px">
              <div className="experience-card">
                <h2 style={{ color: theme.text }}>
                  Manager une équipe informatique
                </h2>
                <p style={{ color: theme.secondaryText }}>
                  Bien que je n'aie pas été en position de manager une équipe
                  entière, j'ai eu l'occasion de prendre des initiatives pour
                  organiser et partager des informations pertinentes avec mes
                  collègues. Par exemple, pendant la SAÉ, j'ai proposé des idées
                  comme la détection de visage avec l'application mobile. Dans
                  mon stage, j'ai pu proposé et parfois dirigé certaines tâches
                  concernant le projet qui me semblait plus intéressante ou plus
                  importantes.
                </p>
                <p style={{ color: theme.secondaryText }}>
                  De plus, l'utilisation de Trello un outil de gestion de projet
                  en ligne qui facilite l'organisation et la répartition des
                  tâches au sein d'une équipe. Grâce à son interface intuitive
                  basée sur des cartes et des tableaux, Trello permet aux
                  utilisateurs de visualiser facilement l'état d'avancement des
                  projets. Chaque membre de l'équipe peut créer, assigner et
                  suivre des tâches spécifiques, ce qui améliore la
                  collaboration et la communication.
                </p>
              </div>
            </Fade>

            <Fade bottom duration={1000} distance="40px">
              <div className="experience-card">
                <h2 style={{ color: theme.text }}>Conclusion</h2>
                <p style={{ color: theme.secondaryText }}>
                  En résumé, les expériences acquises lors de la SAÉ et de mon
                  stage ont été cruciales pour développer la compétence 6, à
                  savoir collaborer au sein d'une équipe informatique. J'ai
                  appris à m'intégrer efficacement dans une équipe, à
                  communiquer et à collaborer avec divers professionnels, et à
                  participer activement à la gestion de projets. Ces compétences
                  sont essentielles pour réussir dans le domaine de
                  l'informatique et continuer à développer des solutions
                  innovantes en équipe.
                </p>
              </div>
            </Fade>
          </div>
        </div>
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Experience;
