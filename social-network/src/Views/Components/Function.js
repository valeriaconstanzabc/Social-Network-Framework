import { auth } from '../../firebase.js';
import firebase from 'firebase/app'

export const hiddenPassword = () => {
    const x = document.querySelector('.password');
    if (x.type === 'password') {
      x.type = 'text';
    } else {
      x.type = 'password';
    }
  };

export const observer = () => {
  auth.onAuthStateChanged((user) => {
      if (user) {
          console.log('existe usuario activo');
          console.log('*******************');
          console.log(user.emailVerified);
          console.log('*******************');
      } else {
          //    User is signed out.
          console.log('no existe usuario activo');
      }
  });
}

export const verificate = () => {
  const user = firebase.auth().currentUser;

  user.sendEmailVerification().then(() => {
    // Email sent.
    console.log('Enviando correo...');
  }).catch(() => {
    // An error happened.
  });
};

export const saveInfoProfile = async () => {
  const userr = auth.currentUser;
  const db = firebase.firestore()
  try {
    await db.collection('usuarios').doc(userr.uid).set({
      email: userr.email,
      uid: userr.uid
    })
  } catch (error) { 
    console.log(error) 
  }
}