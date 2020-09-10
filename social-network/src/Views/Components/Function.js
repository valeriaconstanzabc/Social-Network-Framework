import { auth } from '../../firebase.js';


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

