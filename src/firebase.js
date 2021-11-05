import firebase, { database } from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA_K20Op9vXuwbGD3Pl71KLbRTPmc9FcNU",
    authDomain: "idobatakaigi2-with-ham.firebaseapp.com",
    projectId: "idobatakaigi2-with-ham",
    storageBucket: "idobatakaigi2-with-ham.appspot.com",
    messagingSenderId: "353393360531",
    appId: "1:353393360531:web:723b72c62ec112a2335766"
  };

  firebase.initializeApp(firebaseConfig);
  const databese= firebase.database();
  const messageRef = databese.ref('messages');

export  const pushMessage = ({name, text}) => {
    messageRef.push({name, text});
  };