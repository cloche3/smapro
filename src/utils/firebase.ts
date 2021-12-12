import { FirebaseApp, initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { env } from './env'

const app = globalThis.window
  ? initializeApp(JSON.parse(env.FIREBASE_CONFIG))
  : ({} as FirebaseApp)

export const auth = getAuth(app)

export const signIn = async () => {
  const provider = new GoogleAuthProvider()

  // 金沢工業大学の学生のみを対象にする
  provider.setCustomParameters({
    hd: 'planet.kanazawa-it.ac.jp',
  })

  try {
    const { user } = await signInWithPopup(auth, provider)
    const idToken = await user.getIdToken()

    await fetch('/api/session', {
      method: 'POST',
      body: JSON.stringify({
        idToken,
      }),
    })
    location.reload()
  } catch {
    alert('ログインに失敗しました')
  }
}

export const signOut = async () => {
  await fetch('/api/session', {
    method: 'DELETE',
  })
  await auth.signOut()
  location.reload()
}
