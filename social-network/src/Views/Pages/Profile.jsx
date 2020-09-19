// import React from 'react'
import React, { useContext } from 'react'
import { UserContext } from '../Context/UseContext.js'
import { auth } from '../../firebase.js'

const Profile = () => {

    let { infoUser } = useContext(UserContext)
    const userr = auth.currentUser;

    return (
        <div className="containerPageProfile">
            <div className="containerProfile">
                <div className="containerDescriptionUsername">
                    <p className="nameProfile">{userr.displayName}</p>
                    <label className="description" htmlFor="description"><b>Descripción:</b></label>
                    <span className="profileDescription">Cuentanos sobre ti.</span>
                    <div className="toAdd"></div>
                    <label className="mail" htmlFor="mail"><b>Mail de contacto:</b></label>
                    <span className="profileMail">{userr.email}</span>
                    <label className="age" htmlFor="age"><b>Edad:</b></label>
                    <span className="profileAge">??</span>
                    <div className="toAdd1"></div>
                    <label className="location" htmlFor="location"><b>De donde eres:</b></label>
                    {
                        infoUser.map(item => (
                            <span key={item} className="profileLocation">{item.district}</span>
                        ))
                    }
                    <div className="toAdd2"></div>
                </div>
                <div className="containerImgAndButton">
                    {
                        userr.photoURL === null ?
                        <img type ="button" className="imgProfile"  alt="img usuario" src="https://i.ibb.co/vLyndPX/usuario-sin-foto.png"/>
                        :
                        <img type ="button" className="imgProfile"  alt="img usuario" src={userr.photoURL}/>
                    }
                    <div className="addButton">
                        <button className="editProfile">Editar perfil</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
