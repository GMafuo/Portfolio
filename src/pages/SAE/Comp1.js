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
                  Développer des applications informatiques simples
                </h2>
                <ul style={{ color: theme.secondaryText }}>
                  <p style={{ color: theme.secondaryText }}>
                    Dans le cadre de la SAÉ, nous avons conçu et implémenté une
                    application mobile pour Android qui permettait de capturer
                    des vidéos des tests de réflexe. Ce processus m'a permis de
                    m'initier à la conception et à l'implémentation de solutions
                    simples, en veillant à ce que l'application soit intuitive
                    et facile à utiliser pour les scientifiques. De plus, j'ai
                    participé à la conception modulaire de l'API Node.js et du
                    serveur Java, facilitant ainsi la maintenance et l'évolution
                    future de l'application. <br></br> <br></br>
                    Parallèlement, durant mon stage, j'ai été impliqué dans la
                    conception d'une interface utilisateur pour une application
                    mobile interne, ce qui m'a permis de mettre en pratique mes
                    compétences en matière de conception simple et
                    fonctionnelle. J'ai également utilisé de nombreuses API
                    permettant de faire de cette application la plus réaliste
                    possible.
                  </p>
                </ul>
              </div>
            </Fade>
            <Fade right duration={1000} distance="40px">
              <div className="experience-image-container, experience-image-arduino">
                <h2 style={{ color: theme.text }}>Arduino SAE</h2>
                <img
                  src={require("../../assests/images/Arduino.png")}
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
                  {" "}
                  Partir des exigences et aller jusqu’à une application complète
                </h2>
                <p style={{ color: theme.secondaryText }}>
                  L'élaboration et l'implémentation des spécifications
                  fonctionnelles et non fonctionnelles à partir des exigences
                  étaient au cœur de notre projet de SAÉ. Nous avons défini des
                  spécifications précises pour chaque composant de
                  l'application, incluant les micro-contrôleurs, le serveur
                  d'analyse, et le serveur de centralisation des données. Cela
                  m'a permis de comprendre l'importance de travailler à partir
                  de spécifications claires pour développer une application
                  complète et fonctionnelle.
                </p>
                <p style={{ color: theme.secondaryText }}>
                  De plus, nous avons appliqué les principes d'ergonomie et
                  d'accessibilité en développant l'interface utilisateur en
                  Vue.js pour afficher les résultats des tests de réflexe sous
                  forme de graphiques. Ces compétences en matière de conception
                  ergonomique ont été renforcées pendant mon stage, où j'ai
                  travaillé sur l'amélioration visuel de l'application mobile à
                  partir de celle du web, rendant celle-ci plus agréable et
                  utilisable même si nous sommes dans la rue ou dans les
                  transports !
                </p>
              </div>
            </Fade>

            <Fade bottom duration={1000} distance="40px">
              <div className="experience-image-container, experience-image-optimisation">
                <h2 style={{ color: theme.text }}>Arduino SAE</h2>
                <img
                  src={require("../../assests/images/Optimisationmobile.jpg")}
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
                  {" "}
                  Adapter des applications sur un ensemble de supports
                </h2>
                <p style={{ color: theme.secondaryText }}>
                  Dans notre projet de SAÉ, nous avons choisi une architecture
                  basée sur des micro-services pour garantir la scalabilité et
                  la flexibilité de l'application. Cette décision a été cruciale
                  pour le succès de notre projet, car elle nous a permis
                  d'adapter notre solution à différents environnements et
                  besoins. En utilisant Docker, nous avons déployé notre
                  application dans des conteneurs, assurant ainsi une cohérence
                  entre les environnements de développement et de production.
                </p>
                <p style={{ color: theme.secondaryText }}>
                  Pendant mon stage, j'ai également contribué à la migration de
                  l'application web vers une version mobile. J'ai adapté chaque
                  partie de l'application pour qu'elle corresponde au maximum à
                  la version web existante, afin que les développeurs ne soient
                  pas désorientés lorsqu'ils reprendront l'application plus
                  tard.
                </p>
              </div>
            </Fade>

            <Fade bottom duration={1000} distance="40px">
              <div className="experience-card">
                <h2 style={{ color: theme.text }}>Conclusion</h2>
                <p style={{ color: theme.secondaryText }}>
                  En conclusion, la réalisation de la SAÉ et mon expérience de
                  stage m'ont permis d'acquérir et de renforcer la compétence 1,
                  à savoir la réalisation d'un développement d'application. J'ai
                  développé des applications informatiques simples, travaillé à
                  partir des exigences pour créer des applications complètes, et
                  adapté des solutions sur divers supports. Ces expériences
                  m'ont permis de maîtriser les bonnes pratiques de
                  développement et d'adaptation des applications, tout en
                  répondant aux exigences variées et complexes des projets sur
                  lesquels j'ai travaillé.
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
