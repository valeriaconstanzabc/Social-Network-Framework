import React from 'react'
import firebase from 'firebase/app'

const PublicationFeed = () => {

  const [post, setPost] = React.useState([])

    React.useEffect(() => {

      const printPublication = async () => {
          const db = firebase.firestore()
          try {
              const data = await db.collection('Publicaciones').get()
              const arrayData = data.docs.map(doc => ({id: doc.id, ...doc.data()}))
              console.log(arrayData)
              setPost(arrayData)    
          } catch (error) {
              console.log(error)
          }
      }
      printPublication()

    }, [])


    return (
      <div className="containerPublicationFeed">
        {
          post.map(item => (
            <div key={item.id} className="containerPublication">
              <div className="containerNameAndEdit">
                <span className="namePublication">{item.name || item.email}</span>
                <div className="crudContainer">
                  <button type ="button" className="btnCrudOptions"><img src="https://raw.githubusercontent.com/valeriaconstanzabc/SCL013-social-network/master/src/imagenes/dots1.png" alt="imagen editar" className="imgOptionsDots"/></button>
                  <div className="dropdownContentEdit">
                    <button className="editCrud">Editar</button>
                    <button className="deleteCrud">Delete</button>  
                  </div>
                </div>
              </div>

              <div id="messagePostContainer" classna="textBoxStyle"> 
                <span>{item.date}</span> 
                <div className="edit">
                  <span className="currentText" type="text">{item.text}</span>
                </div>
                <div className="toAdd"></div>
              </div>

              {/* <div className="reactions">
                <div className="likes">
                  <button type ="button" className="btnLike"><img src="imagenes/heart.png" className="imgOptionsDots"/></button>
                  <div className="likesContainer"></div>
                </div>
              </div> */}
            </div>
          ))
        }        
      </div>
    )
}

export default PublicationFeed
