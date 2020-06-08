import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDcpOcj-RtakXXPUzt859DBBlvOannosPc",
    authDomain: "react-pruebas-34a91.firebaseapp.com",
    databaseURL: "https://react-pruebas-34a91.firebaseio.com",
    projectId: "react-pruebas-34a91",
    storageBucket: "react-pruebas-34a91.appspot.com",
    messagingSenderId: "183535085435",
    appId: "1:183535085435:web:0b2c04504170cdb5c5bfde",
    measurementId: "G-DXY61S3ZL7"
  };
firebase.initializeApp(config);
export default firebase;