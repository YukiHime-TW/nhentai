var firebaseConfig = {
    apiKey: "AIzaSyAZM5RCY5TAiBYwEPselITtTA5Xgy-GPoY",
    authDomain: "nhentai-bookmark.firebaseapp.com",
    projectId: "nhentai-bookmark",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function newuser() {
    var account = document.getElementById("EM").value;
    var password = document.getElementById("PW").value;

    firebase.auth().createUserWithEmailAndPassword(account, password).catch(function (error) {

        var errorCode = error.code;
        var errorMessage = error.message;

        if (errorCode == "auth/weak-password") {
            alert("The password is too weak");
        } else {
            alert(errorMessage);
        }

        console.log(error);

    });

}

function signin() {

    if (firebase.auth().currentUser) {
        firebase.auth().signOut();
    } else {

        var account = document.getElementById("EM").value;
        var password = document.getElementById("PW").value;

        firebase.auth().signInWithEmailAndPassword(account, password).catch(function (error) {

            var errorCode = error.code;
            var errorMessage = error.message;

            if (errorCode === "auth/wrong-password") {
                alert("Wrong password");
            } else {
                alert(errorMessage);
            }

            console.log(error);

            document.getElementById("sign").disabled = false;

        });

    }

    document.getElementById("sign").disabled = true;

}

function initial() {

    firebase.auth().onAuthStateChanged(function (user) {

        if (user) {

            var email = user.email;

            document.getElementById("sign").disabled = true;

            alert("You have been logged in as " + email + "!");

            document.writeln("<a href='index.html'> To Your BookMark </a>");
            
        }

    });

}
window.onload = function () {
    initial();
};