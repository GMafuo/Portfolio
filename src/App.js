import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import { chosenTheme } from "./theme";
import { GlobalStyles } from "./global";

function App() {
  return (
    <ThemeProvider theme={chosenTheme}>
      <>
        <GlobalStyles />
        <Router>
          <Switch>
            <Route path="/">
              <div>
                <Main theme={chosenTheme} />
              </div>
            </Route>
          </Switch>
        </Router>
      </>
    </ThemeProvider>
  );
}

export default App;
