import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyChMTXu-PrOw-gy5D_PM9h0sw9zlW3Rg6w",
  authDomain: "disneyplus-clone-36362.firebaseapp.com",
  projectId: "disneyplus-clone-36362",
  storageBucket: "disneyplus-clone-36362.appspot.com",
  messagingSenderId: "388074636085",
  appId: "1:388074636085:web:beb22ac08699741326427c",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.fireStore();

export { db };
