import firebase from 'firebase'
const config = {
    apiKey: "AIzaSyCY2ZSOpVmPu2EoiuIXYdzdbgd89A49Hy0",
    authDomain: "espresso-tracker-ca1df.firebaseapp.com",
    databaseURL: "https://espresso-tracker-ca1df.firebaseio.com",
    projectId: "espresso-tracker-ca1df",
    storageBucket: "espresso-tracker-ca1df.appspot.com",
    messagingSenderId: "172216131186"
};
firebase.initializeApp(config);
export default firebase;
