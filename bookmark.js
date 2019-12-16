var search_list = "<table><thead><tr><th>Book Name</th><th>Link</th><th>Delete</th></tr></thead>";

var bulletin = `<div id="bulletin_board">
                    <span id="topic">&spades;公告&spades;</span><br>
                    網站已全面更新<br>
                    Email驗證後才可使用全部內容，否則只可使用限制模式<br>
                </div>`;

var withemailverify = `<select id="website">
                        <option value="看動漫">看動漫</option>
                        <option value="動漫屋">動漫屋</option>
                        <option value="nhentai" hidden>Nhentai</option>
                        </select>`;

var noneemailverify = `只支援看動漫`;

var firebaseConfig = {

    apiKey: "AIzaSyAZM5RCY5TAiBYwEPselITtTA5Xgy-GPoY",

    authDomain: "nhentai-bookmark.firebaseapp.com",

    projectId: "nhentai-bookmark",

};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var user = firebase.auth().currentUser;

var count = 0;

function add() {

    var user = firebase.auth().currentUser;

    if (document.getElementById("name").value === "") {

        alert("請輸入標籤名稱");

        return;

    }

    var name = document.getElementById("name").value;

    var Url = document.getElementById("URL").value;

    var website = document.getElementById("website").value;

    var read_to = document.getElementById("readto").value;

    var path = `/${user.uid}/${website}/book/`;

    firebase.firestore().collection(`${path}`).doc(`${name}`).set({

        number: `${Url}`,

        readto: `${read_to}`

    });

    document.getElementById("name").value = "";

    document.getElementById("URL").value = "";

    document.getElementById("readto").value = "";

    loadsearch();

}

function add1() {

    var user = firebase.auth().currentUser;

    if (document.getElementById("name").value === "") {

        alert("請輸入標籤名稱");

        return;

    }

    var name = document.getElementById("name").value;

    var Url = document.getElementById("URL").value;

    var read_to = document.getElementById("readto").value;

    var path = `/${user.uid}/看動漫/book/`;

    firebase.firestore().collection(`${path}`).doc(`${name}`).set({

        number: `${Url}`,

        readto: `${read_to}`

    });

    document.getElementById("name").value = "";

    document.getElementById("URL").value = "";

    document.getElementById("readto").value = "";

    loadsearch();

}

function loadsearch() {

    var user = firebase.auth().currentUser;

    search_list = `<table>
                    <thead>
                        <tr>
                            <th>From</th>
                            <th>Book Name</th>
                            <th>Read to</th>
                            <th>Edit Read to</th>
                            <th>Link</th>
                            <th>Delete</th>
                            <th>Share</th>
                        </tr>
                    </thead>`;

    firebase.firestore().collection(`/${user.uid}/nhentai/book/`).get().then(function (querySnapshot) {

        querySnapshot.forEach(function (doc) {

            search_list += `<tr>
                                <td>N站</td>
                                <td>${doc.id}</td>
                                <td>${doc.data().readto}</td>
                                <td><input type="button" value="Edit" onclick='firebase.firestore().collection("/${user.uid}/nhentai/book/").doc("${doc.id}").update({readto:up()});loadsearch();'></input></td>
                                <td><input type="button" value="GO!" onclick='javascript:window.open("https://nhentai.net/g/${doc.data().number}/1/");'></input></td>
                                <td><input type='button' value='Delete' onclick='firebase.firestore().collection("/${user.uid}/nhentai/book/").doc("${doc.id}").delete();loadsearch();'></input></td>
                                <td>
                                <input type='button' value='Share' onclick='document.getElementById("we${count}").setAttribute("type","text");document.getElementById("we${count}").select();document.execCommand("copy");document.getElementById("we${count}").setAttribute("type","hidden");alert("複製成功!");'></input>
                                <input type="hidden" id='we${count}' value='https://nhentai.net/g/${doc.data().number}/1/' hidden></input>
                                </td>   
                            </tr>`;

            count++;

        });

    });

    firebase.firestore().collection(`/${user.uid}/動漫屋/book/`).get().then(function (querySnapshot) {

        querySnapshot.forEach(function (doc) {

            search_list += `<tr>
                                <td>動漫屋</td>
                                <td>${doc.id}</td>
                                <td>${doc.data().readto}</td>
                                <td><input type="button" value="Edit" onclick='firebase.firestore().collection("/${user.uid}/動漫屋/book/").doc("${doc.id}").update({readto:up()});loadsearch();'></input></td>
                                <td><input type="button" value="GO!" onclick='javascript:window.open("https://dm5.io/${doc.data().number}/");'></input></td>
                                <td><input type='button' value='Delete' onclick='firebase.firestore().collection("/${user.uid}/動漫屋/book/").doc("${doc.id}").delete();loadsearch();'></input></td>
                                <td>
                                <input type='button' value='Share' onclick='document.getElementById("we${count}").setAttribute("type","text");document.getElementById("we${count}").select();document.execCommand("copy");document.getElementById("we${count}").setAttribute("type","hidden");alert("複製成功!");'></input>                                
                                <input type="hidden" id='we${count}' value='https://dm5.io/${doc.data().number}/'></input>
                                </td>
                            </tr>`;

            count++;

        });

    });

    firebase.firestore().collection(`/${user.uid}/看動漫/book/`).get().then(function (querySnapshot) {

        querySnapshot.forEach(function (doc) {

            search_list += `<tr>
                                <td>看動漫</td>
                                <td>${doc.id}</td>
                                <td>${doc.data().readto}</td>
                                <td><input type="button" value="Edit" onclick='firebase.firestore().collection("/${user.uid}/看動漫/book/").doc("${doc.id}").update({readto:up()});loadsearch();'></input></td>
                                <td><input type="button" value="GO!" onclick='javascript:window.open("https://tw.manhuagui.com/comic/${doc.data().number}/");'></input></td>
                                <td><input type='button' value='Delete' onclick='firebase.firestore().collection("/${user.uid}/看動漫/book/").doc("${doc.id}").delete();loadsearch();'></input></td>
                                <td>
                                    <input type='button' value='Share' onclick='document.getElementById("we${count}").setAttribute("type","text");document.getElementById("we${count}").select();document.execCommand("copy");document.getElementById("we${count}").setAttribute("type","hidden");alert("複製成功!");'></input>
                                    <input type="hidden" id='we${count}' value='https://tw.manhuagui.com/comic/${doc.data().number}/' ></input>
                                </td>
                            </tr>`;

            count++;

        });

        document.getElementById("bookmarks").innerHTML = `${search_list}</table>`;

        count = 0;

    });

}

function up() {

    var read = window.prompt("讀到哪裡?\r( Where have you read to? )");

    if (read) {

        return read;

    } else {

        return;

    }

}

function newuser() {

    var account = document.getElementById("EM").value;

    var password = document.getElementById("PW").value;

    firebase.auth().createUserWithEmailAndPassword(account, password).then(function () {

        firebase.auth().currentUser.sendEmailVerification().then(function () {

            alert("驗證信已經寄出!\r( Verify email has been send! )");

        }).catch(function (error) {

            alert("發生錯誤!\r( Error happened ! )");

        });

    }).catch(function (error) {

        var errorCode = error.code;

        var errorMessage = error.message;

        if (errorCode == "auth/weak-password") {

            alert("密碼強度過低，請重新輸入\r( The password is too weak, please change one )");

            document.getElementById("PW").value = "";

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

                alert("密碼錯誤\r( Wrong password )");

            } else {

                alert(errorMessage);

            }

            console.log(error);

            document.getElementById("sign").disabled = false;

        });

    }

    document.getElementById("sign").disabled = true;

}

function logout() {

    if (confirm("你確定要登出嗎?\r( Are you sure to log out? )")) {

        firebase.auth().signOut();

        alert("已登出\r( You have logged out )");

    } else {

        return;

    }

}

function initial() {

    firebase.auth().onAuthStateChanged(function (user) {


        if (user && user.emailVerified) {

            var email = user.email;

            document.getElementById("sign").disabled = true;

            document.getElementById("newer").disabled = true;

            document.getElementById("resetPW").disabled = true;

            alert(`你以 ${email} 的身分登入了\r( You have been logged in as ${email}!)`);

            document.getElementById("main").innerHTML = `Book name OR Your own tag: <input type="text" id="name" value="" required /><br><br>
                                                        Numbers: <input type="text" id="URL" value="" required /><br><br>
                                                        Read to: <input type="text" id="readto" value="" required />&nbsp;${withemailverify}<br><br>
                                                        <input type="button" id="add_new" value="新增 ( Add New Book )" onclick="add()">&nbsp;
                                                        <a href="https://tw.manhuagui.com/" target="_blank"><input type="button" id="CHINESE" value="看動漫首頁"></a><br><br>
                                                        ${bulletin}<hr>
                                                        <div id="bookmarks"></div><br>
                                                        <input type="button" value="登出 ( Log out )" onclick="logout()">`;
            //https://nhentai.net/language/chinese/

            loadsearch();

        } else if (user) {

            var email = user.email;

            document.getElementById("sign").disabled = true;

            document.getElementById("newer").disabled = true;

            document.getElementById("resetPW").disabled = true;

            alert(`你以 ${email} 的身分登入了\r( You have been logged in as ${email}!)`);

            document.getElementById("main").innerHTML = `Book name OR Your own tag: <input type="text" id="name" value="" required /><br><br>
                                                        Numbers: <input type="text" id="URL" value="" required /><br><br>
                                                        Read to: <input type="text" id="readto" value="" required />&nbsp;${noneemailverify}<br><br>
                                                        <input type="button" id="add_new" value="新增 ( Add New Book )" onclick="add1()">&nbsp;
                                                        <a href="https://tw.manhuagui.com/" target="_blank"><input type="button" id="CHINESE" value="看動漫首頁"></a><br><br>
                                                        ${bulletin}<hr>
                                                        <div id="bookmarks"></div><br>
                                                        <input type="button" value="登出 ( Log out )" onclick="logout()">`;

            loadsearch();

        } else {

            document.getElementById("main").innerHTML = `<div class="login"><h2>漫畫筆記本</h2>
            帳號: <input type="text" id="EM" placeholder="Your Email" required　style="display:inline;width:auto;"><br><br>
            密碼: <input type="password" id="PW" placeholder="Password" style="display:inline;"><br><br>
            <input type="submit" value="註冊" onclick="newuser()" id="newer">&nbsp;
            <input type="submit" value="登入" onclick="signin()" id="sign">&nbsp;
            <input type="submit" value="重設密碼" onclick="resetpassword()" id="resetPW"><br><br>
            需<span id="highlighting">註冊</span>後才可使用<br>
            只需提供電子郵件與密碼即可註冊<br><br>
            <span id='highlighting'>請注意</span><br>
            需進行<span id="highlighting">Email驗證</span>後才可使用全部內容<br></div>`;

        }

    });

}

function resetpassword() {

    var email = window.prompt("請輸入你的電子郵件信箱 ( Your email )");

    firebase.auth().sendPasswordResetEmail(email).then(function () {

        alert(`一封密碼重設的信件已寄至 ${email}\r( A password reset email has been sent to ${email} )`);

    }).catch(function (error) {

        alert("發生錯誤!\r( Error happened ! )");

    });

}

window.addEventListener("load", initial, false);