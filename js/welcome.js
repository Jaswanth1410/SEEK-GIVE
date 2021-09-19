


firebase.auth().onAuthStateChanged((user) => {
    if (!user) {   
        location.replace("index.html");
        document.getElementById("user").innerHTML = " ";
    } else {
        document.getElementById("message").innerHTML = "WELCOME , " + user.email;
        document.getElementById("user").innerHTML = "k";
    }
})
function logout() {
    firebase.auth().signOut();
}