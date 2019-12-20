var search_list = `<table><thead><tr><th>Book Name</th><th>Link</th><th>Delete</th></tr></thead>`;

var bulletin = `<div id="bulletin_board">
                    <span id="topic">&spades;公告&spades;</span><br>
                    網站已全面更新<br>
                    Email驗證後才可使用全部內容，否則只可使用限制模式<br>
                    驗證後請重新整理頁面以獲得全部內容的通行權限<br>
                    人類線上最大圖書館(裏)需先登入表站後才可正常進入，敬請見諒<br>
                    其他更新請往Twitter查看<br>
                    <a href="https://twitter.com/yukihimenote" target="_blank"><input type="button" value="網站Twitter，任何建議與錯誤回報請往這裡"></a><br>
                </div>`;

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
                        <option value="ehentai">人類線上最大圖書館( /g/ 以後的所有東西 )(表)</option>
                        <option value="exhentai">人類線上最大圖書館( /g/ 以後的所有東西 )(裏)</option>
                        <option value="read_only" disabled>以下Read to僅限輸入數字</option>
                        <option value="nhentai">Nhentai</option>
                        </select>`;

var noneemailverify = `只支援看動漫`;

var bootstrap_JS = `<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>`;

var withemailverified_PC = `<div id="page">
<nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
<a class="navbar-brand" href="https://twitter.com/yukihimenote" target="_blank">NOTE</a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#LIST" aria-controls="LIST" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button> 
<div class="collapse navbar-collapse " id="LIST" style>
  <ul class="navbar-nav mr-auto">
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
    <h1 class="display-3">漫畫筆記本</h1><br>
    <p>自訂名稱 : <input type="text" id="name" value="" required /><br><br>
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
</footer>

</div>`;

var withemailverified_Phone = `<div id="page">
<nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
<a class="navbar-brand" href="https://twitter.com/yukihimenote" target="_blank">NOTE</a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#LIST" aria-controls="LIST" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button> 
<div class="collapse navbar-collapse " id="LIST" style>
  <ul class="navbar-nav mr-auto">
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
    <h1 class="display-3">漫畫筆記本</h1><br>
    <p>自訂名稱 : <input type="text" id="name" value="" required /><br><br>
    ID : <input type="text" id="URL" value="" required /><br><br>
    閱讀頁碼 : <input type="text" id="readto" value="1" required /><br><br>
    來源網站 : ${withemailverify}<br><br></p>
    <input type="button" id="add_new" value="新增 ( Add New Book )" onclick="add()">
    </div>
</div>

<div class="container">
  <!-- Example row of columns -->
  <div class="row">
    <div class="col-md-12">
    <center><input type="button" id="refresh" value="重新載入表格 ( refresh the chart )" onclick="refreshing()"></center><br> 
    <div id="bookmarks"></div><br>
    </div>
  <hr>

</div> <!-- /container -->

</main>

<footer class="container">
<center><span><a href ="mailto:majiku6@gmail.com">©站長信箱</a></span>
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
        <span><a href ="mailto:p881021@gmail.com">@副站長信箱</a></span></center>
</footer>

</div>`;

var noneemailverifed_PC = `<div id="page">
<nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
<a class="navbar-brand" href="https://twitter.com/yukihimenote" target="_blank">NOTE</a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#LIST" aria-controls="LIST" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button> 
<div class="collapse navbar-collapse " id="LIST" style>
  <ul class="navbar-nav mr-auto">
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
    <h1 class="display-3">漫畫筆記本</h1><br>
    <h4 id="highlighting">此帳號尚未驗證 故只可使用部分功能</h4><br>
    <p>自訂名稱 : <input type="text" id="name" value="" required /><br><br>
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

var noneemailverifed_Phone = `<div id="page">
<nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
<a class="navbar-brand" href="https://twitter.com/yukihimenote" target="_blank">NOTE</a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#LIST" aria-controls="LIST" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button> 
<div class="collapse navbar-collapse " id="LIST" style>
  <ul class="navbar-nav mr-auto">
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
    <h1 class="display-3">漫畫筆記本</h1><br>
    <h4 id="highlighting">此帳號尚未驗證 故只可使用部分功能</h4><br>
    <p>自訂名稱 : <input type="text" id="name" value="" required /><br><br>
    ID : <input type="text" id="URL" value="" required /><br><br>
    閱讀頁碼 : <input type="text" id="readto" value="1" required /><br><br>
    來源網站 : 看動漫<br><br></p>
    <input type="button" id="add_new" value="新增 ( Add New Book )" onclick="add()">
    </div>
</div>

<div class="container">
  <div class="row">
    <div class="col-md-12">
    <center><input type="button" id="refresh" value="重新載入表格 ( refresh the chart )" onclick="refreshing()"></center><br> 
    <div id="bookmarks"></div><br>
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
<input type="email" id="EM" class="form-control" placeholder="Your Email" required autofocus>
<input type="password" id="PW" class="form-control" placeholder="Password" required>
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

    search_list = `<table>
                    <thead>
                        <tr>
                            <th>網站</th>
                            <th>書名</th>
                            <th>更新書名</th>
                            <th>頁碼</th>
                            <th>更新頁碼</th>
                            <th>連結</th>
                            <th>刪除</th>
                            <th>分享</th>
                        </tr>
                    </thead>`;

    firebase.firestore().collection(`/${user.uid}/ehentai/book/`).get().then(function (querySnapshot) {

        querySnapshot.forEach(function (doc) {

            search_list += `<tr>
                                <td>E-Hentai</td>
                                <td>${doc.id}</td>
                                <td><input type="button" value="Edit" onclick='
                                firebase.firestore().collection("/${user.uid}/ehentai/book/").doc(bookname_update()).set({

                                    number: "${doc.data().number}",
                            
                                    readto: "${doc.data().readto}"
                            
                                });
                                firebase.firestore().collection("/${user.uid}/ehentai/book/").doc("${doc.id}").delete();
                                loadsearch();
                                '></td>
                                <td>${doc.data().readto}</td>
                                <td><input type="button" value="Edit" onclick='edit_readto_ehentai("${user.uid}","${doc.id}","${doc.data().readto}");'></input></td>
                                <td><input type="button" value="GO!" onclick='go_ehentai("${doc.data().number}");'></input></td>
                                <td><input type='button' value='Delete' onclick='delete_ehentai("${user.uid}","${doc.id}");'></input></td>
                                <td>
                                <input type='button' value='Share' onclick='sharing(${count})'></input>
                                <input type="hidden" id='we${count}' value='https://e-hentai.org/g/${doc.data().number}'></input>
                                </td>   
                            </tr>`;

            count++;

        });

    });

    firebase.firestore().collection(`/${user.uid}/exhentai/book/`).get().then(function (querySnapshot) {

        querySnapshot.forEach(function (doc) {

            search_list += `<tr>
                                <td>EXHentai</td>
                                <td>${doc.id}</td>
                                <td><input type="button" value="Edit" onclick='
                                firebase.firestore().collection("/${user.uid}/exhentai/book/").doc(bookname_update()).set({

                                    number: "${doc.data().number}",
                            
                                    readto: "${doc.data().readto}"
                            
                                });
                                firebase.firestore().collection("/${user.uid}/exhentai/book/").doc("${doc.id}").delete();
                                loadsearch();
                                '></td>
                                <td>${doc.data().readto}</td>
                                <td><input type="button" value="Edit" onclick='edit_readto_exhentai("${user.uid}","${doc.id}","${doc.data().readto}");'></input></td>
                                <td><input type="button" value="GO!" onclick='go_exhentai("${doc.data().number}");'></input></td>
                                <td><input type='button' value='Delete' onclick='delete_exhentai("${user.uid}","${doc.id}");'></input></td>
                                <td>
                                    <input type='button' value='Share' onclick='sharing(${count})'></input>
                                    <input type="hidden" id='we${count}' value='https://exhentai.org/g/${doc.data().number}'></input>
                                </td>   
                            </tr>`;

            count++;

        });

    });

    firebase.firestore().collection(`/${user.uid}/nhentai/book/`).get().then(function (querySnapshot) {

        querySnapshot.forEach(function (doc) {

            search_list += `<tr>
                                <td>Nhentai</td>
                                <td>${doc.id}</td>
                                <td><input type="button" value="Edit" onclick='
                                firebase.firestore().collection("/${user.uid}/nhentai/book/").doc(bookname_update()).set({

                                    number: "${doc.data().number}",
                            
                                    readto: "${doc.data().readto}"
                            
                                });
                                firebase.firestore().collection("/${user.uid}/nhentai/book/").doc("${doc.id}").delete();
                                loadsearch();
                                '></td>
                                <td>${doc.data().readto}</td>
                                <td><input type="button" value="Edit" onclick='edit_readto_nhentai("${user.uid}","${doc.id}","${doc.data().readto}");'></input></td>
                                <td><input type="button" value="GO!" onclick='go_nhentai(${doc.data().number},${doc.data().readto});'></input></td>
                                <td><input type='button' value='Delete' onclick='delete_nhentai("${user.uid}","${doc.id}");'></input></td>
                                <td>
                                <input type='button' value='Share' onclick='sharing(${count})'></input>
                                <input type="hidden" id='we${count}' value='https://nhentai.net/g/${doc.data().number}/'></input>
                                </td>   
                            </tr>`;

            count++;

        });

    });

    firebase.firestore().collection(`/${user.uid}/wnacg/book/`).get().then(function (querySnapshot) {

        querySnapshot.forEach(function (doc) {

            search_list += `<tr>
                                <td>WNACG 紳士倉庫</td>
                                <td>${doc.id}</td>
                                <td><input type="button" value="Edit" onclick='firebase.firestore().collection("/${user.uid}/wnacg/book/").doc(bookname_update()).set({

                                    number: "${doc.data().number}",
                            
                                    readto: "${doc.data().readto}"
                            
                                });firebase.firestore().collection("/${user.uid}/wnacg/book/").doc("${doc.id}").delete();loadsearch();'></td>
                                <td>${doc.data().readto}</td>
                                <td><input type="button" value="Edit" onclick='edit_readto_wnacg("${user.uid}","${doc.id}","${doc.data().readto}");'></input></td>
                                <td><input type="button" value="GO!" onclick='go_wnacg(${doc.data().number});'></input></td>
                                <td><input type='button' value='Delete' onclick='delete_wnacg("${user.uid}","${doc.id}");'></input></td>
                                <td>
                                <input type='button' value='Share' onclick='sharing(${count})'></input>
                                <input type="hidden" id='we${count}' value='https://m.wnacg.org/photos-slide-aid-${doc.data().number}.html'></input>
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
                                <td><input type="button" value="Edit" onclick='firebase.firestore().collection("/${user.uid}/動漫屋/book/").doc(bookname_update()).set({

                                    number: "${doc.data().number}",
                            
                                    readto: "${doc.data().readto}"
                            
                                });firebase.firestore().collection("/${user.uid}/動漫屋/book/").doc("${doc.id}").delete();loadsearch();'></td>
                                <td>${doc.data().readto}</td>
                                <td><input type="button" value="Edit" onclick='edit_readto_comichouse("${user.uid}","${doc.id}","${doc.data().readto}");'></input></td>
                                <td><input type="button" value="GO!" onclick='go_comichouse(${doc.data().number});'></input></td>
                                <td><input type='button' value='Delete' onclick='delete_comichouse("${user.uid}","${doc.id}");'></input></td>
                                <td>
                                <input type='button' value='Share' onclick='sharing(${count})'></input>                                
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
                                <td><input type="button" value="Edit" onclick='firebase.firestore().collection("/${user.uid}/看動漫/book/").doc(bookname_update()).set({
                                    
                                    number: "${doc.data().number}",
                                    readto: "${doc.data().readto}"
                                });firebase.firestore().collection("/${user.uid}/看動漫/book/").doc("${doc.id}").delete();loadsearch();'></td>
                                <td>${doc.data().readto}</td>
                                <td><input type="button" value="Edit" onclick='edit_readto_watchcomic("${user.uid}","${doc.id}","${doc.data().readto}");'></input></td>
                                <td><input type="button" value="GO!" onclick='go_watchcomic(${doc.data().number});'></input></td>
                                <td><input type='button' value='Delete' onclick='delete_watchcomic("${user.uid}","${doc.id}");'></input></td>
                                <td>
                                    <input type='button' value='Share' onclick='sharing(${count})'></input>
                                    <input type="hidden" id='we${count}' value='https://tw.manhuagui.com/comic/${doc.data().number}/' ></input>
                                </td>
                            </tr>`;

            count++;

        });

        document.getElementById("bookmarks").innerHTML = `${search_list}</table>`;

        count = 0;

    });

}

function edit_readto_ehentai(user, doc, page) {

    firebase.firestore().collection(`/${user}/ehentai/book/`).doc(`${doc}`).update({ readto: readto_update(`${page}`) });

    loadsearch();

}

function delete_ehentai(user, doc) {

    firebase.firestore().collection(`/${user}/ehentai/book/`).doc(`${doc}`).delete();

    loadsearch();

}

function go_ehentai(doc) {

    window.open(`https://e-hentai.org/g/${doc}`);

}

function edit_readto_exhentai(user, doc, page) {

    firebase.firestore().collection(`/${user}/exhentai/book/`).doc(`${doc}`).update({ readto: readto_update(`${page}`) });

    loadsearch();

}

function delete_exhentai(user, doc) {

    firebase.firestore().collection(`/${user}/exhentai/book/`).doc(`${doc}`).delete();

    loadsearch();

}

function go_exhentai(doc) {

    window.open(`https://exhentai.org/g/${doc}`);

}

function edit_readto_nhentai(user, doc, page) {

    firebase.firestore().collection(`/${user}/nhentai/book/`).doc(`${doc}`).update({ readto: readto_update(`${page}`) });

    loadsearch();

}

function delete_nhentai(user, doc) {

    firebase.firestore().collection(`/${user}/nhentai/book/`).doc(`${doc}`).delete();

    loadsearch();

}

function go_nhentai(doc, reading) {

    window.open(`https://nhentai.net/g/${doc}/${reading}`);

}

function edit_readto_wnacg(user, doc, page) {

    firebase.firestore().collection(`/${user}/wnacg/book/`).doc(`${doc}`).update({ readto: readto_update(`${page}`) });

    loadsearch();

}

function delete_wnacg(user, doc) {

    firebase.firestore().collection(`/${user}/wnacg/book/`).doc(`${doc}`).delete();

    loadsearch();

}

function go_wnacg(doc) {

    window.open(`https://m.wnacg.org/photos-slide-aid-${doc}.html`);

}

function edit_readto_comichouse(user, doc, page) {

    firebase.firestore().collection(`/${user}/動漫屋/book/`).doc(`${doc}`).update({ readto: readto_update(`${page}`) });

    loadsearch();

}

function delete_comichouse(user, doc) {

    firebase.firestore().collection(`/${user}/動漫屋/book/`).doc(`${doc}`).delete();

    loadsearch();

}

function go_comichouse(doc) {

    window.open(`https://dm5.io/${doc}/`);

}

function edit_readto_watchcomic(user, doc, page) {

    firebase.firestore().collection(`/${user}/看動漫/book/`).doc(`${doc}`).update({ readto: readto_update(`${page}`) });

    loadsearch();

}

function delete_watchcomic(user, doc) {

    firebase.firestore().collection(`/${user}/看動漫/book/`).doc(`${doc}`).delete();

    loadsearch();
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

    var read = window.prompt(`讀到哪裡?\r( Where have you read to? )`,`${page}`);

    if (read) {

        return read;

    } else {

        return;

    }

}

function bookname_update() {

    var book_name = window.prompt(`要改成甚麼名字?\r( What name are you changing to? )`);

    if (book_name) {

        return book_name;

    } else {

        return;

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

            document.getElementById("sign").disabled = false;

        });

    }

    document.getElementById("sign").disabled = true;

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

            document.getElementById("main").innerHTML = `${withemailverified_PC}${bootstrap_JS}`;

            loadsearch();

            twttr.widgets.load(
                document.getElementById("twitter")
            );

        } else if (user && outerWidth > 767) {

            var email = user.email;

            alert(`您以 ${email} 的身分登入了\r( You have been logged in as ${email}!)`);

            document.getElementById("main").innerHTML = noneemailverifed_PC;

            loadsearch();

            twttr.widgets.load(
                document.getElementById("twitter")
            );

        } else if (user && user.emailVerified) {

            var email = user.email;

            alert(`您以 ${email} 的身分登入了\r( You have been logged in as ${email}!)`);

            document.getElementById("main").innerHTML = withemailverified_Phone;

            loadsearch();

        } else if (user) {

            var email = user.email;

            alert(`您以 ${email} 的身分登入了\r( You have been logged in as ${email}!)`);

            document.getElementById("main").innerHTML = withemailverified_Phone;

            loadsearch();

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

window.addEventListener("load", initial, false);