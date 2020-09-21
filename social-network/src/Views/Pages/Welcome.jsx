import React from 'react'
import { withRouter } from 'react-router-dom'
import { auth } from '../../firebase.js'

const Welcome = (props) => {

    const userr = auth.currentUser;
    
    if(userr) {
        props.history.push('/inicio')
    }

    return (
        <div className="welcomeLofche">
            <div className="divLogoWelcome">
                <img src="https://raw.githubusercontent.com/valeriaconstanzabc/SCL013-social-network/master/src/imagenes/lofcheColgante.png" alt="Logo bienvenida" className="logoWelcome"/>
            </div>
            <div className="containerWelcome">
                <p>Lofche significa "Comunidad" en Mapudungun. Y eso es 
                lo que somos! una comunidad para averiguar todas aquellas 
                cosas que no sabemos, aquellas cosas que buscamos y no 
                encontramos. Ayuda y conexión constante con tu ciudad y las 
                almas que viven en ella!</p>
            </div>
        </div>
    )
}

export default withRouter(Welcome)
