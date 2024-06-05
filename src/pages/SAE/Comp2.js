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
                  Appréhender et construire des algorithmes
                </h2>
                <ul style={{ color: theme.secondaryText }}>
                  <p style={{ color: theme.secondaryText }}>
                    Dans le cadre de la SAÉ, nous avons dû analyser et découper
                    des problèmes complexes en éléments plus simples. Par
                    exemple, lors du choix de l'application mobile, nous avons
                    chercher un moyen permettant de détecter des visages grâces
                    à l'IA. Cependant, après plusieurs essais infructueux, nous
                    avons dû simplifier l'idée initiale en renonçant à
                    l'utilisation de l'IA. Pour se faire, nous avons simplement
                    utilisé un fichier ."xml" dans lequel il y avait des données
                    pour la reconnaissance faciale. <br></br> <br></br>
                    Pendant mon stage, j'ai également simplifié certaines
                    tâches, comme l'utilisation de la voix. Au départ, cette
                    fonctionnalité s'appuyait sur des bibliothèques distinctes,
                    ce qui compliquait le processus. En utilisant une API
                    regroupant toutes les fonctionnalités nécessaires, nous
                    avons considérablement simplifié la tâche.
                  </p>
                </ul>
              </div>
            </Fade>
            <Fade right duration={1000} distance="40px">
              <div className="experience-image-container, experience-image-opti">
                <h2 style={{ color: theme.text }}>Optimisation mobile Stage</h2>
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
                  Sélectionner les algorithmes adéquats pour répondre à un
                  problème donné
                </h2>
                <p style={{ color: theme.secondaryText }}>
                  Pour la SAÉ, nous avons sélectionné des structures de données
                  complexes adaptées aux besoins du projet. L'utilisation de la
                  base de donnée NoSQL comme MongoDB nous a permis de gérer
                  efficacement les données non structurées des tests de réflexe.
                </p>
                <p style={{ color: theme.secondaryText }}>
                  Lors de mon stage, j'ai approfondi mes compétences dans le
                  choix approprié des langages pour optimiser et faciliter
                  certains aspects du projet. Par exemple, pour le déploiement
                  de l'APK, nous utilisions initialement React Native Expo, qui
                  nécessitait un algorithme pour effectuer le build via un site
                  web spécifique à Expo. Cependant, en passant à React Native
                  CLI, nous avons éliminé ces problèmes complexes.
                </p>
              </div>
            </Fade>

            <Fade bottom duration={1000} distance="40px">
              <div className="experience-image-container, experience-image-opti">
                <img
                  src={require("../../assests/images/Optimisationmobile2.png")}
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
                  Analyser et optimiser des applications
                </h2>
                <p style={{ color: theme.secondaryText }}>
                  L'optimisation de notre application de tests de réflexes dans
                  la SAÉ a nécessité des améliorations dans de nombreuses
                  parties du code. Certaines sections n'étaient pas suffisamment
                  optimisées en raison de l'utilisation répétitive ou incorrecte
                  de variables, ou des performances pouvaient être améliorées.
                  Par exemple, concernant le code Arduino, certaines de nos
                  expériences ont nécessité des modifications car l'Arduino ne
                  pouvait pas supporter des programmes trop lourds en raison de
                  l'utilisation excessive de commandes print.
                </p>
                <p style={{ color: theme.secondaryText }}>
                  Pendant mon stage, j'ai également été impliqué dans
                  l'optimisation des performances. Par exemple, l'affichage du
                  texte généré par l'IA se faisait trop lentement en raison de
                  la quantité de données reçues, et certaines pages mettaient
                  trop de temps à se charger. Nous avons résolu ces problèmes en
                  optimisant les algorithmes et en recherchant continuellement
                  des moyens d'améliorer les performances.
                </p>
              </div>
            </Fade>

            <Fade bottom duration={1000} distance="40px">
              <div className="experience-card">
                <h2 style={{ color: theme.text }}>Conclusion</h2>
                <p style={{ color: theme.secondaryText }}>
                  En résumé, les projets de SAÉ et mon stage m'ont permis
                  d'acquérir des compétences approfondies en optimisation
                  d'applications. J'ai appris à analyser des problèmes
                  complexes, à sélectionner les algorithmes adéquats, et à
                  optimiser des applications pour améliorer leurs performances.
                  Ces expériences m'ont permis de proposer des solutions
                  informatiques efficaces et optimisées, répondant aux exigences
                  spécifiques des projets sur lesquels j'ai travaillé.{" "}
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
