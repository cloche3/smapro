import { onAuthStateChanged } from 'firebase/auth'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import { auth, signOut } from '../firebase/auth'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => onAuthStateChanged(auth, console.log, signOut), [])

  return <Component {...pageProps} />
}

export default MyApp
