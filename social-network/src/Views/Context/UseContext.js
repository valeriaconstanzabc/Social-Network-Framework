import React from 'react'

let UserContext = React.createContext()
let { Provider, Consumer } = UserContext

function UserProvider({ children }) {

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
    <Provider value={{ publication, setPublication, publicationfeed, 
        cancel
    }}>
      {children}
    </Provider>
  )
}

export { UserProvider, Consumer as UserConsumer, UserContext }