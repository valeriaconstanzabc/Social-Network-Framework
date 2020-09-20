import React from 'react'
import firebase from 'firebase/app'
import { auth, storage } from '../../firebase.js'

let UserContext = React.createContext()
let { Provider, Consumer } = UserContext

function UserProvider({ children }) {

  const [user, setUser] = React.useState(null)
  const [publication, setPublication] = React.useState('')
  const [post, setPost] = React.useState([])
  const [editPublication, setEditPublication] = React.useState(false)
  const [id, setId] = React.useState('')
  const [newPublication, setNewPublication] = React.useState('')
  const [infoUser, setInfoUser] = React.useState([])

  const [editProfile, setEditProfile] = React.useState(false)
  const [description, setDescription ] = React.useState('')
  const [years, setYears] = React.useState('')
  const [district, setDistrict] = React.useState('')

  const [uno, setUno] = React.useState([])

  const userr = auth.currentUser;
  const db = firebase.firestore()

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
      await db.collection('Publicaciones').add(newPublication)
      setPublication('')
      updateImage()
    }
    catch (error){
      console.log(error)
    }
  }

  const [image, setImage] = React.useState(null)
  const [url, setUrl] = React.useState("")
  const updateImage = () => {
      if(image) {
          const uploadTask = storage.ref(`ImgPublication/${image.name}`).put(image)

          uploadTask.on(
            "state_changed",
            () => {
                storage
                .ref("ImgPublication")
                .child(image.name)
                .getDownloadURL()
                .then(url => {
                    setUrl(url)
                })
            }
        )
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

  const edit = item => {
    setEditPublication(true)
    setId(item.id)
  }

  const saveEditPublication = async () => {
    try {
      const db = firebase.firestore()
      await db.collection('Publicaciones').doc(id).update({
        date: new Date().toLocaleString(),
        text: newPublication
      })
      setEditPublication(false)
      console.log('La info se guardó')
    } catch (err) {
      console.log(err)
    }
  }

  const like = (item) => {
    try {
      if (item.like === null || item.like === '') {
        item.like = [];
      }

    if (item.like.includes(userr.email)) {
      for (let i = 0; i < item.like.length; i++) {
        if (item.like[i] === userr.email) { // verifica si ya el usuario está en el array
          item.like.splice(i, 1); // sentencia para eliminar un elemento de un array

          db.collection('Publicaciones').doc(item.id).update({ // para actualizar el array
            like: item.like,
          });
        }
      }
    } else {
      item.like.push(userr.email);
      db.collection('Publicaciones').doc(item.id).update({
        like: item.like,
      });
    }   
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    const ReadUser2 = async () => {
      const db = firebase.firestore()
      try {
          await db.collection('usuarios').onSnapshot(
            (snap => {
              const arrayData = snap.docs.map(doc => ({id: doc.id, ...doc.data()}))
              const userPresent = arrayData.filter( item => item.email === userr.email)
              console.log(userPresent)
              setUno(userPresent) 
            }))
      } catch (error) {
          console.log(error)
      }
  }

    const ReadUser = async () => {
        
        try {
          const db = firebase.firestore()
          await db.collection('usuarios2').onSnapshot(
            (snap => {
            const arrayData2 = snap.docs.map((doc) => ({id: doc.id, ...doc.data()}))
            const userPresent2 = arrayData2.filter( item => item.email === userr.email)
            console.log(userPresent2)
            setInfoUser(userPresent2) 
          }))
            
            
            
        } catch (error) {
            console.log(error)
        }
    }

    ReadUser()
    ReadUser2()

}, [ userr.email, setInfoUser, db])

    const saveInfoProfile = async () => {
      try {
        const docUsers = await db.collection('usuarios').doc(userr.uid).set({
          email: userr.email,
          uid: userr.uid
        })
            const arrayData2 = docUsers.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            console.log(arrayData2)
            setInfoUser(arrayData2) 
          
      } catch (error) { 
        console.log(error) 
      }
    }

const editProfileEvent = item => {
  setEditProfile(true)
  setId(item.id)
}

const saveEditProfile = async () => {
  try {
    const db = firebase.firestore()
    await db.collection('usuarios2').doc(id).set({
      email: userr.email,
      uid: userr.uid,
      years: years,
      description: description,
      district: district
    })
    setEditProfile(false)
    console.log('La info se guardó')
  } catch (err) {
    console.log(err)
  }
}

  return (
    <Provider value={{ publication, setPublication, publicationfeed,
        cancel, user, setUser, post, setPost, deletePublication,
        editPublication, setEditPublication, saveEditPublication,
        edit, id, setId, newPublication, setNewPublication, like,
        district, setDistrict, infoUser, setInfoUser, editProfile, setEditProfile,
        description, setDescription, years, setYears, saveEditProfile,
        editProfileEvent, uno, setUno, saveInfoProfile,

        setImage, url
    }}>
      {children}
    </Provider>
  )
}

export { UserProvider, Consumer as UserConsumer, UserContext }