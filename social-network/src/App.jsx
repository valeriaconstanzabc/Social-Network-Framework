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
import Footer from './Views/Components/Footer';
import SignIn from './Views/Pages/SignIn';

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

          <Route path="/registro">
            <HeaderWelcome />
            <SignIn />
          </Route>

        </Switch>
        <Footer />
      </Router>
  );
}

export default App;
