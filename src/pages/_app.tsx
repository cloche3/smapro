import { onAuthStateChanged } from 'firebase/auth'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import '../styles/globals.css'
import { auth, signOut } from '../utils/firebase'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => onAuthStateChanged(auth, console.log, signOut), [])

  return <Component {...pageProps} />
}

export default MyApp
