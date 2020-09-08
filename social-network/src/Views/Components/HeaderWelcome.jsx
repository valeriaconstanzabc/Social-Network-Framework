import React from 'react'
// import '../Styles/HeaderWelcome.scss'
import { Link } from "react-router-dom";

const HeaderWelcome = () => {
    return (
        <div className="header">
            <div className="headerLogo">
                <Link to="/">
                    <img src="https://raw.githubusercontent.com/valeriaconstanzabc/SCL013-social-network/master/src/imagenes/Logo.png" alt="logo-lofche" className="logoHeader"/>
                </Link>
            </div>
            <div className="divLogInButton">
                <Link to="/iniciarSesion">
                    <button className="logInButton">Iniciar Sesión</button>
                </Link>
            </div>
        </div>
    )
}

export default HeaderWelcome
