import React from 'react'

const PublicationFeed = () => {
    return (
        <div className="containerPublication">
            <div className="containerNameAndEdit">
              <span className="namePublication">{doc.data().name || doc.data().email}</span>
              <div className="crudContainer">
                <button type ="button" className="btnCrudOptions"><img src="imagenes/dots1.png" alt="" className="imgOptionsDots"/></button>
                <div className="dropdownContentEdit">
                  <button className="editCrud">Editar</button>
                  <button className="deleteCrud">Delete</button>  
                </div>
              </div>
            </div>

            <div id="messagePostContainer" classna
            ="textBoxStyle"> 
              <span>{doc.data().email}</span>
              <span>{doc.data().date}</span> 
              <div className="edit">
                <span className="currentText" type="text">{doc.data().text}</span>
              </div>
              <div className="toAdd"></div>
            </div>

            <div className="reactions">
              <div className="likes">
                <button type ="button" className="btnLike" data-id={doc.id}><img src="imagenes/heart.png" className="imgOptionsDots"/></button>
                <div className="likesContainer" data-likes={doc.data().like.length}></div>
              </div>
            </div>
            
          </div>
    )
}

export default PublicationFeed
