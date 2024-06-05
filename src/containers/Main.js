import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from "../pages/home/HomeComponent";
import SAE2_04 from "../pages/SAE/SAE2.04";
import SAE2_05 from "../pages/SAE/SAE2.05";
import TroisAnnee from "../pages/SAE/TroisAnnee";
import SAE_Esport from "../pages/SAE/SAE_Esport";
import Comp1 from "../pages/SAE/Comp1";
import Comp2 from "../pages/SAE/Comp2";
import Comp6 from "../pages/SAE/Comp6";
import Stage from "../pages/SAE/Stage";
import SAE2_126 from "../pages/SAE/SAE2.126";
import Splash from "../pages/splash/Splash";
import Education from "../pages/education/EducationComponent";
import Experience from "../pages/experience/Experience";
import Contact from "../pages/contact/ContactComponent";
import Projects from "../pages/projects/Projects";
import { settings } from "../portfolio.js";
import Error404 from "../pages/errors/error404/Error";

export default class Main extends Component {
  render() {
    return (
      <BrowserRouter basename="/">
        <Switch>
          <Route
            path="/"
            exact
            render={(props) =>
              settings.isSplash ? (
                <Splash {...props} theme={this.props.theme} />
              ) : (
                <Home {...props} theme={this.props.theme} />
              )
            }
          />
          <Route
            path="/Portfolio"
            render={(props) => <Home {...props} theme={this.props.theme} />}
          />
          <Route
            path="/experience"
            exact
            render={(props) => (
              <Experience {...props} theme={this.props.theme} />
            )}
          />
          <Route
            path="/education"
            render={(props) => (
              <Education {...props} theme={this.props.theme} />
            )}
          />
          <Route
            path="/SAE2_04"
            render={(props) => <SAE2_04 {...props} theme={this.props.theme} />}
          />
          <Route
            path="/SAE2_05"
            render={(props) => <SAE2_05 {...props} theme={this.props.theme} />}
          />
          <Route
            path="/SAE2_126"
            render={(props) => <SAE2_126 {...props} theme={this.props.theme} />}
          />

          <Route
            path="/SAE_Esport"
            render={(props) => (
              <SAE_Esport {...props} theme={this.props.theme} />
            )}
          />

          <Route
            path="/Stage"
            render={(props) => <Stage {...props} theme={this.props.theme} />}
          />

          <Route
            path="/TroisAnnee"
            render={(props) => (
              <TroisAnnee {...props} theme={this.props.theme} />
            )}
          />

          <Route
            path="/Comp1"
            render={(props) => <Comp1 {...props} theme={this.props.theme} />}
          />

          <Route
            path="/Comp2"
            render={(props) => <Comp2 {...props} theme={this.props.theme} />}
          />

          <Route
            path="/Comp6"
            render={(props) => <Comp6 {...props} theme={this.props.theme} />}
          />

          <Route
            path="/contact"
            render={(props) => <Contact {...props} theme={this.props.theme} />}
          />

          {settings.isSplash && (
            <Route
              path="/splash"
              render={(props) => <Splash {...props} theme={this.props.theme} />}
            />
          )}

          <Route
            path="/projects"
            render={(props) => <Projects {...props} theme={this.props.theme} />}
          />
          <Route
            path="*"
            render={(props) => <Error404 {...props} theme={this.props.theme} />}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}
