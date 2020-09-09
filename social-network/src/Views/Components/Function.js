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

export const loginWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
    .then((result) => {
        const user = result.user;
        console.log('user', user);
        observer()
    }).catch(function (error) {
    });
}
export const loginWithFacebook = () => {
    const provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider)
    .then((result) => {
        observer()
    }).catch(function (error) {
    });
}