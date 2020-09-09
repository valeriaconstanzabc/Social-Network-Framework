import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
// import "./Views/Styles/Styles.scss"
import Welcome from './Views/Pages/Welcome';
import HeaderWelcome from './Views/Components/HeaderWelcome';
import LogIn from './Views/Pages/LogIn';

function App() {
  return (
      <Router>
        <Switch>
          
          <Route path="/" exact>
            <HeaderWelcome />
            <Welcome />
          </Route>
          <Route path="/iniciarSesion">
            <HeaderWelcome />
            <LogIn />
          </Route>

        </Switch>
      </Router>
  );
}

export default App;
