import React from 'react'
import { withRouter } from 'react-router-dom'

const Message = (props) => {

    const verificateCheck = () => {
        props.history.push('/inicio')
    }

    return (
        <div className="containerMessage">
            <div className="modalSignInRedirecting">
                <p>Confirma el correo de verificación que hemos enviado a tu mail 
                    y ya podrás ser parte de la comunidad <strong>Lofche!</strong>
                </p>
                <button type="button" className="btnRedirecting" onClick={() => verificateCheck()}>¡VAMOS!</button>
            </div>
        </div>
    )
}

export default withRouter(Message)
