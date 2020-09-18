// import React from 'react'
import React from 'react'
import firebase from 'firebase/app'
import { auth } from '../../firebase.js'

const Profile = () => {

    const [infoUser, setInfoUser] = React.useState('')
    const userr = auth.currentUser;

    React.useEffect(() => {

        const ReadUser = async () => {
            const db = firebase.firestore()
            try {
                const data = await db.collection('usuarios').get()
                const arrayData = data.docs.map(doc => ({id: doc.id, ...doc.data()}))
                console.log(arrayData) 
                setInfoUser(arrayData) 
            } catch (error) {
                console.log(error)
            }
        }
        ReadUser()
    
    }, [])

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
                    {/* {
                        infoUser.map(item => ( */}
                            <span className="profileLocation">{userr.district}</span>
                    {/* //     ))
                    // } */}
                    <div className="toAdd2"></div>
                </div>
                <div className="containerImgAndButton">
                    <img className="imgProfile" alt="img usuario" src={userr.photoURL}/>
                    <div className="addButton">
                        <button className="editProfile">Editar perfil</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
