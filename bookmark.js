var search_list = "<table><thead><tr><th>Book Name</th><th>Link</th><th>Delete</th></tr></thead>";
var keys = [];
var name;
var tag = 0;
var db = firebase.firestore();
var path = "/majiku/nhentai/name/";
var bookcount = 1;
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
        document.getElementById("name").value = "";
        return;
    }

    var name = "hentai-" + document.getElementById("name").value;
    var Url = document.getElementById("URL").value;

    db.collection(`${path}`).doc(`${bookcount}`).set({
        name: `${name}`,
        number: `${Url}`
    });

    bookcount++;
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



window.addEventListener("load", start, false);
