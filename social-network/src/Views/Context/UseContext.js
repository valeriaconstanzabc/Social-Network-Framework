import React from 'react'
import firebase from 'firebase/app'
import { auth } from '../../firebase.js'

let UserContext = React.createContext()
let { Provider, Consumer } = UserContext

function UserProvider({ children }) {

  const [user, setUser] = React.useState(null)
  const [publication, setPublication] = React.useState('')

  const userr = auth.currentUser;

  const cancel = () => {
    setPublication('')
  }

  const publicationfeed = () => {
    firebase.firestore().collection('Publicaciones').add({
      date: new Date().toLocaleString(),
      text: publication,
      uid: userr.uid,
      email: userr.email,
      name: userr.displayName,
      like: [],
    })
    .then((result) => { 
      console.log('mensaje guardado', result)
      if(!publication.trim()){
        return
      }
      setPublication('')
    })
    .catch(error => console.log(error));
  }

  return (
    <Provider value={{ publication, setPublication, publicationfeed,
        cancel, user, setUser
    }}>
      {children}
    </Provider>
  )
}

export { UserProvider, Consumer as UserConsumer, UserContext }