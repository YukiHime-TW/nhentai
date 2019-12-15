var search_list = "<table><thead><tr><th>Book Name</th><th>Link</th><th>Delete</th></tr></thead>";
var keys = [];
var name;
var tag = 0;
var path = "/majiku/nhentai/book";
var firebaseConfig = {
    apiKey: "AIzaSyAZM5RCY5TAiBYwEPselITtTA5Xgy-GPoY",
    authDomain: "nhentai-bookmark.firebaseapp.com",
    projectId: "nhentai-bookmark",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function start() {
    document.getElementById("bookmarks").innerHTML = search_list + "</table>";
    loadsearch();
}

function add() {

    if (document.getElementById("name").value === "") {
        alert("請輸入標籤名稱");
        return;
    }

    var name = "hentai-" + document.getElementById("name").value;
    var Url = document.getElementById("URL").value;

    firebase.firestore().collection(path).add({
        name: `${name}`,
        number: `${Url}`,
    });

    localStorage.setItem(name, Url);
    document.getElementById("name").value = "";
    document.getElementById("URL").value = "";
    loadsearch();
}

function loadsearch() {

    var length = localStorage.length;

    search_list = "<table><thead><tr><th>Book Name</th><th>Link</th><th>Delete</th></tr></thead>";

    for (var i = 0; i < length; ++i) {
        keys[i] = localStorage.key(i);
    }

    keys.sort();

    for (tag in keys) {

        if (keys[tag].startsWith("hentai-")) {
            name = keys[tag];
            search_list += "<tr><td>" + keys[tag].substring(7) + "</td><td><a href='https://nhentai.net/g/" + localStorage.getItem(keys[tag]) + "/1/' target='_blank'>" + localStorage.getItem(keys[tag]) + "</a></td><td><input type='button' value='Delete' onclick='deleting()'></td></tr>";

        }
    }

    document.getElementById("bookmarks").innerHTML = search_list + "</table>";
}

function deleting() {

    localStorage.removeItem(keys[tag]);
    loadsearch();

}

function remove() {

    var confirm = window.prompt("Are you really sure about it?(Y for Yes, N for No)");

    if (confirm === "Y") {
        localStorage.clear();
        search_list = "<table><thead><tr><th>Book Name</th><th>Link</th><th>Delete</th></tr></thead>";
        document.getElementById("bookmarks").innerHTML = search_list + "</table>";
        document.getElementById("name").value = "";
        document.getElementById("URL").value = "";
        tag = 0;
    } else if (confirm === "N") {
        return;
    } else {
        return;
    }

}

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
            
        }

    });

}

window.addEventListener("load", start, false);
