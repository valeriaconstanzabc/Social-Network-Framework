import React from 'react'
import { loginWithGoogle, loginWithFacebook } from '../Components/Function.js';
import { auth, db } from '../../firebase.js'

const SignIn = (props) => {

    const [name, setName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [district, setDistrict] = React.useState('')
    const [pass, setPass] = React.useState('')
    const [error, setError] = React.useState(null)

    const processData = e => {
        e.preventDefault()
        if (!name.trim()) {
            setError('* Ingresa Nombre y apellido')
            return
        }
        if (!email.trim()) {
            setError('* Ingrese email')
            return
        }
        if (!pass.trim()) {
            setError('* Ingrese contraseña')
            return
        }
        if (pass.length < 6) {
            setError('* Debe ser mayor a 6 carácteres')
            return
        }

        console.log('Pasando todas las validaciones')
        setError(null)
        register()
    }

    const register = React.useCallback(async () => {
        try {
            const res = await auth.createUserWithEmailAndPassword(email, pass)
            await res.user.updateProfile({
                displayName: name,
            })
            await db.collection('usuarios').doc(res.user.uid).set({
                email: res.user.email,
                uid: res.user.uid,
            })
            setName('')
            setEmail('')
            setPass('')
            setError(null)
            props.history.push('/home')
        } catch (error) {
            console.log(error)
            if (error.code === 'auth/invalid-email') {
                setError('* El email ingresado no es válido')
            }
            if (error.code === 'auth/email-already-in-use') {
                setError('* El email ya ha sido utilizado')
            }
        }
    }, [email, pass, name, props])

    return (
        <div className="containerSignIn">
            <form className="signInForm" onSubmit={processData}>
                <div className="modalSignIn">
                    <h1>¡Únete a Lofche!</h1>
                <div className="line"></div>
                
                <label htmlFor="name" className="text"><b>Nombre de usuario</b></label>
                <input 
                    type="text" 
                    className="name" 
                    placeholder="Lofche" 
                    name="name" 
                    onChange={(e) => setName(e.target.value)} 
                    value={name}
                    required
                />
                
                <label htmlFor="email" className="text"><b>Correo Electrónico</b></label>
                <input 
                    type="text" 
                    className="email" 
                    placeholder="lofche@example.com" 
                    name="email" 
                    onChange={(e) => setEmail(e.target.value)} 
                    value={email}
                    required
                />
                <label htmlFor="comuna" className="text"><b>Comuna a la perteneces</b></label>
                <input 
                    type="text" 
                    className="district" 
                    placeholder="Ejemplo: Puente alto" 
                    name="comuna" 
                    onChange={(e) => setDistrict(e.target.value)} 
                    value={district}
                    required
                />
                <label htmlFor="psw" className="text"><b>Contraseña</b></label>
                <div className="containerPassword">
                    <input 
                        type="password" 
                        id="password" 
                        className="password" 
                        placeholder="Ingresa Contraseña" 
                        name="password" 
                        onChange={(e) => setPass(e.target.value)} 
                        value={pass}
                        autoComplete="on"
                        required
                    />
                    <span type="button" className="passwordHidden"><img src="https://raw.githubusercontent.com/valeriaconstanzabc/SCL013-social-network/master/src/imagenes/ojo.png" className="eyePassword" alt="ojo"/></span>
                </div>
                
                {error && (<div className="error" id="errorMessage">{error}</div>)}
                <label className="textRegisterWith"><b>También puedes registrarte con:</b></label>
                <div className="registerWith">
                    <button type="submit" className="btngoogle" onClick={() => loginWithGoogle()}>
                        <img src="https://raw.githubusercontent.com/valeriaconstanzabc/SCL013-social-network/master/src/imagenes/google.png" alt="google" className="social-media-logo" id="google"/>
                    </button>
                    <button type="submit" className="btnFacebook" onClick={() => loginWithFacebook()}>
                        <img src="https://raw.githubusercontent.com/valeriaconstanzabc/SCL013-social-network/master/src/imagenes/facebook.png" alt="facebook" className="social-media-logo" id="facebook"/>
                    </button>
                </div>
                <div className="buttonNext">
                    <button type="submit" id="btnRegister" className="register">Registrar</button>
                </div>
                </div>
            </form>
        </div>
    )
}

export default SignIn
