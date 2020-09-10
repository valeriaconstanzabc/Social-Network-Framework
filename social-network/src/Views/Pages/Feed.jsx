import React from 'react'

const Feed = () => {

    const [publication, setPublication] = React.useState('')

    const publicationfeed = (e) => {
        e.preventDefault()
        if(!publication.trim()){
            return
        }
        setPublication('')
        
    }
    
    const cancel = () => {
        setPublication('')
    }
    

    return (
        <div className="containerLofche">
            <div className="feedLofche">
                <form className="publicationFeed" onSubmit={publicationfeed}>
                    <input 
                        type="text" 
                        className="textPublication" 
                        placeholder="Pregunta a tu comunidad" 
                        name="publication" 
                        onChange={ e => setPublication(e.target.value) }
                        value={publication}
                    />
                    <div className="butonsPublication">
                        <button type="submit" id="btnCancel" className="btnCancel" onClick={() => cancel()}>Cancelar</button>
                        <button type="submit" id="btnPublish" className="btnPublish">Publicar</button>
                    </div>
                </form>
                <div className="messagesContainer"></div>  
            </div>
        </div>
    )
}

export default Feed
