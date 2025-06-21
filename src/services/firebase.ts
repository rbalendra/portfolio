import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: import.meta.env.VITE_FIRESTORE_API,
	authDomain: 'rajeev-portfolio-6b888.firebaseapp.com',
	projectId: 'rajeev-portfolio-6b888',
	storageBucket: 'rajeev-portfolio-6b888.firebasestorage.app',
	messagingSenderId: '551073018146',
	appId: '1:551073018146:web:8285b877033699cf77f57b',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
