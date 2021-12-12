import { onAuthStateChanged } from 'firebase/auth'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import { auth, signOut } from '../firebase/auth'
import { UserContextProvider, useUser } from '../hooks/useUser'
import '../styles/globals.css'

function AppContainer(props: AppProps) {
  return (
    <UserContextProvider>
      <App {...props} />
    </UserContextProvider>
  )
}

const App = ({ Component, pageProps }: AppProps) => {
  const [, setUser] = useUser()
  useEffect(
    () =>
      onAuthStateChanged(
        auth,
        (user) => {
          setUser(user)
        },
        signOut
      ),
    []
  )

  return <Component {...pageProps} />
}

export default AppContainer
