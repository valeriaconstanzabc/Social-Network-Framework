import React, { useContext } from 'react'
import { UserContext } from '../Context/UseContext.js'
import { auth } from '../../firebase.js'

const Feed = () => {

    let { publication, setPublication, publicationfeed, cancel, setImage } = useContext(UserContext)
    const [error, setError] = React.useState("")
    const userr = auth.currentUser;

    const choosefile = (e) => {
        const file = e.target.files[0]
        if(file){
            const fileType = file["type"]
            const validImageTypes = ["image/jpeg", "image/png", "image/jpg",]
            if(validImageTypes.includes(fileType)){
                setError("")
                setImage(file)
            }else {
                setError('* Por favor selecciona un formato válido (jpeg, png, jpg)')
            }
        }
    }

    return (
        <div className="containerLofche">
            <div className="feedLofche">
                <form className="publicationFeed">
                    {/* <div className="containerBtnEditImgProfile"> */}
                    <input type="file" className="editImgProfil" onChange={choosefile}></input>
                    <p className="error" id="errorMessage">{error}</p>
                    {/* </div> */}
                    <input 
                        type="text" 
                        className="textPublication" 
                        placeholder="Pregunta a tu comunidad" 
                        name="publication" 
                        onChange={ e => setPublication(e.target.value) }
                        value={publication}
                    />
                    <div className="butonsPublication">
                        <button 
                            type="button" 
                            id="btnCancel" 
                            className="btnCancel" 
                            onClick={() => cancel()}>
                            Cancelar
                        </button>
                        <button 
                            type="button" 
                            id="btnPublish" 
                            className="btnPublish" 
                            onClick={() => publicationfeed()}>
                            Publicar
                        </button>
                    </div>
                </form>
                <div className="messagesContainer"></div>  
            </div>
        </div>
    )
}

export default Feed
