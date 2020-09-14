import React, { useContext } from 'react'
import { UserContext } from '../Context/UseContext.js'

const Feed = () => {

    let { publication, setPublication, publicationfeed, cancel } = useContext(UserContext)

    return (
        <div className="containerLofche">
            <div className="feedLofche">
                <form className="publicationFeed">
                    <input 
                        type="text" 
                        className="textPublication" 
                        placeholder="Pregunta a tu comunidad" 
                        name="publication" 
                        onChange={ e => setPublication(e.target.value) }
                        value={publication}
                    />
                    <div className="butonsPublication">
                        <button type="button" id="btnCancel" className="btnCancel" onClick={() => cancel()}>Cancelar</button>
                        <button type="button" id="btnPublish" className="btnPublish" onClick={() => publicationfeed()}>Publicar</button>
                    </div>
                </form>
                <div className="messagesContainer"></div>  
            </div>
        </div>
    )
}

export default Feed
