import React from 'react'
import { withRouter } from 'react-router-dom'
import { Link } from "react-router-dom";
import { auth } from '../../firebase.js';
import { hiddenPassword } from '../Components/Function.js';
import firebase from 'firebase/app'

const LogIn = (props) => {

    const [email, setEmail] = React.useState('')
    const [pass, setPass] = React.useState('')
    const [error, setError] = React.useState(null)

    const observer = () => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                console.log('existe usuario activo');
                console.log('*******************');
                console.log(user.emailVerified);
                console.log('*******************');
                props.history.push('/inicio')
            } else {
                //    User is signed out.
                console.log('no existe usuario activo');
            }
        });
    }

    const processData = (e) => {
        e.preventDefault()
        if(!email.trim() || !pass.trim()){
            setError('* Ingrese email')
            return
        }
        if(!pass.trim()){
            setError('* Ingrese contraseña')
            return
        }
        if(pass.length < 6){
            setError('* Contraseña incorrecta')
            return
        }
        console.log('Pasando todas las validaciones...')
        setError(null)
        observer()
        userLogin()
    }

    const userLogin = React.useCallback(async () => {
        try {
            const res = await auth.signInWithEmailAndPassword(email, pass)
            console.log(res.user)
            setEmail('')
            setPass('')
            setError(null)
            props.history.push('/inicio')
        } catch (error) {
            console.log(error)
            if (error.code === 'auth/invalid-email') {
                setError('* Email no válido')
            }
            if (error.code === 'auth/user-not-found') {
                setError('* Email no registrado')
            }
            if (error.code === 'auth/wrong-password') {
                setError('* Contraseña incorrecta')
            }
        }
    }, [email, pass, props.history])
 
    const loginWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then((result) => {
            observer()
        }).catch(function (error) { });
    }
    const loginWithFacebook = () => {
        const provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then((result) => {
            observer()
        }).catch(function (error) { });
    }

    return (
        <div className="containerLogIn">
            <form onSubmit={processData}>
                <div className="modalLogIn">
                    <h1>Iniciar Sesión</h1>
                    <div className="line"></div>
                
                    <label htmlFor="email" className="text"><b>Correo Electrónico</b></label>
                    <input 
                        type="text" 
                        className="email_login" 
                        placeholder="lofche@example.com" 
                        name="email" 
                        onChange={ e => setEmail(e.target.value) }
                        value={email}
                    />
                
                    <label htmlFor="psw" className="text"><b>Contraseña</b></label>
                    <div className="containerPassword">
                        <input 
                            type="password" 
                            id="password_login" 
                            className="password" 
                            placeholder="Ingresa Contraseña" 
                            name="password" 
                            autoComplete="on"
                            onChange={ e => setPass(e.target.value) }
                            value={pass}
                        />
                        <span type="button" className="passwordHidden" onClick={() => hiddenPassword()}><img alt="ojo" src="https://raw.githubusercontent.com/valeriaconstanzabc/SCL013-social-network/master/src/imagenes/ojo.png" className="eyePassword"/></span>
                    </div>
                    
                    {error && (<div className="error" id="errorMessage">{error}</div>)}
                    <div className="registerWith">
                        <button type="submit" className="btngoogle" onClick={() => loginWithGoogle()}>
                            <img src="https://raw.githubusercontent.com/valeriaconstanzabc/SCL013-social-network/master/src/imagenes/google.png" alt="google" className="social-media-logo" id="google"/>
                        </button>
                        <button type="submit" className="btnFacebook" onClick={() => loginWithFacebook()}>
                            <img src="https://raw.githubusercontent.com/valeriaconstanzabc/SCL013-social-network/master/src/imagenes/facebook.png" alt="facebook" className="social-media-logo" id="facebook"/>
                        </button>
                    </div>
                    <div className="buttonNext">
                        <button type="submit" id="next_button" className="next">Siguiente</button>
                    </div>
                    <label>¿No tienes cuenta?</label>
                    <Link to="/registro">
                        <label className="registerHere"><b><u>Regístrate aquí</u></b></label>
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default withRouter(LogIn)
