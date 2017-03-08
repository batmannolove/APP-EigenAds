
// Initialize Firebase
var config = {
    apiKey: "AIzaSyAkJ8ZpvZIPhmqRtPijWUzm9AscDyLmWow",
    authDomain: "eigenads-b4542.firebaseapp.com",
    databaseURL: "https://eigenads-b4542.firebaseio.com",
    storageBucket: "eigenads-b4542.appspot.com",
    messagingSenderId: "231627362733"
};
firebase.initializeApp(config);

module.exports = {

  loggedIn() {
    return new Promise(function(resolve, reject) {
      firebase.auth().onAuthStateChanged((user) => {
        resolve(!!user);
      });
    });
  },

  createUser(e) {
    e.preventDefault();
    const email = this.createEmail.value;
    const password = this.createPassword.value;

    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error){
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(`Error Code: ${errorCode}. Message: ${errorMessage}`);
    });
  },

  loginUser(e, success) {
    e.preventDefault();
    const email = this.loginEmail.value;
    const password = this.loginPassword.value;

    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error){
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(`Error Code: ${errorCode}. Message: ${errorMessage}`);
    });
  },


  signOutUser(e) {
    // e.preventDefault();
    firebase.auth().signOut().then(function() {
      alert('User signed out.');

    }, function(error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(`Error Code: ${errorCode}. Message: ${errorMessage}`);
    });
  }




};
