// import React from 'react'
import React, { useContext } from 'react'
import { UserContext } from '../Context/UseContext.js'
import { auth } from '../../firebase.js'

const Profile = () => {

    let { infoUser, saveEditProfile,editProfile, setEditProfile,
        description, setDescription, years, setYears,
        district, setDistrict, editProfileEvent 
    } = useContext(UserContext)

    const userr = auth.currentUser;

    const cancelEditProfile = () => {
        setEditProfile(false)
    }


    return (
        <div className="containerPageProfile">
            {
                infoUser.map(item => (
                    <div key={item} className="containerProfile">
                        <div className="containerDescriptionUsername">
                            <p className="nameProfile">{userr.displayName}</p>
                            <label className="description" htmlFor="description"><b>Descripción:</b></label>
                            {
                                editProfile === true ?
                                <textarea 
                                    type="text"
                                    className="profileDescriptionImput"
                                    placeholder={item.description}
                                    defaulvalue={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    >
                                </textarea>
                                :
                                <span className="profileDescription">{item.description}</span>
                            }
                            <div className="toAdd"></div>
                            <label className="mail" htmlFor="mail"><b>Mail de contacto:</b></label>
                            <span className="profileMail">{userr.email}</span>
                            <label className="years" htmlFor="years"><b>Edad:</b></label>
                            {
                                editProfile === true ?
                                <textarea 
                                    type="text"
                                    className="profileAgeImput" 
                                    placeholder={item.years}
                                    defaulvalue={years}
                                    onChange={(e) => setYears(e.target.value)}
                                    >
                                </textarea>
                                :
                                <span className="profileAge">{item.years}</span>
                            }
                            <div className="toAdd1"></div>
                            <label className="location" htmlFor="location"><b>De donde eres:</b></label>
                            {
                                editProfile === true ?
                                <textarea 
                                    type="text"
                                    className="profileLocationImput" 
                                    placeholder={item.district}
                                    defaulvalue={district}
                                    onChange={(e) => setDistrict(e.target.value)}
                                    >
                                </textarea>
                                :
                                <span className="profileLocation">{item.district}</span>
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
                                {
                                    editProfile === false ?
                                    <button className="editProfile" onClick={() => editProfileEvent(item)}>Editar perfil</button>
                                    :
                                    <div className="containerBtnsProfile">
                                        <button className="editProfileCancel" onClick={()=> cancelEditProfile()}>Cancelar</button>
                                        <button className="editProfileSave" onClick={() => saveEditProfile()}>Guardar</button>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Profile
