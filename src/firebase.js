import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyDVIneZOlcv6gQye5MHNWkgLwgAMhLvNMA",
        authDomain: "todo-app-cp-b8b0a.firebaseapp.com",
        databaseURL: "https://todo-app-cp-b8b0a.firebaseio.com",
        projectId: "todo-app-cp-b8b0a",
        storageBucket: "todo-app-cp-b8b0a.appspot.com",
        messagingSenderId: "855165884409",
        appId: "1:855165884409:web:6c3d2e37d32fd027b28f28",
        measurementId: "G-MQLM66D6J2"
});

const db = firebaseApp.firestore();

export default db;
