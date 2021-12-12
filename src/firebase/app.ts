import { initializeApp } from 'firebase/app'
import { env } from '../utils/env'

export const app = initializeApp(JSON.parse(env.FIREBASE_CONFIG))
