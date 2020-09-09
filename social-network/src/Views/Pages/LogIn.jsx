import React from 'react'
import { Link } from "react-router-dom";

const LogIn = () => {
    return (
        <div className="containerLogIn">
            <form>
                <div className="modalLogIn">
                    <h1>Iniciar Sesión</h1>
                    <div className="line"></div>
                
                    <label for="email" className="text"><b>Correo Electrónico</b></label>
                    <input type="text" className="email_login" placeholder="lofche@example.com" name="email" required/>
                
                    <label for="psw" className="text"><b>Contraseña</b></label>
                    <div className="containerPassword">
                        <input type="password" id="password_login" className="password" placeholder="Ingresa Contraseña" name="psw" required/>
                        <span type="button" className="passwordHidden"><img src="https://raw.githubusercontent.com/valeriaconstanzabc/SCL013-social-network/master/src/imagenes/ojo.png" className="eyePassword"/></span>
                    </div>
                    
                    <div className="error" id="errorMessage"></div>
                    <div className="buttonNext">
                        <button type="button" id="next_button" className="next">Siguiente</button>
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

export default LogIn
