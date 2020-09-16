import React from 'react'
import firebase from 'firebase/app'
import { auth } from '../../firebase.js'

let UserContext = React.createContext()
let { Provider, Consumer } = UserContext

function UserProvider({ children }) {

  const [user, setUser] = React.useState(null)
  const [publication, setPublication] = React.useState('')
  const [post, setPost] = React.useState([])
  const [editPublication, setEditPublication] = React.useState(false)

  const userr = auth.currentUser;

  const cancel = () => {
    setPublication('')
  }

  const publicationfeed = async () => {

    if(!publication.trim()){
      return
    }

    try {
      const db = firebase.firestore()
      const newPublication = {
        date: new Date().toLocaleString(),
        text: publication,
        uid: userr.uid,
        email: userr.email,
        name: userr.displayName,
        like: [],
      }
      const data = await db.collection('Publicaciones').add(newPublication)

      setPost([
        ...post,
        {...newPublication, id: data.id}
      ])
      setPublication('')
    }
    catch (error){
      console.log(error)
    }
  }

  const deletePublication = async (id) => {
    try {
      const db = firebase.firestore()
      await db.collection('Publicaciones').doc(id).delete()
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <Provider value={{ publication, setPublication, publicationfeed,
        cancel, user, setUser, post, setPost, deletePublication,
        editPublication, setEditPublication
    }}>
      {children}
    </Provider>
  )
}

export { UserProvider, Consumer as UserConsumer, UserContext }