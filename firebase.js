import * as firebase from 'firebase'

let database

export const init = () => {

  let config = {
    apiKey: "XXXXXXXXXXXXXXXXXXXXXX",
    authDomain: "realtime-todo-app.firebaseapp.com",
    databaseURL: "https://realtime-todo-app.firebaseio.com",
    storageBucket: "realtime-todo-app.appspot.com",
    messagingSenderId: "XXXXXXXXXXXX"
  }
  
  firebase.initializeApp(config)
  database = firebase.database()
}