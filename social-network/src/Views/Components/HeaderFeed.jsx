import React, { useContext } from 'react'
import { UserContext } from '../Context/UseContext.js'
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import {auth} from '../../firebase.js'


const HeaderFeed = (props) => {

    let { user, setUser } = useContext(UserContext)

    const cerrarSesion = () => {
        auth.signOut()
            .then(() => {
                props.history.push('/')
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
                user && (
                    <img type ="button" className="btnHeaderOptions" alt="imagen de usuario" src={user.photoURL}/>
                )
            }
                <div className="dropdownContent">
                    <h5 className="goToProfile">Ir al perfil</h5>
                    <button onClick={() => cerrarSesion()} className="logout">Cerrar sesión</button>  
                </div>
            </div>
        </div>
    )
}

export default withRouter(HeaderFeed)
