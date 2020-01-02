var search_list = `<table><thead><tr><th>Book Name</th><th>Link</th><th>Delete</th></tr></thead>`;

var vid = `<div class="video-container">
<iframe id="video" src="https://www.youtube.com/embed/h8SWOJ1zrhw?autoplay=0&loop=1&fs=0&rel=0&modestbranding=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"  allowfullscreen></iframe>
<br>
<span id="youtube_input">Youtube 影片ID<br><input type="text" value="" id="youtubevideo" placeholder="https://www.youtube.com/watch?v=&Prime;影片ID&Prime;" style="width:80%;"></span>&nbsp;<input type="submit" value="play" onclick="video_update()">
</div>`;

var tweet = `<center><div id="twitter">
<a class="twitter-timeline" data-width="350" data-height="auto" data-chrome="nofooter" href="https://twitter.com/yukihimenote?ref_src=twsrc%5Etfw">Tweets by yukihimenote</a>
</script>
</div></center>`;

var table_control_PC = `<div id=table_control>
    <input type="button" id="spanFirst" onclick="firstPage()" value="第一頁"></input>&nbsp;
    <input type="button" id="spanPre" onclick="prePage()" value="上一頁"></input>&nbsp;
    第&nbsp;<span id="spanPageNum"></span>&nbsp;頁/共&nbsp;<span id="spanTotalPage">${last}</span>&nbsp;頁&nbsp;
    <input type="button" id="spanNext" onclick="nextPage()" value="下一頁"></input>&nbsp;
    <input type="button" id="spanLast" onclick="lastPage()" value="最後一頁"></input>
    </div>`;

var table_control_Phone = `<div id=table_control>
<input type="button" id="spanPre" onclick="prePage_Phone()" value="上一頁"></input>&nbsp;
第&nbsp;<span id="spanPageNum"></span>&nbsp;頁/共&nbsp;<span id="spanTotalPage">${last}</span>&nbsp;頁&nbsp;
<input type="button" id="spanNext" onclick="nextPage_Phone()" value="下一頁"></input>&nbsp;
</div>`;

var data_per_page = 15;

var withemailverify = `<select id="website">
                        <option value="看動漫">看動漫</option>
                        <option value="動漫屋">動漫屋</option>
                        <option value="wnacg">WNACG 紳士倉庫</option>
                        <option value="ehentai">E站(表)[ /g/ 以後的所有東西 ]</option>
                        <option value="exhentai">熊貓[ /g/ 以後的所有東西 ]</option>
                        <option value="read_only" disabled>以下Read to僅限輸入數字</option>
                        <option value="nhentai">N站</option>
                        </select>`;

var noneemailverify = `只支援看動漫`;

var withemailverified_PC = `<div id="page">
<nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
    <a class="navbar-brand" href="https://twitter.com/yukihimenote" target="_blank"><img src="icon.jpg" id="icon"></a>

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

                <a class="nav-link " href="https://exhentai.org/?f_cats=767" target="_blank">熊貓</a>

            </li>

            <li class="nav-item">

                <a class="nav-link " href="https://nhentai.net/" target="_blank">N站</a>
            </li>

        </ul>
        <form class="form-inline my-2 my-lg-0">

        <button type="button" class="btn btn-outline-danger my-2 my-sm-0" onclick="location.href='漫畫筆記本-00757028+00757018.pptx'"><i class="fa fa-download"></i> PPT</button>
           
        &emsp;
        
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
    <center><div id="bookmarks"></div><br>${table_control_PC}</center><br>
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
<a class="navbar-brand" href="https://twitter.com/yukihimenote" target="_blank"><img src="icon.jpg" id="icon"></a>
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
      <a class="nav-link " href="https://exhentai.org/?f_cats=767" target="_blank">熊貓</a>
    </li>
    <li class="nav-item">
      <a class="nav-link " href="https://nhentai.net/" target="_blank">N站</a>
    </li>
  </ul>
  <form class="form-inline my-2 my-lg-0">

        <button type="button" class="btn btn-outline-danger my-2 my-sm-0" onclick="location.href='漫畫筆記本-00757028+00757018.pptx'"><i class="fa fa-download"></i> PPT</button>
           
        &emsp;
        
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
    <center><div id="bookmarks"></div><br>${table_control_Phone}</center><br>
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
<a class="navbar-brand" href="https://twitter.com/yukihimenote" target="_blank"><img src="icon.jpg" id="icon"></a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#LIST" aria-controls="LIST" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button> 
<div class="collapse navbar-collapse " id="LIST" style>
  <ul class="nav navbar-nav mr-auto">
    <li class="nav-item">
      <a class="nav-link" href="https://tw.manhuagui.com/" target="_blank">看動漫 </a>
  </ul>
  <form class="form-inline my-2 my-lg-0">

        <button type="button" class="btn btn-outline-danger my-2 my-sm-0" onclick="location.href='漫畫筆記本-00757028+00757018.pptx'"><i class="fa fa-download"></i> PPT</button>
           
        &emsp;
        
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
    <input type="button" id="add_new" value="新增 ( Add New Book )" onclick="add1()">
    </div>
</div>

<div class="container">
  <div class="row">
    <div class="col-md-8">
    <center><input type="button" id="refresh" value="重新載入表格 ( refresh the chart )" onclick="refreshing()"></center><br> 
    <center><div id="bookmarks"></div><br>${table_control_PC}</center><br>
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
<a class="navbar-brand" href="https://twitter.com/yukihimenote" target="_blank"><img src="icon.jpg" id="icon"></a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#LIST" aria-controls="LIST" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button> 
<div class="collapse navbar-collapse " id="LIST" style>
  <ul class="nav navbar-nav mr-auto">
    <li class="nav-item">
      <a class="nav-link" href="https://tw.manhuagui.com/" target="_blank">看動漫 </a>
  </ul>
  <form class="form-inline my-2 my-lg-0">

        <button type="button" class="btn btn-outline-danger my-2 my-sm-0" onclick="location.href='漫畫筆記本-00757028+00757018.pptx'"><i class="fa fa-download"></i> PPT</button>
           
        &emsp;
        
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
    <input type="button" id="add_new" value="新增 ( Add New Book )" onclick="add1_Phone()">
    </div>
</div>

<div class="container">
  <div class="row">
    <div class="col-md-12">
    <center><input type="button" id="refresh" value="重新載入表格 ( refresh the chart )" onclick="refreshing_Phone()"></center><br> 
    <center><div id="bookmarks"></div><br>${table_control_Phone}</center><br>
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
<a href="漫畫筆記本-00757028+00757018.pptx"><img src="icon.jpg" id="home_icon"></a><br>
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

var count = 1;

var current_page;

var last;

var data_count;

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

function add1_Phone() {

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

    loadsearch_Phone();

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
                    </thead><tbody id="tb">`;

    firebase.firestore().collection(`/${user.uid}/ehentai/book/`).get().then(function (querySnapshot) {

        querySnapshot.forEach(function (doc) {

            search_list += `<tr id="book${count}" style="display:none;">
                                <td>E-Hentai</td>
                                <td>${doc.id}</td>
                                <td><input type="button" value="Edit" onclick='edit_bookname_ehentai("${user.uid}","${doc.id}","${doc.data().number}","${doc.data().readto}");loadsearch();'></td>
                                <td>${doc.data().readto}</td>
                                <td><input type="button" value="Edit" onclick='edit_readto_ehentai("${user.uid}","${doc.id}","${doc.data().readto}");loadsearch();'></input></td>
                                <td><input type="button" value="GO!" onclick='go_ehentai("${doc.data().number}");'></input></td>
                                <td><input type='button' value='Delete' onclick='delete_ehentai("${user.uid}","${doc.id}");loadsearch();'></input></td>
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

            search_list += `<tr id="book${count}" style="display:none;">
                                <td>EXHentai</td>
                                <td>${doc.id}</td>
                                <td><input type="button" value="Edit" onclick='edit_bookname_exhentai("${user.uid}","${doc.id}","${doc.data().number}","${doc.data().readto}");loadsearch();'></td>
                                <td>${doc.data().readto}</td>
                                <td><input type="button" value="Edit" onclick='edit_readto_exhentai("${user.uid}","${doc.id}","${doc.data().readto}");loadsearch();'></input></td>
                                <td><input type="button" value="GO!" onclick='go_exhentai("${doc.data().number}");'></input></td>
                                <td><input type='button' value='Delete' onclick='delete_exhentai("${user.uid}","${doc.id}");loadsearch();'></input></td>
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

            search_list += `<tr id="book${count}" style="display:none;">
                                <td>Nhentai</td>
                                <td>${doc.id}</td>
                                <td><input type="button" value="Edit" onclick='edit_bookname_nhentai("${user.uid}","${doc.id}","${doc.data().number}","${doc.data().readto}");loadsearch();'></td>
                                <td>${doc.data().readto}</td>
                                <td><input type="button" value="Edit" onclick='edit_readto_nhentai("${user.uid}","${doc.id}","${doc.data().readto}");loadsearch();'></input></td>
                                <td><input type="button" value="GO!" onclick='go_nhentai("${doc.data().number}",${doc.data().readto});'></input></td>
                                <td><input type='button' value='Delete' onclick='delete_nhentai("${user.uid}","${doc.id}");loadsearch();'></input></td>
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

            search_list += `<tr id="book${count}" style="display:none;">
                                <td>WNACG 紳士倉庫</td>
                                <td>${doc.id}</td>
                                <td><input type="button" value="Edit" onclick='edit_bookname_wnacg("${user.uid}","${doc.id}","${doc.data().number}","${doc.data().readto}");loadsearch();'></td>
                                <td>${doc.data().readto}</td>
                                <td><input type="button" value="Edit" onclick='edit_readto_wnacg("${user.uid}","${doc.id}","${doc.data().readto}");loadsearch();'></input></td>
                                <td><input type="button" value="GO!" onclick='go_wnacg("${doc.data().number}");'></input></td>
                                <td><input type='button' value='Delete' onclick='delete_wnacg("${user.uid}","${doc.id}");loadsearch();'></input></td>
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

            search_list += `<tr id="book${count}" style="display:none;">
                                <td>動漫屋</td>
                                <td>${doc.id}</td>
                                <td><input type="button" value="Edit" onclick='edit_bookname_comichouse("${user.uid}","${doc.id}","${doc.data().number}","${doc.data().readto}");loadsearch();'></td>
                                <td>${doc.data().readto}</td>
                                <td><input type="button" value="Edit" onclick='edit_readto_comichouse("${user.uid}","${doc.id}","${doc.data().readto}");loadsearch();'></input></td>
                                <td><input type="button" value="GO!" onclick='go_comichouse("${doc.data().number}");'></input></td>
                                <td><input type='button' value='Delete' onclick='delete_comichouse("${user.uid}","${doc.id}");loadsearch();'></input></td>
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

            search_list += `<tr id="book${count}" style="display:none;">
                                <td>看動漫</td>
                                <td>${doc.id}</td>
                                <td><input type="button" value="Edit" onclick='edit_bookname_watchcomic("${user.uid}","${doc.id}","${doc.data().number}","${doc.data().readto}");loadsearch();'></td>
                                <td>${doc.data().readto}</td>
                                <td><input type="button" value="Edit" onclick='edit_readto_watchcomic("${user.uid}","${doc.id}","${doc.data().readto}");loadsearch();'></input></td>
                                <td><input type="button" value="GO!" onclick='go_watchcomic("${doc.data().number}");'></input></td>
                                <td><input type='button' value='Delete' onclick='delete_watchcomic("${user.uid}","${doc.id}");loadsearch();'></input></td>
                                <td>
                                    <input type='button' value='Share' onclick='sharing(${count})'></input>
                                    <input type="hidden" id='we${count}' value='https://tw.manhuagui.com/comic/${doc.data().number}/' ></input>
                                </td>
                            </tr>`;

            count++;

        });

        data_count = count;

        document.getElementById("bookmarks").innerHTML = `${search_list}</tbody></table>`;

        showCurrPage(1);
        showTotalPage();

        firstPage();

        count = 1;

    });

}

function loadsearch_Phone() {

    var user = firebase.auth().currentUser;

    search_list = `<table>
                    <thead>
                        <tr>
                            <th>書名</th>
                            <th>頁碼</th>
                            <th>更新頁碼</th>
                            <th>連結</th>
                            <th>刪除</th>
                        </tr>
                    </thead><tbody id="tb">`;

    firebase.firestore().collection(`/${user.uid}/ehentai/book/`).get().then(function (querySnapshot) {

        querySnapshot.forEach(function (doc) {

            search_list += `<tr id="book${count}" style="display:none;">
                                <td>${doc.id}</td>
                                <td>${doc.data().readto}</td>
                                <td><input type="button" value="Edit" onclick='edit_readto_ehentai("${user.uid}","${doc.id}","${doc.data().readto}");loadsearch_Phone();'></input></td>
                                <td><input type="button" value="GO!" onclick='go_ehentai("${doc.data().number}");'></input></td>
                                <td><input type='button' value='Delete' onclick='delete_ehentai("${user.uid}","${doc.id}");loadsearch_Phone();'></input></td> 
                            </tr>`;

            count++;

        });

    });

    firebase.firestore().collection(`/${user.uid}/exhentai/book/`).get().then(function (querySnapshot) {

        querySnapshot.forEach(function (doc) {

            search_list += `<tr id="book${count}" style="display:none;">
                                <td>${doc.id}</td>
                                <td>${doc.data().readto}</td>
                                <td><input type="button" value="Edit" onclick='edit_readto_exhentai("${user.uid}","${doc.id}","${doc.data().readto}");loadsearch_Phone();'></input></td>
                                <td><input type="button" value="GO!" onclick='go_exhentai("${doc.data().number}");'></input></td>
                                <td><input type='button' value='Delete' onclick='delete_exhentai("${user.uid}","${doc.id}");loadsearch_Phone();'></input></td>  
                            </tr>`;

            count++;

        });

    });

    firebase.firestore().collection(`/${user.uid}/nhentai/book/`).get().then(function (querySnapshot) {

        querySnapshot.forEach(function (doc) {

            search_list += `<tr id="book${count}" style="display:none;">
                                <td>${doc.id}</td>
                                <td>${doc.data().readto}</td>
                                <td><input type="button" value="Edit" onclick='edit_readto_nhentai("${user.uid}","${doc.id}","${doc.data().readto}");loadsearch_Phone();'></input></td>
                                <td><input type="button" value="GO!" onclick='go_nhentai(${doc.data().number},${doc.data().readto});'></input></td>
                                <td><input type='button' value='Delete' onclick='delete_nhentai("${user.uid}","${doc.id}");loadsearch_Phone();'></input></td>   
                            </tr>`;

            count++;

        });

    });

    firebase.firestore().collection(`/${user.uid}/wnacg/book/`).get().then(function (querySnapshot) {

        querySnapshot.forEach(function (doc) {

            search_list += `<tr id="book${count}" style="display:none;">
                                <td>${doc.id}</td>
                                <td>${doc.data().readto}</td>
                                <td><input type="button" value="Edit" onclick='edit_readto_wnacg("${user.uid}","${doc.id}","${doc.data().readto}");loadsearch_Phone();'></input></td>
                                <td><input type="button" value="GO!" onclick='go_wnacg(${doc.data().number});'></input></td>
                                <td><input type='button' value='Delete' onclick='delete_wnacg("${user.uid}","${doc.id}");loadsearch_Phone();'></input></td>
                            </tr>`;

            count++;

        });

    });

    firebase.firestore().collection(`/${user.uid}/動漫屋/book/`).get().then(function (querySnapshot) {

        querySnapshot.forEach(function (doc) {

            search_list += `<tr id="book${count}" style="display:none;">
                                <td>${doc.id}</td>
                                <td>${doc.data().readto}</td>
                                <td><input type="button" value="Edit" onclick='edit_readto_comichouse("${user.uid}","${doc.id}","${doc.data().readto}");loadsearch_Phone();'></input></td>
                                <td><input type="button" value="GO!" onclick='go_comichouse(${doc.data().number});'></input></td>
                                <td><input type='button' value='Delete' onclick='delete_comichouse("${user.uid}","${doc.id}");loadsearch_Phone();'></input></td>
                            </tr>`;

            count++;

        });

    });

    firebase.firestore().collection(`/${user.uid}/看動漫/book/`).get().then(function (querySnapshot) {

        querySnapshot.forEach(function (doc) {

            search_list += `<tr id="book${count}" style="display:none;">
                                <td>${doc.id}</td>
                                <td>${doc.data().readto}</td>
                                <td><input type="button" value="Edit" onclick='edit_readto_watchcomic("${user.uid}","${doc.id}","${doc.data().readto}");loadsearch_Phone();'></input></td>
                                <td><input type="button" value="GO!" onclick='go_watchcomic(${doc.data().number});'></input></td>
                                <td><input type='button' value='Delete' onclick='delete_watchcomic("${user.uid}","${doc.id}");loadsearch_Phone();'></input></td>
                            </tr>`;

            count++;

        });

        data_count = count;

        document.getElementById("bookmarks").innerHTML = `${search_list}</tbody></table>`;

        showCurrPage(1);
        showTotalPage();

        firstPage_Phone();

        count = 1;

    });

}

function edit_bookname_ehentai(user, name, number, page) {
    firebase.firestore().collection(`/${user}/ehentai/book/`).doc(bookname_update(`${name}`)).set({
        number: `${number}`,
        readto: `${page}`
    });
    firebase.firestore().collection(`/${user}/ehentai/book/`).doc(`${name}`).delete();
}

function edit_readto_ehentai(user, doc, page) {

    firebase.firestore().collection(`/${user}/ehentai/book/`).doc(`${doc}`).update({ readto: readto_update(`${page}`) });

}

function delete_ehentai(user, doc) {

    firebase.firestore().collection(`/${user}/ehentai/book/`).doc(`${doc}`).delete();

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
}

function edit_readto_exhentai(user, doc, page) {

    firebase.firestore().collection(`/${user}/exhentai/book/`).doc(`${doc}`).update({ readto: readto_update(`${page}`) });

}

function delete_exhentai(user, doc) {

    firebase.firestore().collection(`/${user}/exhentai/book/`).doc(`${doc}`).delete();

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
}

function edit_readto_nhentai(user, doc, page) {

    firebase.firestore().collection(`/${user}/nhentai/book/`).doc(`${doc}`).update({ readto: readto_update(`${page}`) });

}

function delete_nhentai(user, doc) {

    firebase.firestore().collection(`/${user}/nhentai/book/`).doc(`${doc}`).delete();

}

function go_nhentai(doc, reading) {

    window.open(`https://nhentai.net/g/${doc}/${reading}`);

}

function edit_bookname_wnacg(user, name, number, page) {
    firebase.firestore().collection(`/${user}/wnacg/book/`).doc(bookname_update(`${name}`)).set({
        number: `${number}`,
        readto: `${page}`
    });
    firebase.firestore().collection(`/${user}/wnacg/book/`).doc(`${name}`).delete();
}

function edit_readto_wnacg(user, doc, page) {

    firebase.firestore().collection(`/${user}/wnacg/book/`).doc(`${doc}`).update({ readto: readto_update(`${page}`) });

}

function delete_wnacg(user, doc) {

    firebase.firestore().collection(`/${user}/wnacg/book/`).doc(`${doc}`).delete();

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
}

function edit_readto_comichouse(user, doc, page) {

    firebase.firestore().collection(`/${user}/動漫屋/book/`).doc(`${doc}`).update({ readto: readto_update(`${page}`) });

}

function delete_comichouse(user, doc) {

    firebase.firestore().collection(`/${user}/動漫屋/book/`).doc(`${doc}`).delete();

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
}

function edit_readto_watchcomic(user, doc, page) {

    firebase.firestore().collection(`/${user}/看動漫/book/`).doc(`${doc}`).update({ readto: readto_update(`${page}`) });

}

function delete_watchcomic(user, doc) {

    firebase.firestore().collection(`/${user}/看動漫/book/`).doc(`${doc}`).delete();

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

            alert("驗證信已經寄出!(如未收到，請至垃圾郵件檢查)\r( Verify email has been send, if you didn't get it, please check the trash can)");

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

function re_Verify(){
    firebase.auth().currentUser.sendEmailVerification().then(function () {

        alert("驗證信已經寄出!(如未收到，請至垃圾郵件檢查)\r( Verify email has been send, if you didn't get it, please check the trash can)");

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
    //<3
}

function firstPage() {

    hide();

    var table_body = document.getElementById("tb");

    current_page = 1;

    showCurrPage(current_page);

    if (data_count > data_per_page) {
        for (i = 0; i < data_per_page; i++) {

            table_body.rows[i].style.display = "";

        }
    } else {
        for (i = 0; i < data_count-1; i++) {

            table_body.rows[i].style.display = "";

        }
    }

    var totalpage = parseInt(data_count / data_per_page);

    if (0 != data_count % data_per_page) {
        totalpage += 1;
    }

    if (totalpage == 1) {
        document.getElementById("spanFirst").disabled = true;
        document.getElementById("spanPre").disabled = true;
        document.getElementById("spanNext").disabled = true;
        document.getElementById("spanLast").disabled = true;
    } else {
        document.getElementById("spanFirst").disabled = true;
        document.getElementById("spanPre").disabled = true;
        document.getElementById("spanNext").disabled = false;
        document.getElementById("spanLast").disabled = false;
    }

}

function prePage() {

    hide();

    current_page--;

    var table_body = document.getElementById("tb");

    showCurrPage(current_page);

    var firstR = firstRow(current_page);

    var lastR = lastRow(firstR);

    for (i = firstR - 1; i < lastR - 1; i++) {

        table_body.rows[i].style.display = "";

    }

    if (current_page === 1) {
        document.getElementById("spanFirst").disabled = true;
        document.getElementById("spanPre").disabled = true;
        document.getElementById("spanNext").disabled = false;
        document.getElementById("spanLast").disabled = false;
    } else {
        document.getElementById("spanFirst").disabled = false;
        document.getElementById("spanPre").disabled = false;
        document.getElementById("spanNext").disabled = false;
        document.getElementById("spanLast").disabled = false;
    }

}

function nextPage() {

    hide();

    current_page++;

    var table_body = document.getElementById("tb");

    showCurrPage(current_page);

    var firstR = firstRow(current_page);

    var lastR = lastRow(firstR);

    for (i = firstR - 1; i < lastR - 1; i++) {

        table_body.rows[i].style.display = "";

    }

    if (current_page === last) {
        document.getElementById("spanFirst").disabled = false;
        document.getElementById("spanPre").disabled = false;
        document.getElementById("spanNext").disabled = true;
        document.getElementById("spanLast").disabled = true;
    } else {
        document.getElementById("spanFirst").disabled = false;
        document.getElementById("spanPre").disabled = false;
        document.getElementById("spanNext").disabled = false;
        document.getElementById("spanLast").disabled = false;
    }

}

function lastPage() {

    hide();

    current_page = last;

    showCurrPage(current_page);

    var table_body = document.getElementById("tb");

    var firstR = firstRow(current_page);

    for (i = firstR - 1; i < data_count - 1; i++) {

        table_body.rows[i].style.display = "";

    }

    document.getElementById("spanFirst").disabled = false;
    document.getElementById("spanPre").disabled = false;
    document.getElementById("spanNext").disabled = true;
    document.getElementById("spanLast").disabled = true;

}

function firstPage_Phone() {

    hide();

    var table_body = document.getElementById("tb");

    current_page = 1;

    showCurrPage(current_page);

    if (data_count > data_per_page) {

        for (i = 0; i < data_per_page; i++) {

            table_body.rows[i].style.display = "";

        }

    } else {

        for (i = 0; i < data_count-1; i++) {

            table_body.rows[i].style.display = "";

        }
            
    }

    var totalpage = parseInt(data_count / data_per_page);

    if (0 != data_count % data_per_page) {
        totalpage += 1;
    }

    if (totalpage == 1) {
        document.getElementById("spanPre").disabled = true;
        document.getElementById("spanNext").disabled = true;
    } else {
        document.getElementById("spanPre").disabled = true;
        document.getElementById("spanNext").disabled = false;
    }

}

function prePage_Phone() {

    hide();

    current_page--;

    var table_body = document.getElementById("tb");

    showCurrPage(current_page);

    var firstR = firstRow(current_page);

    var lastR = lastRow(firstR);

    for (i = firstR - 1; i < lastR - 1; i++) {

        table_body.rows[i].style.display = "";

    }

    if (current_page === 1) {
        document.getElementById("spanPre").disabled = true;
        document.getElementById("spanNext").disabled = false;
    } else {
        document.getElementById("spanPre").disabled = false;
        document.getElementById("spanNext").disabled = false;
    }

}

function nextPage_Phone() {

    hide();

    current_page++;

    var table_body = document.getElementById("tb");

    showCurrPage(current_page);

    var firstR = firstRow(current_page);

    var lastR = lastRow(firstR);

    for (i = firstR - 1; i < lastR - 1; i++) {

        table_body.rows[i].style.display = "";

    }

    if (current_page === last) {
        document.getElementById("spanPre").disabled = false;
        document.getElementById("spanNext").disabled = true;
    } else {
        document.getElementById("spanPre").disabled = false;
        document.getElementById("spanNext").disabled = false;
    }

}

function firstRow(currPageNum) {
    return data_per_page * (currPageNum - 1) + 1;
}

function lastRow(firstRow) {
    var lastRow = firstRow + data_per_page;
    if (lastRow > data_count) {
        lastRow = data_count;
    }
    return lastRow;
}

function showCurrPage(cpn) {
    document.getElementById("spanPageNum").innerHTML = cpn;
}

function showTotalPage() {
    var totalpage = parseInt(data_count / data_per_page);
    if (0 != data_count % data_per_page) {
        totalpage += 1;
    }
    var total = document.getElementById("spanTotalPage");
    total.innerText = totalpage;
    last = totalpage;
}

function hide() {

    var table_body = document.getElementById("tb");

    for (var i = 0; i < data_count - 1; i++) {
        table_body.rows[i].style.display = "none";
    }
}



window.addEventListener("load", initial, false);
