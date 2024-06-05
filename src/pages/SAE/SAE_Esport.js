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
                Cette SAE avait pour objectif de fournir toutes les informations
                nécessaires sur un événement Esport compétitif. Sur la page
                d'accueil de notre site, vous trouverez toutes les informations
                importantes de l'événement, telles que la date, l'heure et le
                lieu. Nous avons également mis en avant les différents jeux qui
                seront disponibles lors de la compétition, avec des descriptions
                courtes et intéressantes pour vous donner un aperçu de chaque
                titre. Une fonctionnalité pratique que nous avons intégrée est
                une carte interactive. Elle vous permettra de vous orienter
                facilement sur le lieu de l'événement. Vous pourrez repérer les
                différentes zones, comme les salles de jeu, les stands des
                exposants et les espaces de restauration. Cliquez simplement sur
                les points d'intérêt pour obtenir des informations détaillées
                sur chaque emplacement. Enfin, nous avons également inclus un
                calendrier des matchs sur notre site. Il vous donnera tous les
                détails sur les différents matchs qui auront lieu pendant
                l'événement, y compris les équipes participantes, les jeux joués
                et les horaires précis.
              </p>
            </div>
          </Fade>
          <div className="experience-grid">
            <Fade left duration={1000} distance="40px">
              <div className="experience-card">
                <h2 style={{ color: theme.text }}>Mes actions 📽️</h2>
                <p style={{ color: theme.secondaryText }}>
                  {" "}
                  Dans ce projet, j'ai principalement été responsable du
                  développement du front-end, ce qui inclut la création des
                  maquettes et la sélection des couleursVoici quelques-unes de
                  mes réalisations spécifiques : <br /> <br /> 🎨 Conception des
                  maquettes : J'ai élaboré les maquettes du site web en
                  utilisant des outils de conception. J'ai créé une structure
                  visuelle claire et intuitive pour chaque page, en m'assurant
                  que les éléments importants étaient mis en valeur. <br />{" "}
                  <br /> 🌈 Choix des couleurs : J'ai pris part à la sélection
                  des couleurs pour le site web, en m'assurant de choisir une
                  palette harmonieuse qui correspondait à l'ambiance et au thème
                  de l'événement Esport. J'ai utilisé mes connaissances en
                  design et en psychologie des couleurs pour créer une
                  atmosphère attrayante et engageante. <br /> <br /> 🖼️
                  Intégration des éléments graphiques : J'ai travaillé sur
                  l'intégration des éléments graphiques dans le site web, tels
                  que les logos, les images et les icônes. J'ai veillé à ce que
                  ces éléments soient bien intégrés à la conception globale et
                  contribuent à renforcer l'identité visuelle de l'événement.{" "}
                  <br /> <br /> Ces réalisations dans le domaine du front-end
                  ont contribué à créer une expérience visuelle attrayante,
                  conviviale et immersive pour les participants et les
                  spectateurs de l'événement Esport. 🎮🎉{" "}
                </p>
              </div>
            </Fade>
            <Fade left duration={1000} distance="40px">
              <div className="experience-card">
                <h2 style={{ color: theme.text }}>Chose à améliorer 📝</h2>
                <ul style={{ color: theme.secondaryText }}>
                  <li>
                    Optimisation des performances : ⏩🔧 S'assurer que notre
                    site web se charge rapidement et offre une navigation
                    fluide. Nous pouvons envisager de réduire la taille des
                    images, optimiser les fichiers CSS et JavaScript, et mettre
                    en place des techniques de mise en cache pour améliorer les
                    performances globales du site.
                  </li>
                  <li>
                    Réactivité mobile : 📱📐 Faire en sorte que notre site soit
                    entièrement réactif et bien adapté aux appareils mobiles.
                    Nous vérifierons que tous les éléments du site sont
                    correctement disposés et facilement accessibles sur des
                    écrans de petite taille.
                  </li>
                </ul>
              </div>
            </Fade>
            <Fade right duration={1000} distance="40px">
              <div className="experience-image-container">
                <h2 style={{ color: theme.text }}>MCD du site</h2>
                <img
                  src={require("../../assests/images/sae3.jpg.jpg")}
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
                  1,2,3,4,5,6 concernant essentiellement la réalisation du
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
                    📁 SAE lion Esport.zip
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
                  Pour poursuivre la validation de mes compétences, je vais
                  continuer sur une voie stable dans laquelle qualité et
                  quantité de travail vont me permettre de progresser et ainsi
                  de continuer la validation de ses compétences et des
                  prochaines.
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
