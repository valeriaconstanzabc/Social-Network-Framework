import React from 'react'
import '../Styles/Welcome.css'

const Welcome = () => {
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

export default Welcome
