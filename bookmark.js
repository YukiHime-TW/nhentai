var vid = `<div class="video-container">
<iframe id="video" src="https://www.youtube.com/embed/h8SWOJ1zrhw?autoplay=0&loop=1&fs=0&rel=0&modestbranding=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"  allowfullscreen></iframe>
<br>
<span id="youtube_input">Youtube 影片ID<br><input type="text" value="" id="youtubevideo" placeholder="https://www.youtube.com/watch?v=&Prime;影片ID&Prime;" style="width:80%;"></span>&nbsp;<input type="submit" value="play" onclick="video_update()">
</div>`;

var tweet = `<center><div id="twitter">
<a class="twitter-timeline" data-width="350" data-height="auto" data-chrome="nofooter" href="https://twitter.com/yukihimenote?ref_src=twsrc%5Etfw">Tweets by yukihimenote</a>
</script>
</div></center>`;

var withemailverify = `<select id="website">
                        <option value="看動漫">看動漫</option>
                        <option value="動漫屋">動漫屋</option>
                        <option value="wnacg">WNACG 紳士倉庫</option>
                        <option value="ehentai">E站(表)[ /g/ 以後的所有東西 ]</option>
                        <option value="exhentai">熊貓[ /g/ 以後的所有東西 ]</option>
                        <option value="read_only" disabled>以下Read to僅限輸入數字</option>
                        <option value="nhentai">Nhentai</option>
                        </select>`;

var noneemailverify = `只支援看動漫`;

var withemailverified_PC = `<div id="page">
<nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
    <a class="navbar-brand" href="https://twitter.com/yukihimenote" target="_blank">NOTE</a>

    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" 
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">

        <span class="navbar-toggler-icon"></span>
        
    </button> 
    
    <div class="collapse navbar-collapse " id="navbarSupportedContent" style>

        <ul class="nav navbar-nav mr-auto">

            <li class="nav-item">

                <a class="nav-link" href="https://tw.manhuagui.com/" target="_blank">看動漫 </a>

            </li>

            <li class="nav-item">

                <a class="nav-link" href="https://dm5.io/" target="_blank">動漫屋</a>

            </li>

            <li class="nav-item">

                <a class="nav-link " href="https://m.wnacg.org/" target="_blank">紳士倉庫</a>

            </li>

            <li class="nav-item">

                <a class="nav-link " href="https://e-hentai.org/?f_cats=767" target="_blank">E站(表)</a>

            </li>
    
            <li class="nav-item">

                <a class="nav-link " href="https://exhentai.org/" target="_blank">熊貓</a>

            </li>

            <li class="nav-item">

                <a class="nav-link " href="https://nhentai.net/" target="_blank">Nhentai</a>
            </li>

        </ul>
    
        <form class="form-inline my-2 my-lg-0">

            <button class="btn btn-outline-success my-2 my-sm-0" onclick="logout()" >登出</button>

        </form>

    </div>

</nav>

<main role="main">

<!-- Main jumbotron for a primary marketing message or call to action -->
<div class="jumbotron">
  <div class="container">
    <h1 class="display-4">漫畫筆記本</h1><br>
    <p>自訂漫畫名稱 : <input type="text" id="name" value="" required /><br><br>
    ID : <input type="text" id="URL" value="" required /><br><br>
    閱讀頁碼 : <input type="text" id="readto" value="1" required /><br><br>
    來源網站 : ${withemailverify}<br><br></p>
    <input type="button" id="add_new" value="新增 ( Add New Book )" onclick="add()">
    </div>
</div>

<div class="container">
  <!-- Example row of columns -->
  <div class="row">
    <div class="col-md-8">
    <center><input type="button" id="refresh" value="重新載入表格 ( refresh the chart )" onclick="refreshing()"></center><br> 
    <div id="bookmarks"></div><br>
    </div>
    
    <div class="col-md-4">
    ${vid}<br> 
    ${tweet}
    </div>
  </div>

  <hr>

</div> <!-- /container -->

</main>

<footer class="container">
<center><span><a href ="mailto:majiku6@gmail.com">©站長信箱</a></span>
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
        <span><a href ="mailto:p881021@gmail.com">@副站長信箱</a></span></center>
        <br>
</footer>

</div>`;

var withemailverified_Phone = `<div id="page">
<nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
<a class="navbar-brand" href="https://twitter.com/yukihimenote" target="_blank">NOTE</a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#LIST" aria-controls="LIST" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button> 
<div class="collapse navbar-collapse " id="LIST" style>
  <ul class="nav navbar-nav mr-auto">
    <li class="nav-item">
      <a class="nav-link" href="https://tw.manhuagui.com/" target="_blank">看動漫 </a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="https://dm5.io/" target="_blank">動漫屋</a>
    </li>
    <li class="nav-item">
      <a class="nav-link " href="https://m.wnacg.org/" target="_blank">紳士倉庫</a>
    </li>
    <li class="nav-item">
      <a class="nav-link " href="https://e-hentai.org/?f_cats=767" target="_blank">E站(表)</a>
    </li>
    <li class="nav-item">
      <a class="nav-link " href="https://exhentai.org/" target="_blank">熊貓</a>
    </li>
    <li class="nav-item">
      <a class="nav-link " href="https://nhentai.net/" target="_blank">Nhentai</a>
    </li>
  </ul>
  <form class="form-inline my-2 my-lg-0">
    <button class="btn btn-outline-success my-2 my-sm-0" onclick="logout()" >登出</button>
    </form>
</div>
</nav>

<main role="main">

<!-- Main jumbotron for a primary marketing message or call to action -->
<div class="jumbotron">
  <div class="container">
    <h1 class="display-4">漫畫筆記本</h1><br>
    <p>自訂漫畫名稱 : <input type="text" id="name" value="" required /><br><br>
    ID : <input type="text" id="URL" value="" required /><br><br>
    閱讀頁碼 : <input type="text" id="readto" value="1" required /><br><br>
    來源網站 : ${withemailverify}<br><br></p>
    <input type="button" id="add_new" value="新增 ( Add New Book )" onclick="add_Phone()">
    </div>
</div>

<div class="container">
  <!-- Example row of columns -->
  <div class="row">
    <div class="col-md-12">
    <center><input type="button" id="refresh" value="重新載入表格 ( refresh the chart )" onclick="refreshing_Phone()"></center><br> 
    <center><div id="bookmarks"></div></center><br>
    </div>
  <hr>

</div> <!-- /container -->

</main>

<footer class="container">
<center><span><a href ="mailto:majiku6@gmail.com">©站長信箱</a></span>
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
        <span><a href ="mailto:p881021@gmail.com">@副站長信箱</a></span></center>
        <br>
</footer>

</div>`;

var noneemailverifed_PC = `<div id="page">
<nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
<a class="navbar-brand" href="https://twitter.com/yukihimenote" target="_blank">NOTE</a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#LIST" aria-controls="LIST" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button> 
<div class="collapse navbar-collapse " id="LIST" style>
  <ul class="nav navbar-nav mr-auto">
    <li class="nav-item">
      <a class="nav-link" href="https://tw.manhuagui.com/" target="_blank">看動漫 </a>
  </ul>
  <form class="form-inline my-2 my-lg-0">
    <button class="btn btn-outline-success my-2 my-sm-0" onclick="logout()" >登出</button>
    </form>
</div>
</nav>

<main role="main">

<div class="jumbotron">
  <div class="container">
    <h1 class="display-4">漫畫筆記本</h1><br>
    <h4 id="highlighting">此帳號尚未驗證 故只可使用部分功能</h4><br>
    <p>自訂漫畫名稱 : <input type="text" id="name" value="" required /><br><br>
    ID : <input type="text" id="URL" value="" required /><br><br>
    閱讀頁碼 : <input type="text" id="readto" value="1" required /><br><br>
    來源網站 : 看動漫<br><br></p>
    <input type="button" id="add_new" value="新增 ( Add New Book )" onclick="add()">
    </div>
</div>

<div class="container">
  <div class="row">
    <div class="col-md-8">
    <center><input type="button" id="refresh" value="重新載入表格 ( refresh the chart )" onclick="refreshing()"></center><br> 
    <center><div id="bookmarks"></div></center><br>
    </div>
    
    <div class="col-md-4">
    ${vid}<br> 
    ${tweet}
    </div>
  </div>

  <hr>

</div> <!-- /container -->

</main>

<footer class="container">
<center><span><a href ="mailto:majiku6@gmail.com">©站長信箱</a></span>
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
        <span><a href ="mailto:p881021@gmail.com">@副站長信箱</a></span></center>
        <br>
</footer>

</div>`;

var noneemailverifed_Phone = `<div id="page">
<nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
<a class="navbar-brand" href="https://twitter.com/yukihimenote" target="_blank">NOTE</a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#LIST" aria-controls="LIST" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button> 
<div class="collapse navbar-collapse " id="LIST" style>
  <ul class="nav navbar-nav mr-auto">
    <li class="nav-item">
      <a class="nav-link" href="https://tw.manhuagui.com/" target="_blank">看動漫 </a>
  </ul>
  <form class="form-inline my-2 my-lg-0">
    <button class="btn btn-outline-success my-2 my-sm-0" onclick="logout()" >登出</button>
    </form>
</div>
</nav>

<main role="main">

<div class="jumbotron">
  <div class="container">
    <h1 class="display-4">漫畫筆記本</h1><br>
    <h4 id="highlighting">此帳號尚未驗證 故只可使用部分功能</h4><br>
    <p>自訂漫畫名稱 : <input type="text" id="name" value="" required /><br><br>
    ID : <input type="text" id="URL" value="" required /><br><br>
    閱讀頁碼 : <input type="text" id="readto" value="1" required /><br><br>
    來源網站 : 看動漫<br><br></p>
    <input type="button" id="add_new" value="新增 ( Add New Book )" onclick="add_Phone()">
    </div>
</div>

<div class="container">
  <div class="row">
    <div class="col-md-12">
    <center><input type="button" id="refresh" value="重新載入表格 ( refresh the chart )" onclick="refreshing_Phone()"></center><br> 
    <center><div id="bookmarks"></div></center><br>
    </div>
  <hr>

</div> <!-- /container -->

</main>

<footer class="container">
<center><span><a href ="mailto:majiku6@gmail.com">©站長信箱</a></span>
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
        <span><a href ="mailto:p881021@gmail.com">@副站長信箱</a></span></center>
        <br>
</footer>

</div>`;

var log = `<div id="login">
<h2>漫畫筆記本</h2>
<h4>請登入</h4>
<div class="form-group">
<input type="email" id="EM" class="form-control" placeholder="電子信箱 ( Email address )" required autofocus>
<input type="password" id="PW" class="form-control" placeholder="密碼 ( Password )" required>
</div>
<input type="submit" class="btn btn-lg btn-primary btn-light btn-block" value="登入" onclick="signin()">
<div class="btn-group btn-block">
<input type="submit" class="btn btn-lg btn-primary btn-light" value="&nbsp;&nbsp;&nbsp;&nbsp;註冊&nbsp&nbsp;&nbsp;" onclick="newuser()">
<input type="submit" class="btn btn-lg btn-primary btn-light" value="重設密碼" onclick="resetpassword()">
</div>
<br><br>
需<span id="highlighting">註冊</span>後才可使用<br>
只需提供電子郵件與密碼即可註冊<br>
<span id='highlighting'>請注意</span><br>
需進行<span id="highlighting">Email驗證</span>後才可使用全部內容<br></div>`;

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

    if (website === "nhentai") {

        if (read_to === "") {

            alert("請輸入讀到哪裡\r( Please input Read to )");

            return;
        }

        if (!int_check()) {

            alert("該類別下，Read to只允許正整數");

            document.getElementById("readto").value = "";

            return;

        }

    }

    var path = `/${user.uid}/${website}/book/`;

    firebase.firestore().collection(`${path}`).doc(`${name}`).set({

        number: `${Url}`,

        readto: `${read_to}`

    });

    document.getElementById("name").value = "";

    document.getElementById("URL").value = "";

    document.getElementById("readto").value = "1";

    loadsearch();

}

function add_Phone() {

    var user = firebase.auth().currentUser;

    if (document.getElementById("name").value === "") {

        alert("請輸入標籤名稱");

        return;

    }

    var name = document.getElementById("name").value;

    var Url = document.getElementById("URL").value;

    var website = document.getElementById("website").value;

    var read_to = document.getElementById("readto").value;

    if (website === "nhentai") {

        if (read_to === "") {

            alert("請輸入讀到哪裡\r( Please input Read to )");

            return;
        }

        if (!int_check()) {

            alert("該類別下，Read to只允許正整數");

            document.getElementById("readto").value = "";

            return;

        }

    }

    var path = `/${user.uid}/${website}/book/`;

    firebase.firestore().collection(`${path}`).doc(`${name}`).set({

        number: `${Url}`,

        readto: `${read_to}`

    });

    document.getElementById("name").value = "";

    document.getElementById("URL").value = "";

    document.getElementById("readto").value = "1";

    loadsearch_Phone();

}

function int_check() {

    var read_to = document.getElementById("readto").value;

    if (read_to == "") {

    } else {

        var r = /^\+?[1-9][0-9]*$/;

        if (r.test(read_to)) {

            return true;

        } else {

            return false;

        }
    }

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

    document.getElementById("readto").value = "1";

    loadsearch();

}

function loadsearch() {
    var user = firebase.auth().currentUser;

    document.getElementById("bookmarks").innerHTML = "";

    var list = document.createElement("table");
    var list_thead = document.createElement("thead");
    var list_tr = document.createElement("tr");
    var list_tbody = document.createElement("tbody");

    ["網站", "書名", "更新書名", "頁碼", "更新頁碼", "連結", "刪除", "分享"].forEach(function (el) {
        var list_th = document.createElement("th");
        list_th.appendChild(document.createTextNode(el));
        list_tr.appendChild(list_th);
    });

    list_thead.appendChild(list_tr);

    list.appendChild(list_thead);

    firebase.firestore().collection(`/${user.uid}/ehentai/book/`).get().then(function (querySnapshot) {

        querySnapshot.forEach(function (doc) {

            var list_tr = document.createElement("tr");

            var from = document.createElement("td");

            var book_name = document.createElement("td");

            var bookname_edit_td = document.createElement("td");
            var bookname_edit = document.createElement("input");

            var read_to = document.createElement("td");

            var readto_edit_td = document.createElement("td");
            var readto_edit = document.createElement("input");

            var go_td = document.createElement("td");
            var go = document.createElement("input");

            var del_td = document.createElement("td");
            var del = document.createElement("input");

            var sha_td = document.createElement("td");
            var sha_hidden = document.createElement("input");
            var sha = document.createElement("input");

            //from
            from.innerText = `E-Hentai`;
            list_tr.appendChild(from);

            //book name
            book_name.innerText = `${doc.id}`;
            list_tr.appendChild(book_name);

            //edit book name
            bookname_edit.setAttribute("type", "button");
            bookname_edit.setAttribute("value", "Edit");
            bookname_edit.setAttribute("onclick", `edit_bookname_ehentai("${user.uid}","${doc.id}","${doc.data().number}","${doc.data().readto}")`);
            bookname_edit_td.appendChild(bookname_edit);
            list_tr.appendChild(bookname_edit_td);

            //read to
            read_to.innerText = `${doc.data().readto}`;
            list_tr.appendChild(read_to);

            //edit read to
            readto_edit.type = `button`;
            readto_edit.value = `Edit`;
            readto_edit.setAttribute("onclick", `edit_readto_ehentai("${user.uid}","${doc.id}","${doc.data().readto}")`);
            readto_edit_td.appendChild(readto_edit);
            list_tr.appendChild(readto_edit_td);

            //go
            go.type = `button`;
            go.value = `GO!`;
            go.setAttribute("onclick", `go_ehentai("${doc.data().number}")`);
            go_td.appendChild(go);
            list_tr.appendChild(go_td);

            //delete
            del.type = `button`;
            del.value = `Delete`;
            del.setAttribute("onclick", `delete_ehentai("${user.uid}","${doc.id}")`);
            del_td.appendChild(del);
            list_tr.appendChild(del_td);

            //share
            sha.type = `button`;
            sha.value = `Share`;
            sha.setAttribute("onclick", `sharing(${count})`);
            sha_td.appendChild(sha);
            sha_hidden.type = `hidden`;
            sha_hidden.id = `we${count}`;
            sha_hidden.value = `https://e-hentai.org/g/${doc.data().number}`;
            sha_td.appendChild(sha_hidden);
            list_tr.appendChild(sha_td);

            count++;

            list_tbody.appendChild(list_tr);

        });

        list.appendChild(list_tbody);

    });

    firebase.firestore().collection(`/${user.uid}/exhentai/book/`).get().then(function (querySnapshot) {

        querySnapshot.forEach(function (doc) {

            var list_tr = document.createElement("tr");

            var from = document.createElement("td");

            var book_name = document.createElement("td");

            var bookname_edit_td = document.createElement("td");
            var bookname_edit = document.createElement("input");

            var read_to = document.createElement("td");

            var readto_edit_td = document.createElement("td");
            var readto_edit = document.createElement("input");

            var go_td = document.createElement("td");
            var go = document.createElement("input");

            var del_td = document.createElement("td");
            var del = document.createElement("input");

            var sha_td = document.createElement("td");
            var sha_hidden = document.createElement("input");
            var sha = document.createElement("input");

            //from
            from.innerText = `EXHentai`;
            list_tr.appendChild(from);

            //book name
            book_name.innerText = `${doc.id}`;
            list_tr.appendChild(book_name);

            //edit book name
            bookname_edit.setAttribute("type", "button");
            bookname_edit.setAttribute("value", "Edit");
            bookname_edit.setAttribute("onclick", `edit_bookname_exhentai("${user.uid}","${doc.id}","${doc.data().number}","${doc.data().readto}")`);
            bookname_edit_td.appendChild(bookname_edit);
            list_tr.appendChild(bookname_edit_td);

            //read to
            read_to.innerText = `${doc.data().readto}`;
            list_tr.appendChild(read_to);

            //edit read to
            readto_edit.type = `button`;
            readto_edit.value = `Edit`;
            readto_edit.setAttribute("onclick", `edit_readto_exhentai("${user.uid}","${doc.id}","${doc.data().readto}")`);
            readto_edit_td.appendChild(readto_edit);
            list_tr.appendChild(readto_edit_td);

            //go
            go.type = `button`;
            go.value = `GO!`;
            go.setAttribute("onclick", `go_exhentai("${doc.data().number}")`);
            go_td.appendChild(go);
            list_tr.appendChild(go_td);

            //delete
            del.type = `button`;
            del.value = `Delete`;
            del.setAttribute("onclick", `delete_exhentai("${user.uid}","${doc.id}")`);
            del_td.appendChild(del);
            list_tr.appendChild(del_td);

            //share
            sha.type = `button`;
            sha.value = `Share`;
            sha.setAttribute("onclick", `sharing(${count})`);
            sha_td.appendChild(sha);
            sha_hidden.type = `hidden`;
            sha_hidden.id = `we${count}`;
            sha_hidden.value = `https://exhentai.org/g/${doc.data().number}`;
            sha_td.appendChild(sha_hidden);
            list_tr.appendChild(sha_td);

            count++;

            list_tbody.appendChild(list_tr);

        });

        list.appendChild(list_tbody);

    });

    firebase.firestore().collection(`/${user.uid}/nhentai/book/`).get().then(function (querySnapshot) {

        querySnapshot.forEach(function (doc) {

            var list_tr = document.createElement("tr");

            var from = document.createElement("td");

            var book_name = document.createElement("td");

            var bookname_edit_td = document.createElement("td");
            var bookname_edit = document.createElement("input");

            var read_to = document.createElement("td");

            var readto_edit_td = document.createElement("td");
            var readto_edit = document.createElement("input");

            var go_td = document.createElement("td");
            var go = document.createElement("input");

            var del_td = document.createElement("td");
            var del = document.createElement("input");

            var sha_td = document.createElement("td");
            var sha_hidden = document.createElement("input");
            var sha = document.createElement("input");

            //from
            from.innerText = `Nhentai`;
            list_tr.appendChild(from);

            //book name
            book_name.innerText = `${doc.id}`;
            list_tr.appendChild(book_name);

            //edit book name
            bookname_edit.setAttribute("type", "button");
            bookname_edit.setAttribute("value", "Edit");
            bookname_edit.setAttribute("onclick", `edit_bookname_nhentai("${user.uid}","${doc.id}","${doc.data().number}","${doc.data().readto}")`);
            bookname_edit_td.appendChild(bookname_edit);
            list_tr.appendChild(bookname_edit_td);

            //read to
            read_to.innerText = `${doc.data().readto}`;
            list_tr.appendChild(read_to);

            //edit read to
            readto_edit.type = `button`;
            readto_edit.value = `Edit`;
            readto_edit.setAttribute("onclick", `edit_readto_nhentai("${user.uid}","${doc.id}","${doc.data().readto}")`);
            readto_edit_td.appendChild(readto_edit);
            list_tr.appendChild(readto_edit_td);

            //go
            go.type = `button`;
            go.value = `GO!`;
            go.setAttribute("onclick", `go_nhentai("${doc.data().number}","${doc.data().readto}")`);
            go_td.appendChild(go);
            list_tr.appendChild(go_td);

            //delete
            del.type = `button`;
            del.value = `Delete`;
            del.setAttribute("onclick", `delete_nhentai("${user.uid}","${doc.id}")`);
            del_td.appendChild(del);
            list_tr.appendChild(del_td);

            //share
            sha.type = `button`;
            sha.value = `Share`;
            sha.setAttribute("onclick", `sharing(${count})`);
            sha_td.appendChild(sha);
            sha_hidden.type = `hidden`;
            sha_hidden.id = `we${count}`;
            sha_hidden.value = `https://nhentai.net/g/${doc.data().number}`;
            sha_td.appendChild(sha_hidden);
            list_tr.appendChild(sha_td);

            count++;

            list_tbody.appendChild(list_tr);

        });

        list.appendChild(list_tbody);

    });

    firebase.firestore().collection(`/${user.uid}/wnacg/book/`).get().then(function (querySnapshot) {

        querySnapshot.forEach(function (doc) {

            var list_tr = document.createElement("tr");

            var from = document.createElement("td");

            var book_name = document.createElement("td");

            var bookname_edit_td = document.createElement("td");
            var bookname_edit = document.createElement("input");

            var read_to = document.createElement("td");

            var readto_edit_td = document.createElement("td");
            var readto_edit = document.createElement("input");

            var go_td = document.createElement("td");
            var go = document.createElement("input");

            var del_td = document.createElement("td");
            var del = document.createElement("input");

            var sha_td = document.createElement("td");
            var sha_hidden = document.createElement("input");
            var sha = document.createElement("input");

            //from
            from.innerText = `WNACG`;
            list_tr.appendChild(from);

            //book name
            book_name.innerText = `${doc.id}`;
            list_tr.appendChild(book_name);

            //edit book name
            bookname_edit.type = `button`;
            bookname_edit.value = `Edit`;
            bookname_edit.setAttribute("onclick", `edit_bookname_wnacg("${user.uid}","${doc.id}","${doc.data().number}","${doc.data().readto}")`);
            bookname_edit_td.appendChild(bookname_edit);
            list_tr.appendChild(bookname_edit_td);

            //read to
            read_to.innerText = `${doc.data().readto}`;
            list_tr.appendChild(read_to);

            //edit read to
            readto_edit.type = `button`;
            readto_edit.value = `Edit`;
            readto_edit.setAttribute("onclick", `edit_readto_wnacg("${user.uid}","${doc.id}","${doc.data().readto}")`);
            readto_edit_td.appendChild(readto_edit);
            list_tr.appendChild(readto_edit_td);

            //go
            go.type = `button`;
            go.value = `GO!`;
            go.setAttribute("onclick", `go_wnacg("${doc.data().number}","${doc.data().readto}")`);
            go_td.appendChild(go);
            list_tr.appendChild(go_td);

            //delete
            del.type = `button`;
            del.value = `Delete`;
            del.setAttribute("onclick", `delete_wnacg("${user.uid}","${doc.id}")`);
            del_td.appendChild(del);
            list_tr.appendChild(del_td);

            //share
            sha.type = `button`;
            sha.value = `Share`;
            sha.setAttribute("onclick", `sharing(${count})`);
            sha_td.appendChild(sha);
            sha_hidden.type = `hidden`;
            sha_hidden.id = `we${count}`;
            sha_hidden.value = `https://m.wnacg.org/photos-slide-aid-${doc.data().number}.html`;
            sha_td.appendChild(sha_hidden);
            list_tr.appendChild(sha_td);

            count++;

            list_tbody.appendChild(list_tr);

        });

        list.appendChild(list_tbody);

    });

    firebase.firestore().collection(`/${user.uid}/動漫屋/book/`).get().then(function (querySnapshot) {

        querySnapshot.forEach(function (doc) {

            var list_tr = document.createElement("tr");

            var from = document.createElement("td");

            var book_name = document.createElement("td");

            var bookname_edit_td = document.createElement("td");
            var bookname_edit = document.createElement("input");

            var read_to = document.createElement("td");

            var readto_edit_td = document.createElement("td");
            var readto_edit = document.createElement("input");

            var go_td = document.createElement("td");
            var go = document.createElement("input");

            var del_td = document.createElement("td");
            var del = document.createElement("input");

            var sha_td = document.createElement("td");
            var sha_hidden = document.createElement("input");
            var sha = document.createElement("input");

            //from
            from.innerText = `動漫屋`;
            list_tr.appendChild(from);

            //book name
            book_name.innerText = `${doc.id}`;
            list_tr.appendChild(book_name);

            //edit book name
            bookname_edit.type = `button`;
            bookname_edit.value = `Edit`;
            bookname_edit.setAttribute("onclick", `edit_bookname_comichouse("${user.uid}","${doc.id}","${doc.data().number}","${doc.data().readto}")`);
            bookname_edit_td.appendChild(bookname_edit);
            list_tr.appendChild(bookname_edit_td);

            //read to
            read_to.innerText = `${doc.data().readto}`;
            list_tr.appendChild(read_to);

            //edit read to
            readto_edit.type = `button`;
            readto_edit.value = `Edit`;
            readto_edit.setAttribute("onclick", `edit_readto_comichouse("${user.uid}","${doc.id}","${doc.data().readto}")`);
            readto_edit_td.appendChild(readto_edit);
            list_tr.appendChild(readto_edit_td);

            //go
            go.type = `button`;
            go.value = `GO!`;
            go.setAttribute("onclick", `go_comichouse("${doc.data().number}","${doc.data().readto}")`);
            go_td.appendChild(go);
            list_tr.appendChild(go_td);

            //delete
            del.type = `button`;
            del.value = `Delete`;
            del.setAttribute("onclick", `delete_comichouse("${user.uid}","${doc.id}")`);
            del_td.appendChild(del);
            list_tr.appendChild(del_td);

            //share
            sha.type = `button`;
            sha.value = `Share`;
            sha.setAttribute("onclick", `sharing(${count})`);
            sha_td.appendChild(sha);
            sha_hidden.type = `hidden`;
            sha_hidden.id = `we${count}`;
            sha_hidden.value = `https://dm5.io/${doc.data().number}/`;
            sha_td.appendChild(sha_hidden);
            list_tr.appendChild(sha_td);

            count++;

            list_tbody.appendChild(list_tr);

        });

        list.appendChild(list_tbody);

    });

    firebase.firestore().collection(`/${user.uid}/看動漫/book/`).get().then(function (querySnapshot) {

        querySnapshot.forEach(function (doc) {


            var list_tr = document.createElement("tr");

            var from = document.createElement("td");

            var book_name = document.createElement("td");

            var bookname_edit_td = document.createElement("td");
            var bookname_edit = document.createElement("input");

            var read_to = document.createElement("td");

            var readto_edit_td = document.createElement("td");
            var readto_edit = document.createElement("input");

            var go_td = document.createElement("td");
            var go = document.createElement("input");

            var del_td = document.createElement("td");
            var del = document.createElement("input");

            var sha_td = document.createElement("td");
            var sha_hidden = document.createElement("input");
            var sha = document.createElement("input");

            //from
            from.innerText = `看動漫`;
            list_tr.appendChild(from);

            //book name
            book_name.innerText = `${doc.id}`;
            list_tr.appendChild(book_name);

            //edit book name
            bookname_edit.type = `button`;
            bookname_edit.value = `Edit`;
            bookname_edit.setAttribute("onclick", `edit_bookname_watchcomic("${user.uid}","${doc.id}","${doc.data().number}","${doc.data().readto}")`);
            bookname_edit_td.appendChild(bookname_edit);
            list_tr.appendChild(bookname_edit_td);

            //read to
            read_to.innerText = `${doc.data().readto}`;
            list_tr.appendChild(read_to);

            //edit read to
            readto_edit.type = `button`;
            readto_edit.value = `Edit`;
            readto_edit.setAttribute("onclick", `edit_readto_watchcomic("${user.uid}","${doc.id}","${doc.data().readto}")`);
            readto_edit_td.appendChild(readto_edit);
            list_tr.appendChild(readto_edit_td);

            //go
            go.type = `button`;
            go.value = `GO!`;
            go.setAttribute("onclick", `go_watchcomic("${doc.data().number}","${doc.data().readto}")`);
            go_td.appendChild(go);
            list_tr.appendChild(go_td);

            //delete
            del.type = `button`;
            del.value = `Delete`;
            del.setAttribute("onclick", `delete_watchcomic("${user.uid}","${doc.id}")`);
            del_td.appendChild(del);
            list_tr.appendChild(del_td);

            //share
            sha.type = `button`;
            sha.value = `Share`;
            sha.setAttribute("onclick", `sharing(${count})`);
            sha_td.appendChild(sha);
            sha_hidden.type = `hidden`;
            sha_hidden.id = `we${count}`;
            sha_hidden.value = `https://tw.manhuagui.com/comic/${doc.data().number}/`;
            sha_td.appendChild(sha_hidden);
            list_tr.appendChild(sha_td);

            count++;

            list_tbody.appendChild(list_tr);

        });

        list.appendChild(list_tbody);

    });

    document.getElementById("bookmarks").appendChild(list);

}

function loadsearch_Phone() {

    var user = firebase.auth().currentUser;

    document.getElementById("bookmarks").innerHTML = "";

    var list = document.createElement("table");
    var list_thead = document.createElement("thead");
    var list_tr = document.createElement("tr");
    var list_tbody = document.createElement("tbody");

    ["書名","頁碼", "更新頁碼", "連結", "刪除"].forEach(function (el) {
        var list_th = document.createElement("th");
        list_th.appendChild(document.createTextNode(el));
        list_tr.appendChild(list_th);
    });
    
    list_thead.appendChild(list_tr);

    list.appendChild(list_thead);

    firebase.firestore().collection(`/${user.uid}/ehentai/book/`).get().then(function (querySnapshot) {

        querySnapshot.forEach(function (doc) {

            var list_tr = document.createElement("tr");

            var book_name = document.createElement("td");

            var read_to = document.createElement("td");

            var readto_edit_td = document.createElement("td");
            var readto_edit = document.createElement("input");

            var go_td = document.createElement("td");
            var go = document.createElement("input");

            var del_td = document.createElement("td");
            var del = document.createElement("input");
            
            //book name
            book_name.innerText = `${doc.id}`;
            list_tr.appendChild(book_name);

            
            //read to
            read_to.innerText = `${doc.data().readto}`;
            list_tr.appendChild(read_to);

            //edit read to
            readto_edit.type = `button`;
            readto_edit.value = `Edit`;
            readto_edit.setAttribute("onclick", `edit_readto_ehentai_Phone("${user.uid}","${doc.id}","${doc.data().readto}")`);
            readto_edit_td.appendChild(readto_edit);
            list_tr.appendChild(readto_edit_td);

            //go
            go.type = `button`;
            go.value = `GO!`;
            go.setAttribute("onclick", `go_ehentai("${doc.data().number}")`);
            go_td.appendChild(go);
            list_tr.appendChild(go_td);

            //delete
            del.type = `button`;
            del.value = `Delete`;
            del.setAttribute("onclick", `delete_ehentai_Phone("${user.uid}","${doc.id}")`);
            del_td.appendChild(del);
            list_tr.appendChild(del_td);

            count++;

            list_tbody.appendChild(list_tr);

        });

        list.appendChild(list_tbody);

    });

    firebase.firestore().collection(`/${user.uid}/exhentai/book/`).get().then(function (querySnapshot) {

        querySnapshot.forEach(function (doc) {

            var list_tr = document.createElement("tr");

            var book_name = document.createElement("td");

            var read_to = document.createElement("td");

            var readto_edit_td = document.createElement("td");
            var readto_edit = document.createElement("input");

            var go_td = document.createElement("td");
            var go = document.createElement("input");

            var del_td = document.createElement("td");
            var del = document.createElement("input");
            
            //book name
            book_name.innerText = `${doc.id}`;
            list_tr.appendChild(book_name);

            
            //read to
            read_to.innerText = `${doc.data().readto}`;
            list_tr.appendChild(read_to);

            //edit read to
            readto_edit.type = `button`;
            readto_edit.value = `Edit`;
            readto_edit.setAttribute("onclick", `edit_readto_exhentai_Phone("${user.uid}","${doc.id}","${doc.data().readto}")`);
            readto_edit_td.appendChild(readto_edit);
            list_tr.appendChild(readto_edit_td);

            //go
            go.type = `button`;
            go.value = `GO!`;
            go.setAttribute("onclick", `go_exhentai("${doc.data().number}")`);
            go_td.appendChild(go);
            list_tr.appendChild(go_td);

            //delete
            del.type = `button`;
            del.value = `Delete`;
            del.setAttribute("onclick", `delete_exhentai_Phone("${user.uid}","${doc.id}")`);
            del_td.appendChild(del);
            list_tr.appendChild(del_td);

            count++;

            list_tbody.appendChild(list_tr);

        });

        list.appendChild(list_tbody);

    });

    firebase.firestore().collection(`/${user.uid}/nhentai/book/`).get().then(function (querySnapshot) {

        querySnapshot.forEach(function (doc) {

            var list_tr = document.createElement("tr");

            var book_name = document.createElement("td");

            var read_to = document.createElement("td");

            var readto_edit_td = document.createElement("td");
            var readto_edit = document.createElement("input");

            var go_td = document.createElement("td");
            var go = document.createElement("input");

            var del_td = document.createElement("td");
            var del = document.createElement("input");
            
            //book name
            book_name.innerText = `${doc.id}`;
            list_tr.appendChild(book_name);

            
            //read to
            read_to.innerText = `${doc.data().readto}`;
            list_tr.appendChild(read_to);

            //edit read to
            readto_edit.type = `button`;
            readto_edit.value = `Edit`;
            readto_edit.setAttribute("onclick", `edit_readto_nhentai_Phone("${user.uid}","${doc.id}","${doc.data().readto}")`);
            readto_edit_td.appendChild(readto_edit);
            list_tr.appendChild(readto_edit_td);

            //go
            go.type = `button`;
            go.value = `GO!`;
            go.setAttribute("onclick", `go_nhentai("${doc.data().number}","${doc.data().readto}")`);
            go_td.appendChild(go);
            list_tr.appendChild(go_td);

            //delete
            del.type = `button`;
            del.value = `Delete`;
            del.setAttribute("onclick", `delete_nhentai_Phone("${user.uid}","${doc.id}")`);
            del_td.appendChild(del);
            list_tr.appendChild(del_td);

            count++;

            list_tbody.appendChild(list_tr);

        });

        list.appendChild(list_tbody);
    });

    firebase.firestore().collection(`/${user.uid}/wnacg/book/`).get().then(function (querySnapshot) {

        querySnapshot.forEach(function (doc) {

            var list_tr = document.createElement("tr");

            var book_name = document.createElement("td");

            var read_to = document.createElement("td");

            var readto_edit_td = document.createElement("td");
            var readto_edit = document.createElement("input");

            var go_td = document.createElement("td");
            var go = document.createElement("input");

            var del_td = document.createElement("td");
            var del = document.createElement("input");
            
            //book name
            book_name.innerText = `${doc.id}`;
            list_tr.appendChild(book_name);

            
            //read to
            read_to.innerText = `${doc.data().readto}`;
            list_tr.appendChild(read_to);

            //edit read to
            readto_edit.type = `button`;
            readto_edit.value = `Edit`;
            readto_edit.setAttribute("onclick", `edit_readto_wnacg_Phone("${user.uid}","${doc.id}","${doc.data().readto}")`);
            readto_edit_td.appendChild(readto_edit);
            list_tr.appendChild(readto_edit_td);

            //go
            go.type = `button`;
            go.value = `GO!`;
            go.setAttribute("onclick", `go_wnacg("${doc.data().number}")`);
            go_td.appendChild(go);
            list_tr.appendChild(go_td);

            //delete
            del.type = `button`;
            del.value = `Delete`;
            del.setAttribute("onclick", `delete_wnacg_Phone("${user.uid}","${doc.id}")`);
            del_td.appendChild(del);
            list_tr.appendChild(del_td);

            count++;

            list_tbody.appendChild(list_tr);

        });

        list.appendChild(list_tbody);

    });

    firebase.firestore().collection(`/${user.uid}/動漫屋/book/`).get().then(function (querySnapshot) {

        querySnapshot.forEach(function (doc) {

            var list_tr = document.createElement("tr");

            var book_name = document.createElement("td");

            var read_to = document.createElement("td");

            var readto_edit_td = document.createElement("td");
            var readto_edit = document.createElement("input");

            var go_td = document.createElement("td");
            var go = document.createElement("input");

            var del_td = document.createElement("td");
            var del = document.createElement("input");
            
            //book name
            book_name.innerText = `${doc.id}`;
            list_tr.appendChild(book_name);

            
            //read to
            read_to.innerText = `${doc.data().readto}`;
            list_tr.appendChild(read_to);

            //edit read to
            readto_edit.type = `button`;
            readto_edit.value = `Edit`;
            readto_edit.setAttribute("onclick", `edit_readto_comichouse_Phone("${user.uid}","${doc.id}","${doc.data().readto}")`);
            readto_edit_td.appendChild(readto_edit);
            list_tr.appendChild(readto_edit_td);

            //go
            go.type = `button`;
            go.value = `GO!`;
            go.setAttribute("onclick", `go_comichouse("${doc.data().number}")`);
            go_td.appendChild(go);
            list_tr.appendChild(go_td);

            //delete
            del.type = `button`;
            del.value = `Delete`;
            del.setAttribute("onclick", `delete_comichouse_Phone("${user.uid}","${doc.id}")`);
            del_td.appendChild(del);
            list_tr.appendChild(del_td);

            count++;

            list_tbody.appendChild(list_tr);

        });

        list.appendChild(list_tbody);

    });

    firebase.firestore().collection(`/${user.uid}/看動漫/book/`).get().then(function (querySnapshot) {

        querySnapshot.forEach(function (doc) {

            var list_tr = document.createElement("tr");

            var book_name = document.createElement("td");

            var read_to = document.createElement("td");

            var readto_edit_td = document.createElement("td");
            var readto_edit = document.createElement("input");

            var go_td = document.createElement("td");
            var go = document.createElement("input");

            var del_td = document.createElement("td");
            var del = document.createElement("input");
            
            //book name
            book_name.innerText = `${doc.id}`;
            list_tr.appendChild(book_name);

            
            //read to
            read_to.innerText = `${doc.data().readto}`;
            list_tr.appendChild(read_to);

            //edit read to
            readto_edit.type = `button`;
            readto_edit.value = `Edit`;
            readto_edit.setAttribute("onclick", `edit_readto_watchcomic_Phone("${user.uid}","${doc.id}","${doc.data().readto}")`);
            readto_edit_td.appendChild(readto_edit);
            list_tr.appendChild(readto_edit_td);

            //go
            go.type = `button`;
            go.value = `GO!`;
            go.setAttribute("onclick", `go_watchcomic("${doc.data().number}")`);
            go_td.appendChild(go);
            list_tr.appendChild(go_td);

            //delete
            del.type = `button`;
            del.value = `Delete`;
            del.setAttribute("onclick", `delete_watchcomic_Phone("${user.uid}","${doc.id}")`);
            del_td.appendChild(del);
            list_tr.appendChild(del_td);

            count++;

            list_tbody.appendChild(list_tr);

        });

        list.appendChild(list_tbody);

    });

    document.getElementById("bookmarks").appendChild(list);

}

function edit_bookname_ehentai(user, name, number, page) {
    firebase.firestore().collection(`/${user}/ehentai/book/`).doc(bookname_update(`${name}`)).set({
        number: `${number}`,
        readto: `${page}`
    });
    firebase.firestore().collection(`/${user}/ehentai/book/`).doc(`${name}`).delete();
    loadsearch();
}

function edit_readto_ehentai(user, doc, page) {

    firebase.firestore().collection(`/${user}/ehentai/book/`).doc(`${doc}`).update({ readto: readto_update(`${page}`) });

    loadsearch();

}

function edit_readto_ehentai_Phone(user, doc, page) {

    firebase.firestore().collection(`/${user}/ehentai/book/`).doc(`${doc}`).update({ readto: readto_update(`${page}`) });

    loadsearch_Phone();

}

function delete_ehentai(user, doc) {

    firebase.firestore().collection(`/${user}/ehentai/book/`).doc(`${doc}`).delete();

    loadsearch();

}

function delete_ehentai_Phone(user, doc) {

    firebase.firestore().collection(`/${user}/ehentai/book/`).doc(`${doc}`).delete();

    loadsearch_Phone();

}

function go_ehentai(doc) {

    window.open(`https://e-hentai.org/g/${doc}`);

}

function edit_bookname_exhentai(user, name, number, page) {
    firebase.firestore().collection(`/${user}/exhentai/book/`).doc(bookname_update(`${name}`)).set({
        number: `${number}`,
        readto: `${page}`
    });
    firebase.firestore().collection(`/${user}/exhentai/book/`).doc(`${name}`).delete();
    loadsearch();
}

function edit_readto_exhentai(user, doc, page) {

    firebase.firestore().collection(`/${user}/exhentai/book/`).doc(`${doc}`).update({ readto: readto_update(`${page}`) });

    loadsearch();

}

function edit_readto_exhentai_Phone(user, doc, page) {

    firebase.firestore().collection(`/${user}/exhentai/book/`).doc(`${doc}`).update({ readto: readto_update(`${page}`) });

    loadsearch_Phone();

}

function delete_exhentai(user, doc) {

    firebase.firestore().collection(`/${user}/exhentai/book/`).doc(`${doc}`).delete();

    loadsearch();

}

function delete_exhentai_Phone(user, doc) {

    firebase.firestore().collection(`/${user}/exhentai/book/`).doc(`${doc}`).delete();

    loadsearch_Phone();

}

function go_exhentai(doc) {

    window.open(`https://exhentai.org/g/${doc}`);

}

function edit_bookname_nhentai(user, name, number, page) {
    firebase.firestore().collection(`/${user}/nhentai/book/`).doc(bookname_update(`${name}`)).set({
        number: `${number}`,
        readto: `${page}`
    });
    firebase.firestore().collection(`/${user}/nhentai/book/`).doc(`${name}`).delete();
    loadsearch();
}

function edit_readto_nhentai(user, doc, page) {

    firebase.firestore().collection(`/${user}/nhentai/book/`).doc(`${doc}`).update({ readto: readto_update(`${page}`) });

    loadsearch();

}

function edit_readto_nhentai_Phone(user, doc, page) {

    firebase.firestore().collection(`/${user}/nhentai/book/`).doc(`${doc}`).update({ readto: readto_update(`${page}`) });

    loadsearch_Phone();

}

function delete_nhentai(user, doc) {

    firebase.firestore().collection(`/${user}/nhentai/book/`).doc(`${doc}`).delete();

    loadsearch();

}

function delete_nhentai_Phone(user, doc) {

    firebase.firestore().collection(`/${user}/nhentai/book/`).doc(`${doc}`).delete();

    loadsearch_Phone();

}

function go_nhentai(doc, reading) {

    window.open(`https://nhentai.net/g/${doc}/${reading}/`);

}

function edit_bookname_wnacg(user, name, number, page) {
    firebase.firestore().collection(`/${user}/wnacg/book/`).doc(bookname_update(`${name}`)).set({
        number: `${number}`,
        readto: `${page}`
    });
    firebase.firestore().collection(`/${user}/wnacg/book/`).doc(`${name}`).delete();
    loadsearch();
}

function edit_readto_wnacg(user, doc, page) {

    firebase.firestore().collection(`/${user}/wnacg/book/`).doc(`${doc}`).update({ readto: readto_update(`${page}`) });

    loadsearch();

}

function edit_readto_wnacg_Phone(user, doc, page) {

    firebase.firestore().collection(`/${user}/wnacg/book/`).doc(`${doc}`).update({ readto: readto_update(`${page}`) });

    loadsearch_Phone();

}

function delete_wnacg(user, doc) {

    firebase.firestore().collection(`/${user}/wnacg/book/`).doc(`${doc}`).delete();

    loadsearch();

}

function delete_wnacg_Phone(user, doc) {

    firebase.firestore().collection(`/${user}/wnacg/book/`).doc(`${doc}`).delete();

    loadsearch_Phone();

}

function go_wnacg(doc) {

    window.open(`https://m.wnacg.org/photos-slide-aid-${doc}.html`);

}

function edit_bookname_comichouse(user, name, number, page) {
    firebase.firestore().collection(`/${user}/動漫屋/book/`).doc(bookname_update(`${name}`)).set({
        number: `${number}`,
        readto: `${page}`
    });
    firebase.firestore().collection(`/${user}/動漫屋/book/`).doc(`${name}`).delete();
    loadsearch();
}

function edit_readto_comichouse(user, doc, page) {

    firebase.firestore().collection(`/${user}/動漫屋/book/`).doc(`${doc}`).update({ readto: readto_update(`${page}`) });

    loadsearch();

}

function edit_readto_comichouse_Phone(user, doc, page) {

    firebase.firestore().collection(`/${user}/動漫屋/book/`).doc(`${doc}`).update({ readto: readto_update(`${page}`) });

    loadsearch_Phone();

}

function delete_comichouse(user, doc) {

    firebase.firestore().collection(`/${user}/動漫屋/book/`).doc(`${doc}`).delete();

    loadsearch();

}

function delete_comichouse_Phone(user, doc) {

    firebase.firestore().collection(`/${user}/動漫屋/book/`).doc(`${doc}`).delete();

    loadsearch_Phone();

}

function go_comichouse(doc) {

    window.open(`https://dm5.io/${doc}/`);

}

function edit_bookname_watchcomic(user, name, number, page) {
    firebase.firestore().collection(`/${user}/看動漫/book/`).doc(bookname_update(`${name}`)).set({
        number: `${number}`,
        readto: `${page}`
    });
    firebase.firestore().collection(`/${user}/看動漫/book/`).doc(`${name}`).delete();
    loadsearch();
}

function edit_readto_watchcomic(user, doc, page) {

    firebase.firestore().collection(`/${user}/看動漫/book/`).doc(`${doc}`).update({ readto: readto_update(`${page}`) });

    loadsearch();

}

function edit_readto_watchcomic_Phone(user, doc, page) {

    firebase.firestore().collection(`/${user}/看動漫/book/`).doc(`${doc}`).update({ readto: readto_update(`${page}`) });

    loadsearch_Phone();

}

function delete_watchcomic(user, doc) {

    firebase.firestore().collection(`/${user}/看動漫/book/`).doc(`${doc}`).delete();

    loadsearch();
}

function delete_watchcomic_Phone(user, doc) {

    firebase.firestore().collection(`/${user}/看動漫/book/`).doc(`${doc}`).delete();

    loadsearch_Phone();
}

function go_watchcomic(doc) {

    window.open(`https://tw.manhuagui.com/comic/${doc}/`);

}

function sharing(count) {

    document.getElementById(`we${count}`).setAttribute("type", "text");

    document.getElementById(`we${count}`).select();

    document.execCommand("copy");

    document.getElementById(`we${count}`).setAttribute("type", "hidden");

    alert("複製成功! (Copy sucessful! )");

}

function readto_update(page) {

    var read = window.prompt(`讀到哪裡?\r( Where have you read to? )`, `${page}`);

    if (read) {

        return read;

    } else {

        return;

    }

}

function bookname_update(name) {

    var book_name = window.prompt(`要改成甚麼名字?\r( What name are you changing to? )`, `${name}`);

    if (book_name === null) {
        return book_name;
    } else {
        return book_name;
    }
}

function newuser() {

    var account = window.prompt("請輸入您的電子郵件信箱\r(Please enter your Email address)");

    var password = window.prompt("請輸入您的密碼\r(Please enter your Email address)");

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

        });

    }

}

function logout() {

    if (confirm("您確定要登出嗎?\r( Are you sure to log out? )")) {

        firebase.auth().signOut();

        alert("已登出\r( You have logged out )");

    } else {

        return;

    }

}

function initial() {

    firebase.auth().onAuthStateChanged(function (user) {

        if (user && user.emailVerified && outerWidth > 767) {

            var email = user.email;

            alert(`您以 ${email} 的身分登入了\r( You have been logged in as ${email}!)`);

            document.getElementById("main").innerHTML = `${withemailverified_PC}`;

            loadsearch();

            twttr.widgets.load(
                document.getElementById("twitter")
            );

        } else if (user && outerWidth > 767) {

            var email = user.email;

            alert(`您以 ${email} 的身分登入了\r( You have been logged in as ${email}!)`);

            document.getElementById("main").innerHTML = `${noneemailverifed_PC}`;

            loadsearch();

            twttr.widgets.load(
                document.getElementById("twitter")
            );

        } else if (user && user.emailVerified) {

            var email = user.email;

            alert(`您以 ${email} 的身分登入了\r( You have been logged in as ${email}!)`);

            document.getElementById("main").innerHTML = `${withemailverified_Phone}`;

            loadsearch_Phone();

        } else if (user) {

            var email = user.email;

            alert(`您以 ${email} 的身分登入了\r( You have been logged in as ${email}!)`);

            document.getElementById("main").innerHTML = `${noneemailverifed_Phone}`;

            loadsearch_Phone();

        } else {

            document.getElementById("main").innerHTML = log;

        }

    });

}

function video_update() {
    var video_id = document.getElementById("youtubevideo").value;

    var video = document.getElementById("video");

    video.setAttribute("src", `https://www.youtube.com/embed/${video_id}?autoplay=1&loop=1&fs=0&rel=0&modestbranding=1`);

    document.getElementById("youtubevideo").value = "";
}

function resetpassword() {

    var email = window.prompt("請輸入您的電子郵件信箱 ( Your email )");

    firebase.auth().sendPasswordResetEmail(email).then(function () {

        alert(`一封密碼重設的信件已寄至 ${email}\r( A password reset email has been sent to ${email} )`);

    }).catch(function (error) {

        alert("發生錯誤!\r( Error happened ! )");

    });

}

function refreshing() {

    document.getElementById('bookmarks').innerHTML = '';

    document.getElementById('refresh').disabled = true;

    loadsearch();

    setTimeout("document.getElementById('refresh').disabled=false;", 3000);

}

function refreshing_Phone() {

    document.getElementById('bookmarks').innerHTML = '';

    document.getElementById('refresh').disabled = true;

    loadsearch_Phone();

    setTimeout("document.getElementById('refresh').disabled=false;", 3000);

}

window.addEventListener("load", initial, false);