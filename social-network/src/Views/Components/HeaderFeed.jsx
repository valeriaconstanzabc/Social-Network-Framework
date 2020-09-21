import React, { useContext } from 'react'
import { UserContext } from '../Context/UseContext.js'
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import {auth} from '../../firebase.js'


const HeaderFeed = (props) => {

    let { setUser, saveInfoProfile, userr } = useContext(UserContext)

    const cerrarSesion = () => {
        auth.signOut()
        .then(() => {
            props.history.push('/')
        })
        .catch((error) => {
            console.log(error)
        })
    }

    React.useEffect(() => {
        if(auth.currentUser){
            console.log('existe')
            props.history.push('/inicio')
            setUser(auth.currentUser)
        }else{
            console.log('no existe')
            props.history.push('/iniciarSesion')
        }
    }, [props.history, setUser])

    const profile = () => {
        props.history.push('/perfil')
        saveInfoProfile()
    }

    return (
        <div className="headerFeed">
            <div className="headerNotificationFeed">
                <Link to="/inicio">
                    <img src="https://raw.githubusercontent.com/valeriaconstanzabc/SCL013-social-network/master/src/imagenes/bluebell.png" alt="ícono campana" className="notificationHeaderFeed"/>
                </Link>
            </div>
            <div className="headerFriendsFeed">
                <Link to="/inicio">
                    <img src="https://raw.githubusercontent.com/valeriaconstanzabc/SCL013-social-network/master/src/imagenes/amigos.png" alt="ícono amigos" className="friendsHeaderFeed"/>
                </Link>
            </div>  
            <div className="headerLogoFeed">
                <Link to="/inicio">
                    <img src="https://raw.githubusercontent.com/valeriaconstanzabc/SCL013-social-network/master/src/imagenes/Logo.png" alt="ícono lofche" className="logoHeaderFeed"/>
                </Link>
            </div>
            <div className="headerInboxFeed">
                <Link to="/inicio">
                    <img src="https://raw.githubusercontent.com/valeriaconstanzabc/SCL013-social-network/master/src/imagenes/envalow.png" alt="ícono mensajes" className="inboxHeaderFeed"/>
                </Link>
            </div> 
            <div className="headerPerfilButton">
            {
                userr.photoURL === null ?
                <img type ="button" className="btnHeaderOptions" alt="img" src="https://i.ibb.co/vLyndPX/usuario-sin-foto.png"/>
                :
                <img type ="button" className="btnHeaderOptions" alt="img" src={userr.photoURL}/>
            }
                <div className="dropdownContent">
                    <button className="goToProfile" onClick={() => profile()}>Ir al perfil</button>
                    <button onClick={() => cerrarSesion()} className="logout">Cerrar sesión</button>  
                </div>
            </div>
        </div>
    )
}

export default withRouter(HeaderFeed)
