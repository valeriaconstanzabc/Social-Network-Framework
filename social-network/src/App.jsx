import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Welcome from './Views/Pages/Welcome';

function App() {
  return (
      <Router>
        <Switch>
          <Route path="/" exact>
            <Welcome />
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
