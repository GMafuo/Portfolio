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
              <h2 style={{ color: theme.text }}>Description du stage</h2>
              <p style={{ color: theme.secondaryText }}>
                {" "}
                Quand : Du 03 Mai au 24 Juin 2023 <br /> Où : Isara technologies
                (Belfort) <br /> <br /> Le secteur des pompiers, plus
                précisément le Service Départemental d'Incendie et de Secours
                (SDIS) 🔥👨‍🚒, est reconnu pour son importance cruciale dans la
                protection et l'assistance aux populations. La collecte et
                l'analyse des rapports d'activité des pompiers revêtent une
                grande importance pour évaluer les performances opérationnelles
                et améliorer les interventions futures. Cependant, ce processus
                peut être fastidieux et nécessiter des tâches manuelles
                répétitives. 😫 <br /> <br /> Dans le cadre de mon projet de
                stage, j'ai été chargé de développer une solution visant à
                automatiser ce processus en utilisant le langage de
                programmation Kotlin. L'objectif principal était de récupérer
                les données opérationnelles à partir de la base de données du
                SDIS via des webservices, de les organiser et de les présenter
                de manière claire et compréhensible. 📊💻 <br /> <br /> Ce
                projet représentait un défi passionnant, car il combinait
                l'utilisation de technologies telles que Kotlin, ainsi que des
                bibliothèques spécifiques pour la manipulation de fichiers Excel
                (Excel) et de documents Word (docx). Mon objectif était de
                développer une solution efficace pour faciliter la collecte et
                l'analyse des données opérationnelles des pompiers, en réduisant
                le temps et les efforts nécessaires pour effectuer ces tâches
                manuellement. 💪🔧{" "}
              </p>
            </div>
          </Fade>
          <div className="experience-grid">
            <Fade left duration={1000} distance="40px">
              <div className="experience-card">
                <h2 style={{ color: theme.text }}>Mes actions 📽️</h2>
                <p style={{ color: theme.secondaryText }}>
                  <p style={{ color: theme.secondaryText }}>
                    {" "}
                    Le cahier des charges du projet consiste à récupérer les
                    données opérationnelles du SDIS 🔥🚒, à les centraliser au
                    sein de fichiers Excel, à les présenter sous forme de
                    graphiques 📊, et enfin à les intégrer dans un document
                    textuel 📄. L'objectif est d'automatiser au maximum ces
                    opérations pour faciliter le processus. <br /> <br /> La
                    première étape consiste à récupérer les données
                    opérationnelles à partir de la base de données du SDIS en
                    utilisant des requêtes HTTP 🌐. Ensuite, ces données doivent
                    être transformées et organisées de manière appropriée. Une
                    fois les données prêtes, elles doivent être transférées dans
                    un fichier Excel pour créer des graphiques pertinents 📊📈.
                    Les graphiques serviront à visualiser les informations de
                    manière claire et compréhensible. <br /> <br /> Une fois les
                    graphiques générés, il faut les réintégrer dans un document
                    Word (docx) 📄. Le document Word servira de rapport final,
                    où les données, les graphiques et les informations
                    pertinentes seront présentés de manière structurée. Cela
                    permettra d'avoir un rapport d'activité complet et
                    professionnel. <br /> <br /> Ce projet
                    représente un défi passionnant, car il combine l'utilisation
                    de technologies telles que les requêtes HTTP, les fichiers
                    Excel et Word, ainsi que l'automatisation des tâches
                    répétitives. L'objectif est d'améliorer l'efficacité du
                    processus de collecte et de présentation des données
                    opérationnelles du SDIS, tout en réduisant la charge de
                    travail manuelle.{" "}
                  </p>
                </p>
              </div>
            </Fade>
            
            <Fade right duration={1000} distance="40px">
              <div className="experience-image-container experience-card-structure">
                <h2 style={{ color: theme.text }}>Structure du projet</h2>
                <img
                  src={require("../../assests/images/projectstructure.png")}
                  alt="Structure du projet"
                  className="experience-image"
                />
              </div>
            </Fade>
          </div>
          

          <div className="experience-grid">
            <Fade bottom duration={1000} distance="40px">
              <div className="experience-card">
                <h2 style={{ color: theme.text }}>
                Chose à améliorer 📝
                </h2>
                <ul style={{ color: theme.secondaryText }}>
                  <li>
                    Une amélioration envisageable pour le projet serait
                    d'incorporer un chatbot 🤖 basé sur un modèle de langage de
                    type ChatGPT, tel que le modèle LLM (Large Language Model)
                    utilisé dans notre environnement. Un chatbot permettrait
                    d'interagir avec les utilisateurs et de répondre à leurs
                    questions ou demandes liées aux rapports d'activité du SDIS.
                  </li>
                  <li>
                    L'ajout d'un chatbot présente plusieurs avantages. Tout
                    d'abord, cela permettrait de fournir une assistance
                    instantanée aux utilisateurs qui ont des interrogations ou
                    des besoins spécifiques concernant les rapports d'activité.
                    Les utilisateurs pourraient poser des questions sur les
                    données, demander des explications supplémentaires sur les
                    graphiques générés ou obtenir des informations spécifiques
                    sur les interventions ou les indicateurs clés.
                  </li>
                </ul>
              </div>
            </Fade>

            <Fade bottom duration={1000} distance="40px">
              <div className="experience-card">
                <h2 style={{ color: theme.text }}>Compétence apporté</h2>
                <p style={{ color: theme.secondaryText }}>
                  Tout d'abord, la compétence 1 (réaliser un développement
                  d'application) et la compétence 4 (gérer des données de
                  l'information) ont été grandement développées lors de ce
                  projet. J'ai eu l'occasion de concevoir et de développer une
                  application web en utilisant un langage de programmation avec
                  lequel je n'avais pas encore été familiarisé pendant mon
                  cursus à l'IUT. De plus, j'ai mis en place une base de données
                  MySQL pour gérer efficacement les données de l'application.
                </p>
                <p style={{ color: theme.secondaryText }}>
                  En ce qui concerne les compétences 5 (conduire un projet) et 6
                  (collaborer au sein d'une équipe informatique), elles ont
                  également été fortement améliorées. J'ai pris conscience de
                  tous les aspects nécessaires à la réalisation d'un projet,
                  au-delà des seuls aspects techniques. J'ai appris à prendre en
                  compte les aspects organisationnels, collaboratifs, ainsi que
                  la gestion des ressources et des délais. De plus, j'ai
                  développé mes aptitudes à travailler en équipe, à communiquer
                  efficacement et à collaborer de manière harmonieuse avec les
                  membres de mon équipe.
                </p>
                <p style={{ color: theme.secondaryText }}>
                  Ces différentes compétences acquises et renforcées tout au
                  long du projet ont été essentielles pour mener à bien la
                  réalisation de l'application, en veillant à sa qualité, à son
                  efficacité et à sa cohérence globale.
                </p>
              </div>
            </Fade>
          </div>
            

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

        
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Experience;
