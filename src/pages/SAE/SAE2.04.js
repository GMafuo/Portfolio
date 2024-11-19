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
          <Fade bottom duration={1000} distance="40px">
            <div className="experience-card">
              <h2 style={{ color: theme.text }}>Description de la SAE</h2>
              <p style={{ color: theme.secondaryText }}>
                Cette SAE avait pour but la création d'un site d'e-commerce de
                vente de meubles en ligne de plus une présentation en anglais de
                nos actions et de l'utilisation du site a été faite en anglais
                lors d'un oral.
              </p>
            </div>
          </Fade>
          <div className="experience-grid">
            <Fade left duration={1000} distance="40px">
              <div className="experience-card">
                <h2 style={{ color: theme.text }}>Mes actions 📽️</h2>
                <p style={{ color: theme.secondaryText }}>
                  Pour cette SAE je me suis occupé de la partie commentaire du
                  côté administrateur et client ainsi tout ce qui va concerner
                  les notes mises sur un meuble ainsi que la note moyenne sur
                  chaque meuble. Chaque commentaire ne peut être posté que si un
                  meuble est commandé et du côté admin des graphiques ainsi que
                  la visualisation des commentaires est possible
                  l'administrateur peut bien évidemment supprimer un commentaire
                  qu'il juge par exemple inapproprié.
                </p>
                <p style={{ color: theme.secondaryText }}>
                  J'ai bien évidemment présenté cette partie lors de l'oral
                  d'anglais.
                </p>
              </div>
            </Fade>
            <Fade left duration={1000} distance="40px">
              <div className="experience-card">
                <h2 style={{ color: theme.text }}>Chose à améliorer 📝</h2>
                <ul style={{ color: theme.secondaryText }}>
                  <li>
                    Une liberté plus grande quant à la création du site aurait
                    été appropriée.
                  </li>
                  <li>
                    L'aspect visuel aurait pu être amélioré puisqu'il ne
                    correspond pas esthétiquement à ce que nous aurions voulu.
                  </li>
                </ul>
              </div>
            </Fade>
            <Fade right duration={1000} distance="40px">
              <div className="experience-image-container">
                <h2 style={{ color: theme.text }}>MCD du site</h2>
                <img
                  src={require("../../assests/images/mcd_projet.jpg")}
                  alt="MCD du site"
                  className="experience-image"
                />
              </div>
            </Fade>
          </div>

          <div className="experience-last-grid">
            <Fade bottom duration={1000} distance="40px">
              <div className="experience-card">
                <h2 style={{ color: theme.text }}>Compétences apportées</h2>
                <p style={{ color: theme.secondaryText }}>
                  Cette SAE nous a finalement permis de récupérer la compétence
                  2.04 et 2.03 concernant essentiellement la conception et
                  mettre en place une base de données à partir d'un cahier des
                  charges client et l'installation d'un poste de travail.
                </p>
                <p style={{ color: theme.secondaryText }}>
                  La mise en pratique de cette compétence nous a permis de
                  continuer à améliorer et approuver celle-ci puisque nous avons
                  déjà fait un projet similaire auparavant.
                </p>
              </div>
            </Fade>

            <Fade bottom duration={1000} distance="40px">
              <div className="experience-card">
                <h2 style={{ color: theme.text }}>Site entier</h2>
                <p style={{ color: theme.secondaryText }}>
                  Voici le zip regroupant le projet en entier que vous pouvez
                  téléchargez ici :
                </p>
                <p style={{ color: theme.secondaryText }}>
                  <a
                    href="../ assests/images/SAE_3.4.5.zip"
                    style={{ color: theme.link }}
                    download="SAE_3.4.5.zip"
                  >
                    📁 SAE_3.4.5.zip
                  </a>
                </p>
              </div>
            </Fade>

            <Fade bottom duration={1000} distance="40px">
              <div className="experience-card">
                <h2 style={{ color: theme.text }}>
                  Poursuivre la validation des compétences
                </h2>
                <p style={{ color: theme.secondaryText }}>
                  Pour poursuivre la validation de cette compétence la création
                  d'un autre site de commerce peut s'avérer preuve de poursuite
                  de ses compétences afin de travailler et retravailler ce qui a
                  été vu lors de cette SAE.
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
