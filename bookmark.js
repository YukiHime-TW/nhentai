var search_list = "<table><thead><tr><th>Book Name</th><th>Link</th><th>Delete</th></tr></thead>";
var keys = [];
var name;
var tag = 0;
var firebaseConfig = {
    apiKey: "AIzaSyAZM5RCY5TAiBYwEPselITtTA5Xgy-GPoY",
    authDomain: "nhentai-bookmark.firebaseapp.com",
    projectId: "nhentai-bookmark",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var user=firebase.auth().currentUser;

function add() {

    var user=firebase.auth().currentUser;

    var path = "/"+`${user.uid}`+"/nhentai/book";

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

function logout(){
    firebase.auth().signOut();
    alert("You have logged out");
}

function initial() {

    firebase.auth().onAuthStateChanged(function (user) {

        if (user) {

            var email=user.email;

            document.getElementById("sign").disabled = true;

            alert("You have been logged in as " + email + "!");

            document.getElementById("main").innerHTML='Book name OR Your own tag: <input type="text" id="name" value="" required /><br><br>Numbers: <input type="text" id="URL" value="" required /><br><br><input type="button" id="add_new" value="Add New Book" onclick="add()">&nbsp;<a href="https://nhentai.net/language/chinese/" target="_blank"><input type="button" id="CHINESE"value="中文本本這邊請"></a>&nbsp;<input type="button" id="Clear" value="Clear All ( Only when you want to have a new start )" onclick="remove()"><br><br><span id="highlighting" style="font-size: larger;">在刪除單筆資料後，請重新整理頁面以取得正確書籤</span><br><br><div id="bulletin_board"><span id="topic">&spades;公告&spades;</span><br><span id="highlighting">重要!!網站正在更新中，請勿新增任何新的本本!</span><br>請新用戶注意，一旦開始使用，您的電腦或是手機便<span id="highlighting">不可關機</span>，否則會導致資料消失<br>且請所有用戶注意，各瀏覽器之間的紀錄<span id="highlighting">不共通</span>，使用上需注意。<br>關於這幾點，開發者已經在著手學習資料庫的使用。<br>如果有任何操作上的更新，將會在這裡進行公告。<br></div><hr><div id="bookmarks"></div><input type="button" value="Log out" onclick="logout()">';
            
        }else{

            document.getElementById("main").innerHTML='<h2>本本筆記本</h2><div>帳號: <input type="text" id="EM" placeholder="Your Email" required　style="display:inline;width:auto;"><br><br>密碼: <input type="password" id="PW" placeholder="Password"　style="display:inline;width:auto;"><br><br><input type="submit" value="註冊" onclick="newuser()" id="newer">&nbsp;<input type="submit" value="登入" onclick="signin()" id="sign"></div>'
        
        }

    });

}

window.onload = function () {
    initial();
};
