const firebaseConfig = {
    apiKey: "AIzaSyBNTFGMbfaQ8-B00MHRPGnV3Tw2IsUDaxU",
    authDomain: "seek-and-give.firebaseapp.com",
    databaseURL: "https://seek-and-give-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "seek-and-give",
    storageBucket: "seek-and-give.appspot.com",
    messagingSenderId: "842226275732",
    appId: "1:842226275732:web:9442bcc64cde93168c2b81",
    measurementId: "G-D5YDZYR08Y"
  };

  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

 firebase.database().ref('users').on('value',(data)=>{
     let users= data.val();
    //  document.getElementById('request').innerHTML = '';
     for(const user in users)
     {
        document.getElementById('request').innerHTML +=`
        <tr>
                    <td>
                        <span class="icon">${users[user].userName.charAt(0)}</span><span class="name"> ${users[user].userName} </span>
                        <div class="helpreq">
                        ${users[user].request} </div>
                        <div class="mail"> ${users[user].email},${users[user].place}</div>
                    </td>
        </tr>
        ` ;
     }
 })