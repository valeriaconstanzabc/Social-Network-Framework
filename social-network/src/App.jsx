import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {auth } from '../src/firebase.js'

import Welcome from './Views/Pages/Welcome';
import HeaderWelcome from './Views/Components/HeaderWelcome';
import LogIn from './Views/Pages/LogIn';
import Footer from './Views/Components/Footer';
import SignIn from './Views/Pages/SignIn';
import HeaderFeed from './Views/Components/HeaderFeed';
import Feed from './Views/Pages/Feed';

function App() {

  const [firebaseUser, setFirebaseUser] = React.useState(false)

  React.useEffect(() => {
      auth.onAuthStateChanged(user => {
          console.log(user)
          if(user){
              setFirebaseUser(user)
          }else{
              setFirebaseUser(null)
          }
      })
  }, [])

  return firebaseUser !== false ?(
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

          <Route path="/inicio">
            <HeaderFeed />
            <Feed />
          </Route>

        </Switch>
        <Footer />
      </Router>
  ):(
    <div>Cargando...</div>
  )
}

export default App;
