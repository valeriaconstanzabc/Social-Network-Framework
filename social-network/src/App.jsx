import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import "./Views/Styles/Styles.scss"
import Welcome from './Views/Pages/Welcome';
import HeaderWelcome from './Views/Components/HeaderWelcome';

function App() {
  return (
      <Router>
        <Switch>
          
          <Route path="/" exact>
            <HeaderWelcome />
            <Welcome />
          </Route>

        </Switch>
      </Router>
  );
}

export default App;
