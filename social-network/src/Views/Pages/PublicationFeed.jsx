import React, { useContext } from 'react'
import { UserContext } from '../Context/UseContext.js'
import firebase from 'firebase/app'
import { auth } from '../../firebase.js'

const PublicationFeed = () => {

  let { post, setPost, deletePublication, editPublication, 
    setEditPublication, saveEditPublication, editar, 
    setNewPublication } = useContext(UserContext)

  const userr = auth.currentUser;

  React.useEffect(() => {
    const printPublication = async () => {
      try {
        const db = firebase.firestore()
        await db.collection('Publicaciones').orderBy('date', 'desc').onSnapshot(
          (snap => {
            const arrayData = snap.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            console.log(arrayData)
            setPost(arrayData)  
          }));
      } catch (error) { 
        console.log(error) 
      }
    }
    printPublication()
  }, [ setPost ])

    return (
      <div className="containerPublicationFeed">
        {
          post.map(item => (
            <div key={item.id} className="containerPublication">
              <div className="containerNameAndEdit">
                  <span className="namePublication">{item.name || item.email}</span>
              {
                item.uid === userr.uid ?
                  <div className="crudContainer">
                    <button type ="button" className="btnCrudOptions"><img src="https://raw.githubusercontent.com/valeriaconstanzabc/SCL013-social-network/master/src/imagenes/dots1.png" alt="imagen editar" className="imgOptionsDots"/></button>
                    <div className="dropdownContentEdit">
                      <button className="editCrud" onClick={() => editar(item)}>Editar</button>
                      <button className="deleteCrud" onClick={() => deletePublication(item.id)}>Delete</button>  
                    </div>
                  </div>
                :
                <div className="containerNameAndEdit"></div>
              }
              </div>

              <div id="messagePostContainer" className="textBoxStyle"> 
                <span>{item.date}</span> 
                <div className="edit">
                  {
                    editPublication === true && item.uid === userr.uid ?
                    <div >
                      <textarea 
                        className="postEditCrud" 
                        defaulvalue={item.text} 
                        onChange={e => setNewPublication(e.target.value)}>
                          {item.text} 
                        </textarea>
                      <div className="buttonsSaveAndEdit">
                        <div>
                          <button className="cancelEditCrud" onClick={() => setEditPublication(false)}>Cancelar</button>
                        </div>
                        <div>
                          <button className="buttonSave" onClick={() => saveEditPublication()}>Guardar cambios</button>
                        </div>
                      </div>
                    </div>
                    :
                    <span className="currentText" type="text">{item.text}</span>
                  }
                </div>
                <div className="toAdd"></div>
              </div>

              <div className="reactions">
                <div className="likes">
                  <button type ="button" className="btnLike"><img src="https://raw.githubusercontent.com/valeriaconstanzabc/SCL013-social-network/master/src/imagenes/heart.png" alt="like" className="imgOptionsDots"/></button>
                  <div className="likesContainer"></div>
                </div>
              </div>
            </div>
          ))
        }        
      </div>
    )
}

export default PublicationFeed
