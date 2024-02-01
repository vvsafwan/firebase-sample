import { initializeApp } from 'firebase/app';
import { getMessaging, getToken } from 'firebase/messaging'

const firebaseApp = { }

export const app = initializeApp(firebaseApp)
export const messaging = getMessaging(app)
