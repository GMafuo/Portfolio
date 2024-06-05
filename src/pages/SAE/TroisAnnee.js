import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import { NavLink } from "react-router-dom";
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
              <h2 style={{ color: theme.text }}>Description</h2>
              <p style={{ color: theme.secondaryText }}>
                Sur cette page, vous trouverez la description de mon stage ainsi
                que celle de ma SAE de troisième année. Ensuite, vous
                découvrirez une présentation détaillée des différentes
                compétences que j'ai acquises grâce à ces deux projets.
              </p>
            </div>
          </Fade>

          <Fade left duration={1000} distance="40px">
            <div className="experience-card">
              <h2 style={{ color: theme.text }}>Contexte du stage</h2>
              <p style={{ color: theme.secondaryText }}>
                Quand : Du 11 mars au 04 mai 2024 <br /> Où : OnlineFormaPro
                (Vesoul) <br /> <br />
                OnlineFormaPro, une entreprise spécialisée dans la formation en
                ligne, a décidé de lancer une 🚀 application mobile
                d'apprentissage des langues pour compléter sa formation en
                plateforme web existante. Ce projet vise à répondre aux besoins
                variés et accessibles des apprenants. <br /> <br />
                L'objectif de mon stage était de participer au développement de
                cette application mobile, en utilisant des technologies avancées
                comme les modèles de langage d'OpenAI pour créer des
                interactions conversationnelles naturelles et captivantes. 📱
              </p>
            </div>
          </Fade>

          <div className="experience-grid">
            <div className="experience-column">
              <Fade left duration={1000} distance="40px">
                <div className="experience-card">
                  <h2 style={{ color: theme.text }}>Contexte SAE</h2>
                  <p style={{ color: theme.secondaryText }}>
                    <p style={{ color: theme.secondaryText }}>
                      {" "}
                      🔬 Notre sujet de SAE se concentre sur une application
                      destinée à être utilisée dans des expériences
                      scientifiques. Les chercheurs effectueront une série de
                      tests de réflexe sur des volontaires. L'application
                      analysera ensuite les résultats de ces tests à l'aide de
                      graphiques, permettant de mesurer le temps de réaction des
                      participants dans différentes situations. L'objectif des
                      scientifiques est de déterminer les facteurs qui influent
                      sur le temps de réaction et l'exécution des tâches. Ces
                      résultats pourront être utilisés dans les entraînements
                      des pilotes de Formule 1 pour améliorer leurs réflexes, ou
                      encore dans le domaine de la sécurité routière pour
                      établir des normes de sécurité. <br /> <br /> 🛠️ Les
                      contraintes et libertés sont définies pour guider
                      l'implémentation du sujet, notamment en ce qui concerne la
                      structuration du code, l'utilisation de bases de données
                      MongoDB, la création d'une API Node.js suivant les
                      principes REST, la mise en place d'un serveur Java pour la
                      centralisation des données, l'utilisation de
                      micro-contrôleurs ESP32/ESP8266, ainsi que le
                      développement d'un front-end en Vue.js. <br /> <br /> 💡
                      En résumé, notre objectif est de développer une
                      application structurée et modulaire pour analyser les
                      résultats de tests de réflexe dans le cadre d'expériences
                      scientifiques, en respectant des contraintes précises
                      liées à l'architecture logicielle et aux technologies à
                      utiliser.{" "}
                    </p>
                  </p>
                </div>
              </Fade>
              <Fade left duration={1000} distance="40px">
                <div className="experience-card">
                  <h2 style={{ color: theme.text }}>Tests et validation</h2>
                  <p style={{ color: theme.secondaryText }}>
                    Nous avons mis en place des tests unitaires pour chaque
                    composant afin de vérifier leur comportement individuel. Des
                    tests d'intégration ont été réalisés pour valider
                    l'interaction entre les différents services. Des tests de
                    régression ont été exécutés pour garantir la stabilité de
                    l'application après chaque modification.
                  </p>
                </div>
              </Fade>
            </div>

            <div className="experience-column">
              <Fade right duration={1000} distance="40px">
                <div className="experience-card">
                  <h2 style={{ color: theme.text }}>Architecture logicielle</h2>
                  <img
                    src={require("../../assests/images/Architecture.png")}
                    alt="Architecture logicielle"
                    className="experience-image, experiences-image"
                  />
                </div>
              </Fade>
              <Fade right duration={1000} distance="40px">
                <div className="experience-card">
                  <h2 style={{ color: theme.text }}>
                    Fonctionnalités de l'application
                  </h2>
                  <ul style={{ color: theme.secondaryText }}>
                    <li>
                      Prise de vidéo : L'application mobile, développée avec
                      React Native, permet aux utilisateurs de filmer leur
                      plaque d'immatriculation.
                    </li>
                    <li>
                      Visualisation des résultats : Un tableau de bord web, créé
                      avec React et D3.js, présente visuellement les données de
                      manière claire et interactive.
                    </li>
                  </ul>
                </div>
              </Fade>
            </div>
          </div>
          <Fade right duration={1000} distance="40px">
            <div className="experience-card">
              <NavLink to="/Comp1" className="experience-link">
                <h2 style={{ color: theme.text }}>
                  Compétence 1: Réaliser un développement d'application
                </h2>
              </NavLink>
            </div>
          </Fade>

          <Fade right duration={1000} distance="40px">
            <div className="experience-card">
              <NavLink to="/Comp2" className="experience-link">
                <h2 style={{ color: theme.text }}>
                  Compétence 2: Optimiser des applications
                </h2>
              </NavLink>
            </div>
          </Fade>

          <Fade right duration={1000} distance="40px">
            <div className="experience-card">
              <NavLink to="/Comp6" className="experience-link">
                <h2 style={{ color: theme.text }}>
                  Compétence 6: Collaborer au sein d’une équipe informatique
                </h2>
              </NavLink>
            </div>
          </Fade>
        </div>
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Experience;
