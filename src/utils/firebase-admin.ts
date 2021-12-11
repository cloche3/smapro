import firebaseAdmin from 'firebase-admin'

if (firebaseAdmin.apps.length === 0) {
  firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert(
      JSON.parse(process.env.FIREBASE_ADMIN_CONFIG ?? '{}')
    ),
  })
}

export const admin = firebaseAdmin
