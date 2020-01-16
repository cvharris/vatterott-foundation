import fb from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

export default (context, inject) => {
  const config = {
    apiKey: 'AIzaSyA8iYwOY805j9Gn5uY-jYg2hlAgJvYPi3Y',
    authDomain: 'vatterott-foundation.firebaseapp.com',
    databaseURL: 'https://vatterott-foundation.firebaseio.com',
    projectId: 'vatterott-foundation',
    storageBucket: 'vatterott-foundation.appspot.com',
    messagingSenderId: '534883308245',
    appId: '1:534883308245:web:36963764a2bfb7a6c4c85c',
    measurementId: 'G-BS6YSWEQB2'
  }

  fb.initializeApp(config)

  const db = fb.firestore()
  const auth = fb.auth()

  inject('db', db)
  inject('auth', auth)
  inject('firebase', fb)
}
