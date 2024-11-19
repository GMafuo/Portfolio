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
                Cette SAE avait pour but la création d'un compte rendu
                économique, un calcul d'évaluation des ressources, un Gantt /
                pert avec un rapport en français concernant notre site
                d'e-commerce fait précédemment et un rapport en anglais sur
                l'économie du projet.
              </p>
            </div>
          </Fade>
          <div className="experience-grid">
            <Fade left duration={1000} distance="40px">
              <div className="experience-card">
                <h2 style={{ color: theme.text }}>Mes actions 📽️</h2>
                <p style={{ color: theme.secondaryText }}>
                  Pour cette SAE je me suis occupé de la partie véhicule
                  c'est-à-dire avoir et pouvoir récupérer la plaque
                  d'immatriculation la couleur ou encore la marque de la
                  voiture. J'ai aussi travaillé sur une grande partie du rapport
                  d'analyse des besoins dont le but était de décrire
                  l'organisation/l'entreprise et ses besoins, une synthèse des
                  données pertinentes.
                </p>
              </div>
            </Fade>
            <Fade right duration={1000} distance="40px">
              <div className="experience-card">
                <h2 style={{ color: theme.text }}>Chose à améliorer 📝</h2>
                <ul style={{ color: theme.secondaryText }}>
                  <li>
                    Se pencher plus sur le calendrier donné afin de ne pas être
                    pris de court
                  </li>
                  <li>
                    étendre le sujet afin de toucher pas une petite commune mais
                    bien plus afin de donner plus de possibilités à la création
                    de l'application.
                  </li>
                </ul>
              </div>
            </Fade>
          </div>

          <div className="experience-grid">
            <Fade bottom duration={1000} distance="40px">
              <div className="experience-card">
                <h2 style={{ color: theme.text }}>Compétences apportées</h2>
                <p style={{ color: theme.secondaryText }}>
                  Cette SAE nous a finalement permis de récupérer la compétence
                  1.4 concernant essentiellement la conception et
                  l'administration des données d'une entreprise et la mise à
                  disposition de ces informations.
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
                <h2 style={{ color: theme.text }}>
                  Poursuivre la validation des compétences
                </h2>
                <p style={{ color: theme.secondaryText }}>
                  Pour poursuivre la validation de cette compétence un exercice
                  du même type peut être intéressant à refaire pour continuer à
                  manipuler les données / apportes une réflexion à la création
                  d'une application.
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
