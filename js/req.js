const firebaseConfig = {
    apiKey: "AIzaSyCZvItgULgJUS26WNwCpeKYqx405c6wpbk",
    authDomain: "request-a20af.firebaseapp.com",
    projectId: "request-a20af",
    storageBucket: "request-a20af.appspot.com",
    messagingSenderId: "691540627390",
    appId: "1:691540627390:web:f38de535450f7c2e9773ef",
    measurementId: "G-1FDB1GDHYC"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

 function add(){
     const name = document.getElementById("ename").value;
     const email = document.getElementById("email").value;
     const req = document.getElementById("hreq").value;
     const place = document.getElementById("place").value;
     var firebaseref = firebase.database().ref('users')
     var set_data = {
        userName: name,
        email : email,
        request : req,
        place : place
      };
      firebaseref.set(set_data);
    //   $('.success-message').show();
     
 }
