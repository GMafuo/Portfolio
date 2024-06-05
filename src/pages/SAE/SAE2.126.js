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
                Cette SAE avait pour but la création d'un mini-jeux avec un
                groupe de 6 personnes, nous avons choisi le Kamisado. Un rapport
                sur la comparaison des performances des 2 ia a été demandé et
                enfin un rapport regroupant une question économique (Quelles
                types d’actions judiciaires peuvent être envisagées à l’encontre
                d’un contrefacteur d’un jeu et devant quel tribunal de
                juridiction ?) et un résumé de la SAE avec nos ressentis
                personnels, les difficultés rencontrées ... Enfin une soutenance
                en fin d'année s'est tenu pour faire un résumé de cette SAE.
              </p>
            </div>
          </Fade>
          <div className="experience-grid">
            <Fade left duration={1000} distance="40px">
              <div className="experience-card">
                <h2 style={{ color: theme.text }}>Mes actions 📽️</h2>
                <p style={{ color: theme.secondaryText }}>
                  Pour cette SAE je me suis occupé du fichier KamisadoStageModel
                  dans le kamisado mais aussi d'une partie de la conception de
                  la deuxième IA consistant à compté des points de défense et
                  d'attaque afin de choisir le meilleur moyen de gagner. Au
                  niveau de la première IA j'ai seulement réfléchi à la
                  stratégie de celle-ci et j'ai aussi fait toute la javadoc des
                  fichiers présents dans le projet. La question économique qui
                  figure dans le projet je m'en suis occupé et j'ai bien sur
                  développé ma ressentie lors de cette SAE.
                </p>
              </div>
            </Fade>
            <Fade left duration={1000} distance="40px">
              <div className="experience-card">
                <h2 style={{ color: theme.text }}>Chose à améliorer 📝</h2>
                <ul style={{ color: theme.secondaryText }}>
                  <li>Rendre le jeu plus interactif et plus visuel</li>
                  <li>
                    La longueur de certaines fonctions je pense que l'on peut
                    optimiser le code afin de réduire sa taille.
                  </li>
                </ul>
              </div>
            </Fade>
            <Fade right duration={1000} distance="40px">
              <div className="experience-image-container">
                <h2 style={{ color: theme.text }}>MCD du site</h2>
                <img
                  src={require("../../assests/images/Kamisado.png")}
                  alt="MCD du site"
                  className="experience-image"
                />
              </div>
            </Fade>
          </div>

          <div className="experience-last-grid">
            <Fade bottom duration={1000} distance="40px">
              <div className="experience-card">
                <h2 style={{ color: theme.text }}>Compétence apporté</h2>
                <p style={{ color: theme.secondaryText }}>
                  Cette SAE nous a finalement permis de récupérer la compétence
                  1,2, 6 concernant essentiellement la réalisation du
                  développement d'une application, optimisation des applications
                  informatiques et enfin le travail en groupe dans une équipe
                  informatique.
                </p>
                <p style={{ color: theme.secondaryText }}>
                  La mise en pratique de ses compétences m'a permis de me rendre
                  compte de mes faiblesses et points forts dans le développement
                  d'applications mais d'aussi m'entrainer à m'entendre avec mon
                  groupe même dans les moments de rush afin de rester clair et
                  net concernant la compréhension de nos propos.
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
                    download="Kamisado.zip"
                  >
                    📁 Kamisado.zip
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
                  Pour poursuivre la validation de ses compétences la création
                  d'un autre mini-jeux en groupe va permettre se recrée la
                  situation dans laquelle nous étions et ainsi rappelés les
                  mêmes compétences afin de continuer à les améliorer.
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
