
const firebaseConfig = {
    apiKey: "AIzaSyBNTFGMbfaQ8-B00MHRPGnV3Tw2IsUDaxU",
    authDomain: "seek-and-give.firebaseapp.com",
    projectId: "seek-and-give",
    storageBucket: "seek-and-give.appspot.com",
    databaseURL: "https://seek-and-give-default-rtdb.asia-southeast1.firebasedatabase.app/",
    messagingSenderId: "842226275732",
    appId: "1:842226275732:web:af5e5dc020f063378c2b81",
    measurementId: "G-42BDZ1S75N"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();
// const database = firebase.database();


// document.getElementById("Login").addEventListener("submit",(event) => {
//      event.preventDefault()
// })

// document.getElementById("signup").addEventListener("submit",(event) => {
//     event.preventDefault()
// })
firebase.auth().onAuthStateChanged((user) => {
    //const name = document.getElementById("lname").value
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      location.replace("welcome.html")
      // ...
    } else {
      // User is signed out
      // ...
    }
  });

function register() {
    const name = document.getElementById("rname").value
    const email = document.getElementById("remail").value
    const password = document.getElementById("rpass").value
    firebase.database().ref('user/'+user.uid).set(
        {
            name : name,
            email : email,
            last_login : Date.now()
        }
    );
    firebase.auth().createUserWithEmailAndPassword(email, password)

    .then(function()
    {
        
        //  var user = auth.currentUser

        //  var database_ref = database.ref()

        //  var user_data ={
        //      name : name,
        //      email : email,
        //      last_login : Date.now()
        //  }

        //  database_ref.child('users/'+user.uid).set(user_data)

         alert("User Created!!");
    })
    .catch(function(error){
        var error_code = error.code
        var error_message = error.message
        alert(error_message)
    })
}

function login(){
    const email = document.getElementById("lemail").value
    const password = document.getElementById("lpass").value

    firebase.auth().signInWithEmailAndPassword(email, password)
  .then(function() {
    // var user = auth.currentUser

    // var database_ref = database.ref()

    // var user_data ={
    //     last_login : Date.now()
    // }

    // database_ref.child('users/'+user.uid).update(user_data)

    alert("User LogedIn!!");
  })
  .catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage)
  });
}

