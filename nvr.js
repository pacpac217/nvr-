const {
    ocr,
    exec,
    clipText,
    appActivate,
    appState,
    findImage,
    openURL,
    appRun,
    inputText,
    rootDir,
    usleep,
    toast,
    getColor,
    touchDown,
    touchUp,
    touchMove,
    keyDown,
    keyUp,
} = at;
let base64 = require(rootDir() + "/Facebook/base64.js");

const pathData = rootDir() + "/Facebook/data/";
const imgKhongGuiLaiMa = pathData + "imgKhongGuiLaiMa.png";
const imgDangKySDT = pathData + "imgDangKySDT.png";
const imgThamGiaFacebook = pathData + "imgThamGiaFacebook.png";
const imgTaoTaiKhoanMoi = pathData + "imgTaoTaiKhoanMoi.png";
const imgDaCoTaiKhoan = pathData + "imgDaCoTaiKhoan.png";

const pathConfig = pathData + "config.txt";
const pathFirstname = pathData + "firstname.txt";
const pathLastname = pathData + "lastname.txt";
const pathname = pathData + "name.txt";
const nameIphone = fs.readFile(pathname)[0];

let objConfig;
var myPassword;
var passToSave;
var avtinfo;
var anhbia;
var khoabaove;
var mess;
var mode;
var time30;
var apiClone;
var kho1;
var kho2;
var ketban;
var fa;
var avatar;
var success;
var fail;
var rss;
var lineAcc;
var y = 0;
var row;
var col;
let dausosave = "";

function _init() {
    objConfig = getObject(fs.readFile(pathConfig)[0]);
    myPassword = objConfig.pass;
    passToSave = "";
    avtinfo = 0;
    anhbia = 0;
    khoabaove = 0;
    video = 0;
    mess = objConfig.mess;
    if (mess != 0) y = 60;
    mode = objConfig.mode;
    time30 = 30;
    time60 = 60;
    key = "";
    apiClone = objConfig.apiClone;
    kho1 = objConfig.kho1;
    kho2 = objConfig.kho2;
    ketban = 0;
    fa = 0;
    avatar = objConfig.avatar;
    mailclone = objConfig.mailclone;
    safari = objConfig.safari;
    success = objConfig.success;
    fail = objConfig.fail;
    rss = objConfig.rss;
    row = objConfig.row;
    col = objConfig.col;
    lineAcc = objConfig.vitri;
    if (nameIphone.startsWith("MAY")) {
        lineAcc = parseInt(nameIphone.replace("MAY", ""), 10);
    }
    toast("Line acc : " + lineAcc, "center", 3);
    if (lineAcc > 10) lineAcc = 1;
}

let intLog = 0;
let intToast = 1;
let dauso = [];

let success1 = 0;
let fail1 = 0;
let batdau = 1;


//112
const bdlFace = "com.facebook.Facebook";
const bdlSha = "com.liguangming.Shadowrocket";
const bdlMess = "com.facebook.Messenger";

const imgNgaysinh = pathData + "imgNgaysinh.png";
const imgLuu = pathData + "imgLuu.png";

const imgLuu1 = pathData + "imgLuu1.png";
const imgThongTin = pathData + "imgThongTin.png";

const imgKhangNghi = pathData + "imgKhangNghi.png";
const imgKhangNghiTiepTuc = pathData + "imgKhangNghiTiepTuc.png";
const imgChungtoi = pathData + "imgChungtoi.png";
const imgPhoneCheckVery = pathData + "imgPhoneCheckVery.png";
const imgPhoneCheckAgant = pathData + "imgPhoneCheckAgant.png";
const imgSDT = pathData + "imgSDT.png";
const imgThietBiOGan = pathData + "imgThietBiOGan.png";

function upTile(sName, intS, intF, sTimein, sTimeout) {
    let urlUp =
        "https://script.google.com/macros/s/AKfycbzOzzHFXev1HzYx4kM9rK-9oefFnEQVcFAtkrYH6jXjOMvlOzBgKqyQo7NWp2qNnNaO/exec?task=up&name=" +
        sName +
        "&s=" +
        intS +
        "&f=" +
        intF +
        "&timein=" +
        sTimein +
        "&timeout=" +
        sTimeout;
    let x = exec("curl --location -m 10 '" + urlUp + "'");
}

function getRowbyName(name) {
    let urlGet =
        "https://script.google.com/macros/s/AKfycbyWmZ8Agg9h0pPbCRambN5O-Rv-dvvtxIkcp3xEkScCtXDsHgdeET-abCW_dfyzuFkS/exec?task=getRow&name=" +
        name;
    let x = exec("curl --location -s '" + urlGet + "'");
    return parseInt(x);
}

function getConfigbyName(name) {
    toast("Setting config...", "center", 5);
    let urlGet =
        "https://script.google.com/macros/s/AKfycbzZ6GLlpLLNyF13NVMpRYJ36uKhyW-Avv7vfwu7-U8KXQ93PsWd3iD2Awmlw3L3l5j1/exec?task=getConfig&name=" +
        name;
    let x = exec("curl --location -s '" + urlGet + "'");
    //fs.writeFile(pathConfig, '', 'w');

    fs.remove(pathConfig); //Xoa file cu
    fs.writeFile(pathConfig, JSON.stringify(getObject(x)));
    return getObject(x);
}

function updateVitri(dong, cot, dulieu) {
    let urlGet =
        "https://script.google.com/macros/s/AKfycbwlGnFR_IJXwPfZiA3vvQbTtI7USuYpCn-JAk0f9FigLkf6aKd3Sq0DQyzthT_w1_hi/exec?task=setData&dong=" +
        dong +
        "&cot=" +
        cot +
        "&data=" +
        dulieu;
    let x = exec("curl --location -m 30 '" + urlGet + "'");
}

function getRss(dong, cot) {
    toast("Get Rss...", "center", 3);
    let urlGet =
        "https://script.google.com/macros/s/AKfycbz-8qdOh2ppLqZR8bCjQZMnNOQcA4O_zFwQqeuaPP5EKqKZUxUvIawb3pNljDRpmWto/exec?task=getRss&dong=" +
        dong +
        "&cot=" +
        cot;
    console.log(urlGet);
    let x = exec("curl --location -s '" + urlGet + "'");
    return x;
}

function getPhone(dong) {
    toast("Get list phone", "center", 3);
    let urlGet =
        "https://script.google.com/macros/s/AKfycbzap8Lu4mYKiH_Ons-poMozUcItgsIO7Pxo0ulj4FEV2U-aO1wh5zt-VVmNc2nIFX-N/exec?task=getPhone&dong=" +
        dong;
    let data = exec("curl --location -s '" + urlGet + "'");
    let x = getObject(data).data;
    let dataPhone = x.split(",");
    let tam = "";
    let arrPhone = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+"];
    for (let i = 0; i < dataPhone.length; i++) {
        tam = "";
        for (let j = 0; j < dataPhone[i].length; j++) {
            if (_inArray(dataPhone[i][j], arrPhone)) tam += dataPhone[i][j];
        }
        dataPhone[i] = tam;
    }
    return dataPhone;
}

function upClone(dong, cot, dulieu) {
    let urlGet =
        "https://script.google.com/macros/s/AKfycbydPgLeDfXBUOFdywNEq8G1efb9i37MR0nBbiqipCAJzPEXBxbnsxiPebRYo_f3fsGc/exec?task=upClone&dong=" +
        dong +
        "&cot=" +
        cot +
        "&data=" +
        dulieu;
    let x = exec("curl --location '" + urlGet + "'");
}

function _randPass(intNum) {
    let kq = "";
    let text = "0123456789";
    for (let i = 0; i < intNum; i++) {
        kq += text[_ranbw(0, 9)];
    }
    return kq;
}
function getObject(strJson) {
    let strObj = "";
    let x = 0;
    while (strJson[x] != "{") {
        x++;
    }
    let y = strJson.lastIndexOf("}");

    for (let i = x; i <= y; i++) {
        strObj += strJson[i];
    }
    //console.log('GET OBJ : ' + JSON.stringify(JSON.parse(strObj)))
    if (strObj != "") return JSON.parse(strObj);
    else return {};
}
function _gokytu(strText) {
    if (strText == "") return;
    for (let i = 0; i < strText.length; i++) {
        switch (strText[i]) {
            case " ":
                _gclick(285, 1289);
                break;
            case "q":
                _gclick(35, 960);
                break;
            case "w":
                _gclick(35 + 75.55 * 1, 960);
                break;
            case "e":
                _gclick(35 + 75.55 * 2, 960);
                break;
            case "r":
                _gclick(35 + 75.55 * 3, 960);
                break;
            case "t":
                _gclick(35 + 75.55 * 4, 960);
                break;
            case "y":
                _gclick(35 + 75.55 * 5, 960);
                break;
            case "u":
                _gclick(35 + 75.55 * 6, 960);
                break;
            case "i":
                _gclick(35 + 75.55 * 7, 960);
                break;
            case "o":
                _gclick(35 + 75.55 * 8, 960);
                break;
            case "p":
                _gclick(35 + 75.55 * 9, 960);
                break;
            case "a":
                _gclick(75, 1066);
                break;
            case "s":
                _gclick(75 + 75.55 * 1, 1066);
                break;
            case "d":
                _gclick(75 + 75.55 * 2, 1066);
                break;
            case "f":
                _gclick(75 + 75.55 * 3, 1066);
                break;
            case "g":
                _gclick(75 + 75.55 * 4, 1066);
                break;
            case "h":
                _gclick(75 + 75.55 * 5, 1066);
                break;
            case "j":
                _gclick(75 + 75.55 * 6, 1066);
                break;
            case "k":
                _gclick(75 + 75.55 * 7, 1066);
                break;
            case "l":
                _gclick(75 + 75.55 * 8, 1066);
                break;
            case "z":
                _gclick(150, 1177);
                break;
            case "x":
                _gclick(150 + 75.55 * 1, 1177);
                break;
            case "c":
                _gclick(150 + 75.55 * 2, 1177);
                break;
            case "v":
                _gclick(150 + 75.55 * 3, 1177);
                break;
            case "b":
                _gclick(150 + 75.55 * 4, 1177);
                break;
            case "n":
                _gclick(150 + 75.55 * 5, 1177);
                break;
            case "m":
                _gclick(150 + 75.55 * 6, 1177);
                break;

            case "Q":
                shift();
                _gclick(35, 960);
                break;
            case "W":
                shift();
                _gclick(35 + 75.55 * 1, 960);
                break;
            case "E":
                shift();
                _gclick(35 + 75.55 * 2, 960);

                break;
            case "R":
                shift();
                _gclick(35 + 75.55 * 3, 960);
                break;
            case "T":
                shift();
                _gclick(35 + 75.55 * 4, 960);
                break;
            case "Y":
                shift();
                _gclick(35 + 75.55 * 5, 960);
                break;
            case "U":
                shift();
                _gclick(35 + 75.55 * 6, 960);
                break;
            case "I":
                shift();
                _gclick(35 + 75.55 * 7, 960);
                break;
            case "O":
                shift();
                _gclick(35 + 75.55 * 8, 960);
                break;
            case "P":
                shift();
                _gclick(35 + 75.55 * 9, 960);
                break;
            case "A":
                shift();
                _gclick(75, 1066);
                break;
            case "S":
                shift();
                _gclick(75 + 75.55 * 1, 1066);
                break;
            case "D":
                shift();
                _gclick(75 + 75.55 * 2, 1066);
                break;
            case "F":
                shift();
                _gclick(75 + 75.55 * 3, 1066);
                break;
            case "G":
                shift();
                _gclick(75 + 75.55 * 4, 1066);
                break;
            case "H":
                shift();
                _gclick(75 + 75.55 * 5, 1066);
                break;
            case "J":
                shift();
                _gclick(75 + 75.55 * 6, 1066);
                break;
            case "K":
                shift();
                _gclick(75 + 75.55 * 7, 1066);
                break;
            case "L":
                shift();
                _gclick(75 + 75.55 * 8, 1066);
                break;
            case "Z":
                shift();
                _gclick(150, 1177);
                break;
            case "X":
                shift();
                _gclick(150 + 75.55 * 1, 1177);
                break;
            case "C":
                shift();
                _gclick(150 + 75.55 * 2, 1177);
                break;
            case "V":
                shift();
                _gclick(150 + 75.55 * 3, 1177);
                break;
            case "B":
                shift();
                _gclick(150 + 75.55 * 4, 1177);
                break;
            case "N":
                shift();
                _gclick(150 + 75.55 * 5, 1177);
                break;
            case "M":
                shift();
                _gclick(150 + 75.55 * 6, 1177);
                break;

            case "0":
                numkey();
                _gclick(40 + 74.66 * 9, 965);
                numkey();
                break;
            case "1":
                numkey();
                _gclick(40, 965);
                numkey();
                break;
            case "2":
                numkey();
                _gclick(40 + 74.66 * 1, 965);
                numkey();
                break;
            case "3":
                numkey();
                _gclick(40 + 74.66 * 2, 965);
                numkey();
                break;
            case "4":
                numkey();
                _gclick(40 + 74.66 * 3, 965);
                numkey();
                break;
            case "5":
                numkey();
                _gclick(40 + 74.66 * 4, 965);
                numkey();
                break;
            case "6":
                numkey();
                _gclick(40 + 74.66 * 5, 965);
                numkey();
                break;
            case "7":
                numkey();
                _gclick(40 + 74.66 * 6, 965);
                numkey();
                break;
            case "8":
                numkey();
                _gclick(40 + 74.66 * 7, 965);
                numkey();
                break;
            case "9":
                numkey();
                _gclick(40 + 74.66 * 8, 965);
                numkey();
                break;
            case "@":
                numkey();
                _gclick(640, 1068);
                numkey();
                break;
            case ".":
                numkey();
                _gclick(163, 1178);
                numkey();
                break;
        }
    }
}

function _gokytuO(strText) {
    if (strText == "") return;
    if (intLog == 1) console.log("Go KT : " + strText);
    for (let i = 0; i < strText.length; i++) {
        switch (strText[i]) {
            case "q":
                _gclick(35, 960);
                break;
            case "w":
                _gclick(35 + 75.55 * 1, 960);
                break;
            case "e":
                _gclick(35 + 75.55 * 2, 960);
                break;
            case "r":
                _gclick(35 + 75.55 * 3, 960);
                break;
            case "t":
                _gclick(35 + 75.55 * 4, 960);
                break;
            case "y":
                _gclick(35 + 75.55 * 5, 960);
                break;
            case "u":
                _gclick(35 + 75.55 * 6, 960);
                break;
            case "i":
                _gclick(35 + 75.55 * 7, 960);
                break;
            case "o":
                _gclick(35 + 75.55 * 8, 960);
                break;
            case "p":
                _gclick(35 + 75.55 * 9, 960);
                break;
            case "a":
                _gclick(75, 1066);
                break;
            case "s":
                _gclick(75 + 75.55 * 1, 1066);
                break;
            case "d":
                _gclick(75 + 75.55 * 2, 1066);
                break;
            case "f":
                _gclick(75 + 75.55 * 3, 1066);
                break;
            case "g":
                _gclick(75 + 75.55 * 4, 1066);
                break;
            case "h":
                _gclick(75 + 75.55 * 5, 1066);
                break;
            case "j":
                _gclick(75 + 75.55 * 6, 1066);
                break;
            case "k":
                _gclick(75 + 75.55 * 7, 1066);
                break;
            case "l":
                _gclick(75 + 75.55 * 8, 1066);
                break;
            case "z":
                _gclick(150, 1177);
                break;
            case "x":
                _gclick(150 + 75.55 * 1, 1177);
                break;
            case "c":
                _gclick(150 + 75.55 * 2, 1177);
                break;
            case "v":
                _gclick(150 + 75.55 * 3, 1177);
                break;
            case "b":
                _gclick(150 + 75.55 * 4, 1177);
                break;
            case "n":
                _gclick(150 + 75.55 * 5, 1177);
                break;
            case "m":
                _gclick(150 + 75.55 * 6, 1177);
                break;

            case "Q":
                shift();
                _gclick(35, 960);
                break;
            case "W":
                shift();
                _gclick(35 + 75.55 * 1, 960);
                break;
            case "E":
                shift();
                _gclick(35 + 75.55 * 2, 960);

                break;
            case "R":
                shift();
                _gclick(35 + 75.55 * 3, 960);
                break;
            case "T":
                shift();
                _gclick(35 + 75.55 * 4, 960);
                break;
            case "Y":
                shift();
                _gclick(35 + 75.55 * 5, 960);
                break;
            case "U":
                shift();
                _gclick(35 + 75.55 * 6, 960);
                break;
            case "I":
                shift();
                _gclick(35 + 75.55 * 7, 960);
                break;
            case "O":
                shift();
                _gclick(35 + 75.55 * 8, 960);
                break;
            case "P":
                shift();
                _gclick(35 + 75.55 * 9, 960);
                break;
            case "A":
                shift();
                _gclick(75, 1066);
                break;
            case "S":
                shift();
                _gclick(75 + 75.55 * 1, 1066);
                break;
            case "D":
                shift();
                _gclick(75 + 75.55 * 2, 1066);
                break;
            case "F":
                shift();
                _gclick(75 + 75.55 * 3, 1066);
                break;
            case "G":
                shift();
                _gclick(75 + 75.55 * 4, 1066);
                break;
            case "H":
                shift();
                _gclick(75 + 75.55 * 5, 1066);
                break;
            case "J":
                shift();
                _gclick(75 + 75.55 * 6, 1066);
                break;
            case "K":
                shift();
                _gclick(75 + 75.55 * 7, 1066);
                break;
            case "L":
                shift();
                _gclick(75 + 75.55 * 8, 1066);
                break;
            case "Z":
                shift();
                _gclick(150, 1177);
                break;
            case "X":
                shift();
                _gclick(150 + 75.55 * 1, 1177);
                break;
            case "C":
                shift();
                _gclick(150 + 75.55 * 2, 1177);
                break;
            case "V":
                shift();
                _gclick(150 + 75.55 * 3, 1177);
                break;
            case "B":
                shift();
                _gclick(150 + 75.55 * 4, 1177);
                break;
            case "N":
                shift();
                _gclick(150 + 75.55 * 5, 1177);
                break;
            case "M":
                shift();
                _gclick(150 + 75.55 * 6, 1177);
                break;

            case "0":
                numkey();
                _gclick(40 + 74.66 * 9, 965);
                numkey();
                break;
            case "1":
                numkey();
                _gclick(40, 965);
                numkey();
                break;
            case "2":
                numkey();
                _gclick(40 + 74.66 * 1, 965);
                numkey();
                break;
            case "3":
                numkey();
                _gclick(40 + 74.66 * 2, 965);
                numkey();
                break;
            case "4":
                numkey();
                _gclick(40 + 74.66 * 3, 965);
                numkey();
                break;
            case "5":
                numkey();
                _gclick(40 + 74.66 * 4, 965);
                numkey();
                break;
            case "6":
                numkey();
                _gclick(40 + 74.66 * 5, 965);
                numkey();
                break;
            case "7":
                numkey();
                _gclick(40 + 74.66 * 6, 965);
                numkey();
                break;
            case "8":
                numkey();
                _gclick(40 + 74.66 * 7, 965);
                numkey();
                break;
            case "9":
                numkey();
                _gclick(40 + 74.66 * 8, 965);
                numkey();
                break;
            case "@":
                _gclick(425, 1288);
                break;
            case ".":
                _gclick(516, 1288);
                break;
        }
    }
}
function _gokytuM(strText) {
    if (strText == "") return;
    for (let i = 0; i < strText.length; i++) {
        switch (strText[i]) {
            case "q":
                _gclick(35, 960);
                break;
            case "w":
                _gclick(35 + 75.55 * 1, 960);
                break;
            case "e":
                _gclick(35 + 75.55 * 2, 960);
                break;
            case "r":
                _gclick(35 + 75.55 * 3, 960);
                break;
            case "t":
                _gclick(35 + 75.55 * 4, 960);
                break;
            case "y":
                _gclick(35 + 75.55 * 5, 960);
                break;
            case "u":
                _gclick(35 + 75.55 * 6, 960);
                break;
            case "i":
                _gclick(35 + 75.55 * 7, 960);
                break;
            case "o":
                _gclick(35 + 75.55 * 8, 960);
                break;
            case "p":
                _gclick(35 + 75.55 * 9, 960);
                break;
            case "a":
                _gclick(75, 1066);
                break;
            case "s":
                _gclick(75 + 75.55 * 1, 1066);
                break;
            case "d":
                _gclick(75 + 75.55 * 2, 1066);
                break;
            case "f":
                _gclick(75 + 75.55 * 3, 1066);
                break;
            case "g":
                _gclick(75 + 75.55 * 4, 1066);
                break;
            case "h":
                _gclick(75 + 75.55 * 5, 1066);
                break;
            case "j":
                _gclick(75 + 75.55 * 6, 1066);
                break;
            case "k":
                _gclick(75 + 75.55 * 7, 1066);
                break;
            case "l":
                _gclick(75 + 75.55 * 8, 1066);
                break;
            case "z":
                _gclick(150, 1177);
                break;
            case "x":
                _gclick(150 + 75.55 * 1, 1177);
                break;
            case "c":
                _gclick(150 + 75.55 * 2, 1177);
                break;
            case "v":
                _gclick(150 + 75.55 * 3, 1177);
                break;
            case "b":
                _gclick(150 + 75.55 * 4, 1177);
                break;
            case "n":
                _gclick(150 + 75.55 * 5, 1177);
                break;
            case "m":
                _gclick(150 + 75.55 * 6, 1177);
                break;

            case "Q":
                shift();
                _gclick(35, 960);
                break;
            case "W":
                shift();
                _gclick(35 + 75.55 * 1, 960);
                break;
            case "E":
                shift();
                _gclick(35 + 75.55 * 2, 960);

                break;
            case "R":
                shift();
                _gclick(35 + 75.55 * 3, 960);
                break;
            case "T":
                shift();
                _gclick(35 + 75.55 * 4, 960);
                break;
            case "Y":
                shift();
                _gclick(35 + 75.55 * 5, 960);
                break;
            case "U":
                shift();
                _gclick(35 + 75.55 * 6, 960);
                break;
            case "I":
                shift();
                _gclick(35 + 75.55 * 7, 960);
                break;
            case "O":
                shift();
                _gclick(35 + 75.55 * 8, 960);
                break;
            case "P":
                shift();
                _gclick(35 + 75.55 * 9, 960);
                break;
            case "A":
                shift();
                _gclick(75, 1066);
                break;
            case "S":
                shift();
                _gclick(75 + 75.55 * 1, 1066);
                break;
            case "D":
                shift();
                _gclick(75 + 75.55 * 2, 1066);
                break;
            case "F":
                shift();
                _gclick(75 + 75.55 * 3, 1066);
                break;
            case "G":
                shift();
                _gclick(75 + 75.55 * 4, 1066);
                break;
            case "H":
                shift();
                _gclick(75 + 75.55 * 5, 1066);
                break;
            case "J":
                shift();
                _gclick(75 + 75.55 * 6, 1066);
                break;
            case "K":
                shift();
                _gclick(75 + 75.55 * 7, 1066);
                break;
            case "L":
                shift();
                _gclick(75 + 75.55 * 8, 1066);
                break;
            case "Z":
                shift();
                _gclick(150, 1177);
                break;
            case "X":
                shift();
                _gclick(150 + 75.55 * 1, 1177);
                break;
            case "C":
                shift();
                _gclick(150 + 75.55 * 2, 1177);
                break;
            case "V":
                shift();
                _gclick(150 + 75.55 * 3, 1177);
                break;
            case "B":
                shift();
                _gclick(150 + 75.55 * 4, 1177);
                break;
            case "N":
                shift();
                _gclick(150 + 75.55 * 5, 1177);
                break;
            case "M":
                shift();
                _gclick(150 + 75.55 * 6, 1177);
                break;

            case "0":
                numkey();
                _gclick(40 + 74.66 * 9, 965);
                numkey();
                break;
            case "1":
                numkey();
                _gclick(40, 965);
                numkey();
                break;
            case "2":
                numkey();
                _gclick(40 + 74.66 * 1, 965);
                numkey();
                break;
            case "3":
                numkey();
                _gclick(40 + 74.66 * 2, 965);
                numkey();
                break;
            case "4":
                numkey();
                _gclick(40 + 74.66 * 3, 965);
                numkey();
                break;
            case "5":
                numkey();
                _gclick(40 + 74.66 * 4, 965);
                numkey();
                break;
            case "6":
                numkey();
                _gclick(40 + 74.66 * 5, 965);
                numkey();
                break;
            case "7":
                numkey();
                _gclick(40 + 74.66 * 6, 965);
                numkey();
                break;
            case "8":
                numkey();
                _gclick(40 + 74.66 * 7, 965);
                numkey();
                break;
            case "9":
                numkey();
                _gclick(40 + 74.66 * 8, 965);
                numkey();
                break;
            case "@":
                _gclick(420, 1283);
                break;
            case ".":
                _gclick(514, 1283);
                break;
            case "+":
                numkey();
                _gclick(575, 1177);
                numkey();
                break;
        }
    }
}
function numkey() {
    _gclick(45, 1289);
    usleep(300000);
}
function shift() {
    _Click(46, 1177);
    usleep(120000);
}

function _gokytuN(strText) {
    if (strText == "") return;
    for (let i = 0; i < strText.length; i++) {
        switch (strText[i]) {
            case "0":
                _gclick(375, 1280);
                break;
            case "1":
                _gclick(127, 960);
                break;
            case "2":
                _gclick(374, 960);
                break;
            case "3":
                _gclick(625, 960);
                break;
            case "4":
                _gclick(127, 1066);
                break;
            case "5":
                _gclick(374, 1066);
                break;
            case "6":
                _gclick(625, 1066);
                break;
            case "7":
                _gclick(127, 1174);
                break;
            case "8":
                _gclick(374, 1174);
                break;
            case "9":
                _gclick(625, 1174);
                break;
        }
    }
}

function _gokytuS(strText) {
    if (strText == "") return;
    if (strText[0] == "0") _Click(51, 1283);
    for (let i = 0; i < strText.length; i++) {
        switch (strText[i]) {
            case "0":
                _gclick(715, 960);
                break;
            case "1":
                _gclick(40, 960);
                break;
            case "2":
                _gclick(113, 960);
                break;
            case "3":
                _gclick(180, 960);
                break;
            case "4":
                _gclick(260, 960);
                break;
            case "5":
                _gclick(340, 960);
                break;
            case "6":
                _gclick(420, 960);
                break;
            case "7":
                _gclick(490, 960);
                break;
            case "8":
                _gclick(567, 960);
                break;
            case "9":
                _gclick(640, 960);
                break;
            case "+":
                _Click(51, 1280);
                _Click(51, 1180);
                _gclick(639, 960);
                _Click(51, 1180);
                break;
        }
    }
}
function _gokytuP(strText) {
    if (strText == "") return;
    for (let i = 0; i < strText.length; i++) {
        switch (strText[i]) {
            case "+":
                numkey();
                _gclick(375, 1280);
                break;
            case "0":
                _gclick(375, 1280);
                break;
            case "1":
                _gclick(127, 960);
                break;
            case "2":
                _gclick(374, 960);
                break;
            case "3":
                _gclick(625, 960);
                break;
            case "4":
                _gclick(127, 1066);
                break;
            case "5":
                _gclick(374, 1066);
                break;
            case "6":
                _gclick(625, 1066);
                break;
            case "7":
                _gclick(127, 1174);
                break;
            case "8":
                _gclick(374, 1174);
                break;
            case "9":
                _gclick(625, 1174);
                break;
        }
    }
}

function _checkLogin(intTime) {
    let tg = _currentTime();
    let y = 0;
    while (1) {
        y = waitImage(imgLuu1, 1, "top");
        if (y != 0) {
            _Click(380, 1062); //Luu
        }
        if (waitImage(imgSDT, 1, "bottom") != 0) {
            return 283;
        }

        if (_inArray(_gcl(56, 92), [660247]) && _inArray(_gcl(202, 457), [25824])) {
            _Click(370, 450);
            _sleep(1);
            //Dam bao thiet bi
        }
        if (
            _gcl(43, 79) == 526345 &&
            _gcl(43, 92) == 526345 &&
            _gcl(43, 105) == 526345
        )
            return 1;

        if (
            _inArray(_gcl(88, 201), [1846067]) &&
            _inArray(_gcl(230, 1070), [25824])
        ) {
            _Click(375, 1070);
            //Luu
            usleep(1000000);
        }

        if (
            _inArray(_gcl(411, 195), [1537777]) &&
            _inArray(_gcl(328, 159), [7714559])
        ) {
            _Click(375, 1280);
            //Xong (chua co goi y ket ban nao)
            usleep(1000000);
        }

        if (
            _inArray(_gcl(352, 1257), [526345]) &&
            _inArray(_gcl(385, 1271), [526345])
        ) {
            _Click(375, 1270);
            //Bo qua (Ban co muon them so di dong)
            usleep(1000000);
        }
        if (
            _inArray(_gcl(175, 830), [31487]) &&
            _inArray(_gcl(239, 830), [31487])
        ) {
            _Click(239, 830);
            //Luc khac (Dich vu vi tri)
            usleep(1000000);
        }
        if (
            _inArray(_gcl(372, 280), [1925934]) &&
            _inArray(_gcl(206, 1270), [550655])
        ) {
            _Click(400, 1270);
            //Bo qua (Dich vu vi tri)
            usleep(1000000);
        }

        if (
            _inArray(_gcl(165, 1267), [14869993]) &&
            _inArray(_gcl(206, 186), [526345])
        ) {
            _Click(400, 1270);
            //Bo qua (cho phep truy cap danh ba)
            usleep(1000000);
        }

        if (
            _inArray(_gcl(63, 1209), [550655]) &&
            _inArray(_gcl(408, 331), [1537777, 1406712])
        ) {
            _Click(380, 1209);
            usleep(1000000);
        }
        if (
            _inArray(_gcl(142, 818), [31487]) &&
            _inArray(_gcl(614, 818), [31487])
        ) {
            _Click(400, 815);
            //Yeu cau k theo doi
            usleep(1000000);
        }

        if (
            _inArray(_gcl(231, 322), [7780095]) &&
            _inArray(_gcl(231, 1264), [550655])
        ) {
            _Click(312, 1264);
            usleep(1000000);
        }

        if (
            getColor(116, 1125)[0][0] == 550655 &&
            getColor(116, 1217)[0][0] == 14869993
        ) {
            _Click(380, 1217);
            _sleep(2);
            _Click(507, 845);
            usleep(1000000);
        }

        if (waitImage(imgKhangNghi, 1, "bottom") != 0) {
            return 282;
        }
        if (waitImage(imgKhangNghiTiepTuc, 1, "bottom") != 0) {
            return 2822;
        }
        if (
            _inArray(_gcl(220, 1068), [25824]) &&
            _inArray(_gcl(373, 1177), [660247, 1846067])
        ) {
            //luu
            _Click(370, 1070);
            usleep(1000000);
        }
        openURL("fb://feed");
        usleep(2000000);

        if (
            _inArray(550655, [
                _gcl(148, 90),
                _gcl(172, 90),
            ]) /*&& _gcl(689, 80) == 526345*/
        )
            return 2;
        if (_timeStart(tg) > intTime) return 0;
    }
}

function _logFace(strPhone, strPass) {
    let iCheck;

    iCheck = openFb(1, "4G");
    if (iCheck == 0) return 0;

    // Trường hợp đặc biệt: Nếu phát hiện bảng tham gia Facebook, xử lý login UID/pass tại vị trí riêng biệt
    if (waitImage(imgThamGiaFacebook, 1, "center") != 0) {
        toast("📋 Đang ở giao diện Tham gia Facebook - login UID/pass", "center", 2);

        toast("📱 Nhập UID: " + strPhone, "top", 2);
        _filluid(strPhone);
        usleep(500000);

        _Click(401, 701); // Click vào ô nhập mật khẩu
        usleep(500000);

        toast("🔐 Nhập mật khẩu...", "top", 2);
        _gokytuM(strPass);
        usleep(500000);

        _Click(401, 791); // Click nút Đăng nhập
        toast("⏳ Đã bấm đăng nhập, chờ phản hồi...", "center", 2);
        _sleep(15);

        return;
    }

    // Trường hợp thông thường (giữ logic cũ)
    iCheck = tapUntil(400, 500, 706, 1175, [0], 30, 3); // Vùng đăng nhập
    if (iCheck == 0) return 0;

    toast("📱 Nhập SĐT: " + strPhone, "top", 2);
    _filluid(strPhone);
    usleep(500000);

    _Click(400, 530); // Chuyển qua nhập mật khẩu
    usleep(500000);

    toast("🔐 Nhập mật khẩu...", "top", 2);
    _gokytuM(strPass);
    usleep(500000);

    _Click(400, 670); // Bấm nút Đăng nhập
    toast("⏳ Đã bấm đăng nhập, chờ phản hồi...", "center", 2);
    _sleep(15);
}


function _filluid(uid) {
    numkey();
    for (let i = 0; i < uid.length; i++) {
        switch (uid[i]) {
            case "0":
                _gclick(40 + 74.66 * 9, 965);
                break;
            case "1":
                _gclick(40, 965);
                break;
            case "2":
                _gclick(40 + 74.66 * 1, 965);
                break;
            case "3":
                _gclick(40 + 74.66 * 2, 965);
                break;
            case "4":
                _gclick(40 + 74.66 * 3, 965);
                break;
            case "5":
                _gclick(40 + 74.66 * 4, 965);
                break;
            case "6":
                _gclick(40 + 74.66 * 5, 965);
                break;
            case "7":
                _gclick(40 + 74.66 * 6, 965);
                break;
            case "8":
                _gclick(40 + 74.66 * 7, 965);
                break;
            case "9":
                _gclick(40 + 74.66 * 8, 965);
                break;
        }
    }
    numkey();
}

function _logMess() {
    _Click(689, 92);
    let tg = _currentTime();
    while (1) {
        _gcl(225, 1120); //28918
        if (_inArray(_gcl(225, 1120), [28918])) {
            _Click(400, 1120);
            usleep(1000000);
        }

        if (_inArray(_gcl(225, 1070), [25824])) {
            _Click(400, 1070);
            usleep(1000000);
        }

        if (_inArray(_gcl(225, 1070), [25824])) break;
        if (_timeStart(tg) > 15) break;
    }

    _sleep(3);
    appActivate(bdlFace);
    _sleep(2);
}

function _gcl(x, y) {
    let kq = getColor(x, y)[0][0];
    if (intLog == 1) console.log(x + " " + y + " : " + kq);
    return kq;
}
function _closeTabMess(maxTime) {
    let tg = _currentTime();

    while (1) {
        if (
            _inArray(getColor(311, 1177)[0][0], [1846067]) &&
            _inArray(getColor(391, 1177)[0][0], [1846067]) &&
            _inArray(getColor(194, 1063)[0][0], [25824])
        )
            _Click(350, 1072); //Luu
        if (
            _inArray(getColor(148, 483)[0][0], [0]) &&
            _inArray(getColor(599, 483)[0][0], [0]) &&
            _inArray(getColor(237, 1256)[0][0], [25824, 28918])
        )
            _Click(350, 1255); //TiepTuc

        if (
            _inArray(_gcl(46, 483), [0]) &&
            _inArray(_gcl(321, 483), [0]) &&
            _inArray(_gcl(712, 1159), [25824, 28918])
        ) {
            _Click(350, 1160); //Tao ma Pin
            _sleep(2);
            _gokytuP("123123");
            _sleep(1);
            _gokytuP("123123");
        }

        if (
            _inArray(_gcl(85, 468), [2960685]) &&
            _inArray(_gcl(333, 468), [3552822]) &&
            _inArray(_gcl(596, 468), [0])
        ) {
            _Click(378, 1160); //Khoi phuc ngay
            _sleep(2);
            _gokytuP("123123");
        }

        if (
            _inArray(_gcl(61, 461), [0]) &&
            _inArray(_gcl(271, 461), [0]) &&
            _inArray(_gcl(670, 461), [0])
        ) {
            _gokytuP("123123");
            _sleep(2);
        }

        if (
            _inArray(_gcl(292, 818), [12047863]) &&
            _inArray(_gcl(488, 818), [32511]) &&
            _inArray(_gcl(364, 908), [32511])
        ) {
            _Click(379, 907);
            return 0;
        }

        if (_inArray(getColor(67, 70)[0][0], [28918])) return 1;
        usleep(1000000);
        if (_timeStart(tg) > maxTime) return 0;
    }
}

function _loginMess(uid, pass) {
    let iCheck = 0;
    iCheck = tapUntil(377, 504, 706, 1175, [0], 30, 2);
    if (iCheck == 0) return 0;
    _filluid(uid);
    _sleep(1);
    _Click(350, 541);
    _gokytu(pass);
    _Click(350, 670);
    iCheck = _closeTabMess(90);
    return iCheck;
}

function _regAcc(intI, strMode) {

    let tg;

    let iCheck = 0;
    let c = [6122619, 13423579];

    iCheck = _reset(strMode);
    if (iCheck == 0) return 0;

    iCheck = openFb(1, strMode);
    if (iCheck == 0) return 0;

    tg = _currentTime();
    while (1) {
        let imgThamGiaFB = waitImage(imgThamGiaFacebook, 2, "top");

        if (imgThamGiaFB != 0) {
            toast("⚠️ Giao diện Tham gia Facebook hiện ra", "center", 2);

            if (icheck != 998) {
                // ✅ REG nick mới: chỉ nhấn Tôi đã có tài khoản
                if (waitImage(imgDaCoTaiKhoan, 2, "bottom") != 0) {
                    toast("🟢 REG: Nhấn Tôi đã có tài khoản", "bottom", 2);
                    _Click(375, 1240);
                    usleep(2000000);
                }
            }
        }


        // ✅ Nếu không có bảng tham gia Facebook → xử lý như thường
        if (batdau == 0) break;

        _Click(365, 1160);
        _sleep(1);

        // Các điều kiện thoát tiếp theo
        if (
            _gcl(265, 763) == 25824 &&
            !_inArray(_gcl(329, 1128), [25824]) &&
            !_inArray(_gcl(329, 1114), [25824])
        ) break;

        if (
            _gcl(362, 546) == 14498366 &&
            _gcl(170, 1065) == 25824 &&
            _gcl(360, 1134) == 13423579
        ) {
            batdau = 0;
            _Click(370, 1066);
        }

        if (
            _gcl(370, 780) == 13423579 &&
            _gcl(370, 866) == 13423579 &&
            _gcl(370, 892) == 13423579
        ) {
            batdau = 0;
            _Click(370, 830);
        }

        if (_gcl(399, 884) == 13423579 && _gcl(170, 823) == 25824) {
            batdau = 0;
            _Click(370, 930);
        }

        if (_timeStart(tg) > 30) return 0;
    }


    _sleep(1);
    if (batdau) _Click(369, 761); // Bắt đầu

    tg = _currentTime();
    while (1) {
        if (_inArray(_gcl(407, 780), c) && _inArray(_gcl(407, 892), c))
            _Click(386, 824);
        if (_inArray(_gcl(243, 308), c)) break;
        if (_inArray(_gcl(95, 382), [16777215])) break;
        usleep(1000000);
        if (_timeStart(tg) > 30) return 0;
        tapUntil(80, 365, 706, 1175, [0], 2, 2); //click vao Ho va doi ban phim hien ra
    }

    _sleep(3);
    _gokytu(
        _readFileLine(pathLastname, 1 + _ranInt(_fileCountLine(pathLastname)))
    );
    _Click(556, 365);
    _waitPixel(706, 1175, 0, 30);
    _sleep(1);
    _gokytu(
        _readFileLine(pathFirstname, 1 + _ranInt(_fileCountLine(pathFirstname)))
    );
    _Click(405, 510 + y);
    tg = _currentTime();
    while (1) {
        iCheck = waitImage(imgNgaysinh, 2, "center");

        if (iCheck != 0) break;

        if (getColor(254, 587 + y)[0][0] == 25824) break;

        if (getColor(306, 365 + y)[0][0] == 13109800) {
            _Click(377, 763 + y);
            _sleep(2);
            _gokytu(
                _readFileLine(pathLastname, 1 + _ranInt(_fileCountLine(pathLastname)))
            );
            _sleep(1);
            _Click(405, 510 + y);
        }
        if (_timeStart(tg) > 30) break;
    }

    usleep(1000000);

    tg = _currentTime();
    while (1) {
        _Click(391, 597 + y);
        _sleep(1);
        if (_inArray(getColor(329, 391 + y)[0][0], [13176364, 13833266, 13109800]))
            break;
        if (_inArray(getColor(329, 394 + y)[0][0], [13176364, 13833266, 13109800]))
            break;

        if (_timeStart(tg) > 30) return 0;
    }
    usleep(1000000);

    _Click(405, 680 + y); //tiep 2
    usleep(2000000);

    let age = _ranbw(18, 30) + "";
    tapUntil(300, 300 + y, 630, 1280, [0], 30, 2); //click tuoi

    _gokytuN(age);

    usleep(1000000);
    _Click(378, 454 + y);

    tg = _currentTime();
    while (1) {
        if (_inArray(getColor(517, 809)[0][0], [32511, 31487])) break;
        usleep(1000000);
        if (_timeStart(tg) > 60) return 0;
    }

    usleep(1000000);
    _Click(517, 809); //ok
    let gt = 1;
    if (gt % 2 == 1) {
        iCheck = tapUntil(658, 405 + y, 658, 405 + y, [25824], 30);
        if (iCheck == 0) return 0;
    } else {
        iCheck = tapUntil(658, 515 + y, 658, 515 + y, [25824], 30);
        if (iCheck == 0) return 0;
    }
    _Click(385, 846 + y); //tiep

    tg = _currentTime();
    let kt = 0;
    while (1) {
        if (_inArray(getColor(345, 390)[0][0], [6122619, 6781066])) break;
        if (_inArray(13357785, [getColor(345, 455)[0][0], getColor(345, 454)[0][0]])) { _sleep(1); _Click(400, 517); kt = 1; break; }
        if (_inArray(getColor(345, 454)[0][0], [6781066, 6912652])) { _sleep(1); _Click(400, 517); kt = 1; break; }
        if (_gcl(209, 807) == 660247 && _gcl(313, 796) == 660247 && _gcl(498, 797) == 1055004) { _Click(370, 806); }
        tapUntil(300, 450 + y, 630, 1280, [0], 1, 2);
        if (getColor(330, 645)[0][0] == 186 && getColor(330, 645)[0][1] == 192 && getColor(330, 645)[0][2] == 199) {
            if (waitImage(imgDangKySDT, 3, "center") != 0) { _Click(375, 805); usleep(2000000); }
        }
    }
    usleep(1000000);
    let phone = genPhone(dauso[intI]);
    _gokytuP(phone);
    usleep(1000000);
    if (kt == 0) _Click(378, 700);
    else _Click(400, 760);
    _sleep(1);
    tg = _currentTime();
    let y1 = 350;

    while (1) {
        if (_gcl(364, 813) == 15856887 && _gcl(309, 912) == 660247) { _Click(370, 813); usleep(1000000); }
        if (_gcl(263, 985) == 660247 && _gcl(397, 985) == 660247 && _gcl(465, 985) == 660247) { _Click(370, 985); usleep(1000000); }
        if (_inArray(_gcl(661, 446), [13109800, 13832496])) {
            while (1) {
                _Click(400, 446); for (let i = 0; i < 15; i++) { _gclick(630, 1275); usleep(30000); }
                phone = genPhone(dauso[intI]); _gokytuP(phone);
                if (kt == 0) _Click(378, 700); else _Click(400, 760);
                _sleep(2); if (!_inArray(_gcl(661, 446), [13109800, 13832496])) break;
            }
        }
        if (_inArray(_gcl(314, 456), [13109800, 13832496])) {
            while (1) {
                _Click(400, 530); for (let i = 0; i < 15; i++) { _gclick(630, 1275); usleep(30000); }
                phone = genPhone(dauso[intI]); _gokytuP(phone);
                if (kt == 0) _Click(378, 700); else _Click(400, 760);
                _sleep(2); if (!_inArray(_gcl(314, 456), [13109800, 13832496])) break;
            }
        }
        if (_inArray(getColor(410, y1)[0][0], [6781066, 13357785, 6122619, 14541544])) break;
        if (_inArray(getColor(144, 815)[0][0], [25824, 550655, 31487])) {
            tapUntil(400, 930, 410, 350, [6781066, 13357785, 6122619], 5, 2);
            tapUntil(80, 400, 706, 1175, [0], 2, 2);
            _sleep(2); break;
        }
        if (_inArray(1846067, [getColor(49, 176)[0][0], getColor(87, 176)[0][0]])) { _Click(383, 611); _sleep(2); }
        if (_inArray(_gcl(55, 414), [660247, 1382942])) { _Click(383, 926); _sleep(2); }
        if (waitImage(imgThietBiOGan, 1, "bottom")) { _Click(350, 1150); usleep(1000000); }
        if (waitImage(imgPhoneCheckAgant, 1, "center") != 0) return 0;
        if (waitImage(imgPhoneCheckVery, 1, "center") != 0) return 0;
        if (_timeStart(tg) > 30) return 0;
    }

    _waitPixelArr(200, y1, [6781066, 13357785, 6122619, 14541544], time30);
    tapUntil(80, 400, 706, 1175, [0], 2, 2);
    passToSave = myPassword + _randPass(4);
    _gokytu(passToSave);
    _Click(385, 531);
    let cBlue = [15529467, 25824, 31487, 26073];
    tg = _currentTime();
    while (1) { if (_inArray(_gcl(170, 400), cBlue)) break; _sleep(1, "doi luu"); if (_timeStart(tg) > 60) return 0; }
    tg = _currentTime();
    while (_inArray(_gcl(170, 400), cBlue)) { _Click(370, 515); _sleep(1, "click luu"); if (_timeStart(tg) > 60) return 0; }
    while (!_inArray(_gcl(150, 1160), cBlue)) { _sleep(1, "dong y"); }


    tg = _currentTime();
    while (_inArray(_gcl(150, 1160), cBlue)) {
        _Click(370, 1160);
        usleep(2000000);
        if (_timeStart(tg) > 60) return 0;
    }

    // Logic kiểm tra kết quả cuối cùng
    toast("Đang chờ kết quả sau khi đăng ký...", "bottom", 2);
    let tg_ketqua = _currentTime();
    let regSuccess = false;
    let pathImg = rootDir() + "/Facebook/data/imgKhongGuiLaiMa.png";

    let opt = {
        targetImagePath: pathImg,
        count: 1,
        threshold: 0.88,
        region: null,
        debug: false,
        method: 1,
    };

    while (_timeStart(tg_ketqua) < 30) {
        toast("Kiểm tra kết quả... " + _timeStart(tg_ketqua) + "/30s", "bottom", 1);

        // 1. Check ảnh KHÔNG GỬI LẠI MÃ
        let result1 = findImage(opt);
        if (result1[0] && result1[0].length > 0) {
            toast("✅ Reg NVR thành công! Đã tới màn hình KHÔNG GỬI LẠI MÃ.", "bottom", 3);
            regSuccess = true;
            break;
        }

        // 2. Nếu có popup → đóng và thử lại tìm ảnh
        if (_inArray(getColor(370, 150)[0][0], [0x666666])) {
            toast("⚠️ Popup đang che - thử đóng", "bottom", 1);
            _Click(370, 150);
            usleep(1000000);

            let result2 = findImage(opt);
            if (result2[0] && result2[0].length > 0) {
                toast("✅ Ảnh hiện ra sau khi đóng popup!", "bottom", 3);
                regSuccess = true;
                break;
            }
        }

        // 3. Check die / checkpoint
        if (_checkDie(1) == 1) {
            toast("❌ Bị checkpoint/die sau khi đăng ký.", "bottom", 3);
            upSite(kho2);
            return 0;
        }

        usleep(1000000);
    }

    // ⚙️ Sau khi thoát vòng lặp
    if (regSuccess) {
        upSite(kho1);
        return 1;
    } else {
        toast("❌ Timeout - Không rõ kết quả sau khi đăng ký.", "bottom", 3);
        upSite(kho2);
        return 0;
    }

}

function _inArray(intI, arrCheck) {
    let kq = false;
    for (let i = 0; i < arrCheck.length; i++) {
        if (intI === arrCheck[i]) return true;
    }
    return kq;
}

function _sleep(intSec, line = "") {
    for (let i = 0; i < intSec; i++) {
        toast("Sleeping..." + line + " : " + i + "/" + intSec, 1);
        usleep(1000000);
    }
}
function _watchVideo(intTime) {
    openURL("fb://notifications");
    _sleep(3);
    _Click(357, 269);
    _sleep(2);

    openURL("fb://feed");
    swiDown();
    _sleep(5);
    swiDown();
    _sleep(3);

    openURL("fb://watch/");
    _sleep(3);
    _Click(300, 500);
    let tg = _currentTime();
    while (1) {
        swiUp();
        _sleep(_ranbw(60, 120));
        if (_timeStart(tg) > intTime) return;
    }

    swiUp();
    _sleep(_ranbw(15, 30));
}

function getOption(intTime) {
    let tg = _currentTime();

    while (1) {
        toast("GetOption : " + _timeStart(tg) + "/" + intTime, 1);
        //13109800, 13176364,6122619,14541544
        if (
            _inArray(
                getColor(366, 350 + y)[0][0],
                [13357785, 6781066, 13109800, 13176364, 6122619, 14541544]
            )
        )
            return 1;
        if (
            _inArray(
                getColor(366, 351 + y)[0][0],
                [13357785, 6781066, 13109800, 13176364, 6122619, 14541544]
            )
        )
            return 1;
        if (
            _inArray(
                getColor(366, 390 + y)[0][0],
                [13357785, 6781066, 13109800, 13176364, 6122619, 14541544]
            )
        )
            return 1;
        if (
            _inArray(
                getColor(366, 414)[0][0],
                [13357785, 6781066, 13109800, 13176364, 6122619, 14541544]
            )
        )
            return 2;
        usleep(500000);

        if (_timeStart(tg) > intTime) return 0;
    }
}

function log(s) {
    console.log(s);
}
function _checkDie(intTime) {
    let iCheck = 0;
    let tg = _currentTime();
    let s11 = 0;
    let s18 = 0;
    let s3 = 0;
    while (1) {
        iCheck = waitImage(imgThongTin, 1, "bottom");
        if (iCheck != 0) return 1;

        iCheck = waitImage(imgChungtoi, 1, "bottom");
        if (iCheck != 0) return 1;
        iCheck = waitImage(imgKhangNghi, 1, "bottom");
        if (iCheck != 0) return 1;
        iCheck = waitImage(imgKhangNghiTiepTuc, 1, "bottom");
        if (iCheck != 0) return 1;

        //console.log(getColor(160 ,1227)[0][0] + ' ' + getColor(375,1227)[0][0] + ' ' + getColor(579,1227))
        if (_inArray(_gcl(56, 92), [660247]) && _inArray(_gcl(202, 457), [25824])) {
            _Click(370, 450);
            _sleep(1);
            //Dam bao thiet bi
        }

        //Tiep tuc & Whatapp
        if (_gcl(364, 813) == 15856887 && _gcl(309, 912) == 660247) {
            _Click(370, 813);
            usleep(1000000);
        }
        //Whatapp && Gui ma qua SMS
        if (
            _gcl(263, 985) == 660247 &&
            _gcl(397, 985) == 660247 &&
            _gcl(465, 985) == 660247
        ) {
            _Click(370, 985);
            usleep(1000000);
        }
        if (
            _inArray(getColor(242, 840)[0][0], [1846067]) &&
            _inArray(getColor(332, 840)[0][0], [1846067]) &&
            _inArray(getColor(448, 840)[0][0], [1846067])
        ) {
            _Click(400, 845);
            if (intLog == 1) log("s1");
        }

        if (
            _inArray(getColor(382, 864)[0][0], [31487]) &&
            getColor(159, 526)[0][0] == 0 &&
            getColor(591, 526)[0][0] == 0
        ) {
            _Click(382, 864);
            if (intLog == 1) log("s2");
            return 1;
        }

        if (
            getColor(159, 1227)[0][0] == 1846067 &&
            getColor(375, 1227)[0][0] == 1846067 &&
            getColor(598, 1227)[0][0] == 1846067
        ) {
            if (intLog == 1) log("s3");
            _Click(372, 1227);
        }
        if (
            getColor(160, 1227)[0][0] == 660247 &&
            getColor(368, 1227)[0][0] == 660247 &&
            getColor(579, 1227)[0][0] == 660247
        ) {
            if (intLog == 1) log("s4");
            _Click(372, 1227);
        }

        if (
            getColor(190, 845)[0][0] == 1846067 &&
            getColor(306, 845)[0][0] == 1846067 &&
            getColor(559, 845)[0][0] == 1846067
        ) {
            if (intLog == 1) log("s5");
            _Click(372, 840);
        }

        // Kiểm tra nếu chưa vào newsfeed Facebook thì mới click "Tôi không nhận được mã"
        // doan nay sua ben chagpt
        if (
            getColor(190, 1037)[0][0] == 1846067 &&
            getColor(306, 1037)[0][0] == 1846067 &&
            getColor(559, 1037)[0][0] == 1846067 &&
            !_vaoNewsfeed()
        ) {
            if (intLog == 1) log("s6");
            _Click(372, 1037);
        }


        if (
            getColor(179, 484)[0][0] == 1842721 &&
            getColor(564, 484)[0][0] == 1842721 &&
            getColor(381, 720)[0][0] == 1603570
        )
            return 1; //Sai thong tin dang nhap

        if (_inArray(getColor(56, 414)[0][0], [1846067])) {
            _Click(56, 414);
        }

        if (_inArray(getColor(642, 519)[0][0], [4610665])) {
            if (intLog == 1) log("s7");
            _Click(400, 730);
            _sleep(1);
            _Click(400, 840);
        }
        if (_inArray(getColor(642, 519)[0][0], [3095621, 4610665])) {
            if (intLog == 1) log("s8");
            _Click(400, 1227);
        }

        //3095621
        if (_inArray(_gcl(663, 400), [25824, 31487])) {
            if (intLog == 1) log("s9");
            _sleep(1);
            _Click(663, 517);
            _sleep(1);
            _Click(382, 689); //tiep tuc
            _sleep(1);
        }

        if (
            _inArray(_gcl(663, 517), [25824, 31487]) &&
            !_inArray(_gcl(366, 350), [13357785, 6781066])
        ) {
            if (intLog == 1) log("s9b");
            _Click(382, 689); //tiep tuc
            _sleep(1);
        }

        if (_inArray(_gcl(642, 524), [6122619])) {
            //6122619
            _Click(400, 1227);
            _sleep(1);
            _Click(400, 736);
        }

        if (_inArray(_gcl(642, 523), [6122619])) {
            //6122619
            _Click(400, 1227);
            _sleep(1);
            _Click(400, 741);
        }

        if (
            getColor(145, 394)[0][0] == 526345 &&
            getColor(203, 394)[0][0] == 526345 &&
            getColor(272, 394)[0][0] == 526345
        )
            return 1;
        //14541544
        if (
            _inArray(
                _gcl(366, 390),
                [13357785, 6781066, 13109800, 13176364, 6122619, 14541544]
            )
        )
            return 0;
        if (
            _inArray(
                _gcl(366, 350),
                [13357785, 6781066, 13109800, 13176364, 6122619, 14541544]
            )
        )
            return 0;
        if (
            _inArray(
                _gcl(366, 351),
                [13357785, 6781066, 13109800, 13176364, 6122619, 14541544]
            )
        )
            return 0;
        if (
            _inArray(
                _gcl(366, 414),
                [13357785, 6781066, 13109800, 13176364, 6122619, 14541544]
            )
        )
            return 0;

        if (
            _inArray(getColor(59, 92)[0][0], [1846067, 16447736]) &&
            getColor(152, 492)[0][0] == 25824 &&
            getColor(372, 489)[0][0] == 16777215
        ) {
            if (intLog == 1) log("s10");
            _Click(400, 470);
        }

        if (
            _inArray(getColor(56, 92)[0][0], [1846067, 16447736]) &&
            getColor(152, 492)[0][0] == 25824 &&
            getColor(372, 489)[0][0] == 16777215
        ) {
            if (intLog == 1) log("s11");
            _Click(400, 480);
            s11 = 1;
        }

        if (
            _inArray(getColor(56, 92)[0][0], [1846067, 16447736]) &&
            getColor(146, 450)[0][0] == 25824 &&
            getColor(374, 449)[0][0] == 16777215
        ) {
            if (intLog == 1) log("s12");
            _Click(400, 453);
        }

        if (
            _inArray(getColor(59, 92)[0][0], [1846067, 16447736]) &&
            getColor(152, 492)[0][0] == 25824
        ) {
            if (intLog == 1) log("s13");
            _Click(400, 877);
        }

        if (_inArray(getColor(269, 560)[0][0], [13357785, 6781066]) && s11 == 0) {
            //kohong tao tai khoan moi
            if (intLog == 1) log("s14");
            _Click(400, 606);
        }
        if (_inArray(getColor(269, 564)[0][0], [13357785, 6781066, 13423579])) {
            //kohong tao tai khoan moi
            if (intLog == 1) log("s15");
            _Click(400, 606);
        }
        if (_inArray(getColor(269, 503)[0][0], [13357785, 6781066, 13423579])) {
            //kohong tao tai khoan moi
            if (intLog == 1) log("06032025");
            _Click(400, 550);
        }
        if (_inArray(getColor(269, 402)[0][0], [13357785, 6781066, 13423579])) {
            //kohong tao tai khoan moi
            if (intLog == 1) log("06032025");
            _Click(400, 450);
        }
        if (
            getColor(206, 999)[0][0] == 660247 &&
            getColor(364, 999)[0][0] == 660247 &&
            getColor(544, 999)[0][0] == 660247
        ) {
            if (intLog == 1) log("s16");
            _Click(390, 1000);
        }
        //if (iCheck != 0) return 1;

        if (
            _inArray(_gcl(674, 532), [4610665]) &&
            _inArray(_gcl(674, 700), [4610665]) &&
            _inArray(_gcl(382, 1039), [13357785])
        ) {
            s18 = 1;
            if (intLog == 1) log("s17a");
            _Click(400, 999);
            _sleep(1);
        }

        if (
            _inArray(_gcl(674, 532), [4610665]) &&
            _inArray(_gcl(674, 700), [4610665]) &&
            (_gcl(674, 869) != 4610665) & (s18 == 0)
        ) {
            if (intLog == 1) log("s17");
            _Click(400, 999);
            _sleep(1);
            _Click(400, 888);
            _sleep(1);
            _Click(400, 1220);
        }

        if (
            _inArray(_gcl(674, 536), [6122619]) &&
            _inArray(_gcl(674, 704), [6122619]) &&
            _gcl(674, 873) == 6122619 &&
            _gcl(674, 1042) != 6122619
        ) {
            if (intLog == 1) log("s17bb");
            _Click(400, 1053);
            _sleep(1);
        }

        if (
            _inArray(_gcl(674, 536), [6122619]) &&
            _inArray(_gcl(674, 704), [6122619]) &&
            _gcl(674, 873) == 6122619 &&
            _gcl(674, 1042) == 6122619
        ) {
            if (intLog == 1) log("s17bbb");
            _Click(400, 1220);
            _sleep(1);
        }

        if (
            _inArray(_gcl(674, 536), [6122619]) &&
            _inArray(_gcl(674, 704), [6122619]) &&
            _gcl(674, 873) != 6122619
        ) {
            if (intLog == 1) log("s17b");
            _Click(400, 999);
            _sleep(1);
            _Click(400, 888);
            _sleep(1);
            _Click(400, 1220);
        }
        if (
            _inArray(_gcl(674, 532), [4610665]) &&
            _inArray(_gcl(674, 700), [4610665]) &&
            _inArray(_gcl(674, 869), [4610665]) &&
            _inArray(_gcl(400, 1208), [13357785])
        ) {
            _Click(400, 1160);
            s3 = 1;
        }

        if (
            _inArray(_gcl(674, 532), [4610665]) &&
            _inArray(_gcl(674, 700), [4610665]) &&
            _inArray(_gcl(674, 869), [4610665]) &&
            s3 == 0
        ) {
            if (intLog == 1) log("s18");
            _Click(400, 1160);
            _sleep(1);
            _Click(400, 1050);
        }

        if (
            getColor(190, 908)[0][0] == 1846067 &&
            getColor(394, 908)[0][0] == 1846067 &&
            getColor(560, 908)[0][0] == 1846067
        ) {
            if (intLog == 1) log("s19");
            _Click(390, 909);
        }
        usleep(500000);
        if (_timeStart(tg) > intTime) return 2;
    }
}

// doan nay them o s6 
function _vaoNewsfeed() {
    // Ví dụ: điểm góc trái hoặc biểu tượng newsfeed
    // Điều kiện có thể điều chỉnh tùy theo thực tế thiết bị của bạn
    let mau1 = getColor(148, 90)[0][0];
    let mau2 = getColor(172, 90)[0][0];

    // Nếu đã vào Facebook newsfeed thường có màu đặc trưng là 550655
    return _inArray(550655, [mau1, mau2]);
}

function genPhone(strDauso) {
    let x = "123456789";

    let lenP = 10;
    if (strDauso.slice(0, 3) == "+84") lenP = 12;
    if (strDauso.slice(0, 3) == "+96") lenP = 11;
    if (strDauso.slice(0, 2) == "+1") lenP = 12;

    strDauso.lastIndexOf();
    while (strDauso.length < lenP) {
        strDauso += x[_ranInt(x.length - 1)];
    }

    if (intLog == 1) console.log(strDauso);
    return strDauso;
}

function _ranbw(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function _ranInt(intN) {
    return Math.floor(Math.random() * intN);
}
function _timeStart(intStar) {
    let curentTime = new Date().getTime();
    return Math.floor((curentTime - intStar) / 1000);
}
// helidajianru@hotmail.com|Zny9IE75
function waitImage(pathImage, intTime, vitri) {
    let tg = _currentTime();
    const opt = {
        targetImagePath: pathImage,
        count: 1,
        threshold: 0.95, // OPTIONAL, default is 0.9
        region: null,
        debug: false,
        method: 1,
    };
    let [result, error] = [[], null];

    while (1) {
        if (intToast == 1)
            toast("Waitimage : " + _timeStart(tg) + "/" + intTime, vitri, 1);
        [result, error] = findImage(opt);
        if (result != "") {
            //usleep(1000000);
            return result[0].y;
        }
        usleep(300000);
        if (_timeStart(tg) > intTime) return 0;
    }
}

function imgClick(pathImage, intTime, strMess) {
    let tg = _currentTime();
    const opt = {
        targetImagePath: pathImage,
        count: 1,
        threshold: 0.9, // OPTIONAL, default is 0.9
        region: null,
        debug: false,
        method: 1,
    };
    let [result, error] = [[], null];

    while (1) {
        if (intToast == 1)
            toast(
                "imgClick : " + strMess + _timeStart(tg) + "/" + intTime,
                "center",
                1
            );
        [result, error] = findImage(opt);
        if (result != "") {
            //usleep(1000000);
            _Click(result[0].x, result[0].y);
            return 1;
        }
        usleep(300000);
        if (_timeStart(tg) > intTime) return 0;
    }
}

function imgClickRg(pathImage, intTime, strMess, region) {
    let tg = _currentTime();
    const opt = {
        targetImagePath: pathImage,
        count: 1,
        threshold: 0.95, // OPTIONAL, default is 0.9
        region: region,
        debug: false,
        method: 1,
    };
    let [result, error] = [[], null];

    while (1) {
        if (intToast == 1)
            toast(
                "imgClick : " + strMess + _timeStart(tg) + "/" + intTime,
                "center",
                1
            );
        [result, error] = findImage(opt);
        if (result != "") {
            //usleep(1000000);
            _Click(result[0].x, result[0].y);
            return 1;
        }
        usleep(300000);
        if (_timeStart(tg) > intTime) return 0;
    }
}
function imgClickTop(pathImage, intTime, strMess) {
    let tg = _currentTime();
    const opt = {
        targetImagePath: pathImage,
        count: 1,
        threshold: 0.9, // OPTIONAL, default is 0.9
        region: null,
        debug: false,
        method: 1,
    };
    let [result, error] = [[], null];

    while (1) {
        if (intToast == 1)
            toast("imgClick : " + strMess + _timeStart(tg) + "/" + intTime, "top", 1);
        [result, error] = findImage(opt);
        if (result != "") {
            //usleep(1000000);
            _Click(result[0].x, result[0].y);
            return 1;
        }
        usleep(300000);
        if (_timeStart(tg) > intTime) return 0;
    }
}

function waitImageB(pathImage, intTime, vitri, vung) {
    let tg = _currentTime();
    const opt = {
        targetImagePath: pathImage,
        count: 1,
        threshold: 0.95, // OPTIONAL, default is 0.9
        region: vung,
        debug: false,
        method: 1,
    };
    let [result, error] = [[], null];

    while (1) {
        if (intToast == 1)
            toast("Waitimage : " + _timeStart(tg) + "/" + intTime, vitri, 1);
        [result, error] = findImage(opt);
        if (result != "") {
            //usleep(1000000);
            return result[0].y;
        }
        usleep(300000);
        if (_timeStart(tg) > intTime) return 0;
    }
}

function _readFileLine(pathFile, line) {
    let [ketqua, loi] = fs.readFile(pathFile);
    let arrData;
    if (ketqua.lastIndexOf("\r\n") >= 0) arrData = ketqua.split("\r\n");
    else arrData = ketqua.split("\n");
    return arrData[line - 1];
}

function _waitPixel(intX, intY, intColor, intTime) {
    let time = 0;
    let [ketqua, loi] = [[], null];
    while (1) {
        toast("Time : " + time + "/" + intTime, 1);
        [ketqua, loi] = getColor(intX, intY); //lấy mã màu
        if (intLog == 1) console.log(intX + " " + intY + " : " + ketqua[0]);
        if (ketqua[0] == intColor) return 1;
        time++;
        usleep(1000000);
        //toast('Đang tìm kiếm ' + time + ' s',1)
        if (time > intTime) return 0; //Thất bại
    }
}

function _waitPixelArr(intX, intY, arrColor, intTime) {
    let time = 0;
    let c;
    while (1) {
        toast("Time : " + time + "/" + intTime, 1);

        c = getColor(intX, intY)[0][0];
        if (intLog == 1) console.log(c);
        if (_inArray(c, arrColor)) return 1;
        time++;
        usleep(1000000);
        //toast('Đang tìm kiếm ' + time + ' s',1)
        if (time > intTime) return 0; //Thất bại
    }
}

function _Click(intX, intY) {
    touchDown(1, intX, intY);
    usleep(60000);
    touchUp(1, intX, intY);
    if (intLog == 1) console.log("Click : " + intX + " : " + intY);
    usleep(1000000);
}

function _gclick(intX, intY) {
    touchDown(1, intX, intY);
    usleep(60000);
    touchUp(1, intX, intY);
    if (intLog == 1) console.log("Click : " + intX + " : " + intY);
    usleep(80000);
}

function _pressHome() {
    keyDown(KEY_TYPE.HOME_BUTTON);
    usleep(80000);
    keyUp(KEY_TYPE.HOME_BUTTON);
}

function _fileCountLine(pathFile) {
    let [ketqua, loi] = fs.readFile(pathFile);
    let arrData = ketqua.split("\n");
    return arrData.length;
}

function swiUp() {
    touchDown(6, 451.61, 977.84);
    usleep(17669.67);
    touchMove(6, 448.53, 944.26);
    usleep(16625.38);
    touchMove(6, 448.53, 888.26);
    usleep(16687.5);
    touchMove(6, 451.61, 800.69);
    usleep(16680.12);
    touchMove(6, 465.98, 686.66);
    usleep(16506.25);
    touchMove(6, 487.53, 568.56);
    usleep(16785.75);
    touchMove(6, 525.51, 436.21);
    usleep(16755.29);
    touchMove(6, 589.15, 294.68);
    usleep(15234.71);
    touchUp(6, 593.25, 290.61);
}

function _closeMail() {
    _pressHome();
    usleep(120000);
    _pressHome();
    usleep(500000);
    let dem = 0;
    while (at.appState("com.apple.Preferences") != "NOT RUNNING") {
        swiUp();
        dem++;
        if (dem > 5) break;
        usleep(1500000);
    }
    _pressHome();
    usleep(1000000);
}

function _closeCcinfo() {
    _pressHome();
    usleep(120000);
    _pressHome();
    usleep(500000);

    let dem = 0;
    while (at.appState("com.ccteam.ccinfo") != "NOT RUNNING") {
        swiUp();
        dem++;
        if (dem > 5) break;
        usleep(1500000);
    }
    _pressHome();
    usleep(1000000);
}

function _closeFb(strMode) {
    _pressHome();
    usleep(120000);
    _pressHome();
    usleep(500000);
    let dem = 0;
    while (at.appState(bdlFace) != "NOT RUNNING") {
        //console.log(appState(bdlFace));
        swiUp();
        dem++;
        if (dem > 5) break;
        usleep(1500000);
    }
    dem = 0;
    //com.facebook.Messenger
    while (at.appState("com.facebook.Messenger") != "NOT RUNNING") {
        //console.log(appState(bdlFace));
        swiUp();
        dem++;
        if (dem > 5) break;
        usleep(1500000);
    }

    dem = 0;
    if (strMode == "proxy") {
        while (at.appState(bdlSha) != "NOT RUNNING") {
            //console.log(appState(bdlSha))
            swiUp();
            dem++;
            usleep(1500000);
        }
    }
    _pressHome();
    usleep(1000000);
}

function delRss() {
    touchDown(1, 342.81, 316.06);
    usleep(51249.33);
    touchMove(1, 334.6, 317.07);
    usleep(16675.04);
    touchMove(1, 321.26, 317.07);
    usleep(16589.54);
    touchMove(1, 303.81, 317.07);
    usleep(16874.75);
    touchMove(1, 281.23, 317.07);
    usleep(16707.46);
    touchMove(1, 257.62, 316.06);
    usleep(16573.29);
    touchMove(1, 235.04, 315.04);
    usleep(16578.67);
    touchMove(1, 215.54, 315.04);
    usleep(16774.0);
    touchMove(1, 197.07, 315.04);
    usleep(16816.79);
    touchMove(1, 180.64, 315.04);
    usleep(16392.96);
    touchMove(1, 161.14, 315.04);
    usleep(16816.54);
    touchMove(1, 137.54, 315.04);
    usleep(16512.5);
    touchMove(1, 106.74, 313.0);
    usleep(16602.71);
    touchMove(1, 71.85, 309.95);
    usleep(16367.71);
    touchMove(1, 37.97, 309.95);
    usleep(15776.96);
    touchUp(1, 33.86, 305.88);
    usleep(450958.92);

    touchDown(6, 711.28, 315.04);
    usleep(100182.08);
    touchUp(6, 711.28, 315.04);
    usleep(584087.33);

    touchDown(3, 532.7, 784.41);
    usleep(83467.33);
    touchUp(3, 532.7, 784.41);
    usleep(2631836.92);
}
function delAllRss() {
    _Click(370, 1280);
    usleep(51249.33);
    _Click(90, 85);
    usleep(51249.33);
    _Click(90, 85);
    usleep(51249.33);
    _Click(550, 85);
    usleep(51249.33);
    _Click(510, 770);
    usleep(101249.33);
    _Click(660, 90);
    usleep(51249.33);
    _Click(120, 1280);
    _Click(120, 1280);
    usleep(2631836.92);
}
function updateRss(strMode) {
    let iCheck = 0;
    let data = "";

    while (1) {
        // Lấy data RSS từ Google Sheet
        while (1) {
            lineAcc++;
            if (lineAcc > 10) lineAcc = 1;
            data = getRss(lineAcc + 2, col);
            console.log(data);
            if (data != "") break;
        }

        // BƯỚC 1: Đăng nhập và chờ "mù"
        _logFace(data.split("|")[0], data.split("|")[1]);

        // BƯỚC 2: Tắt và mở lại App
        _closeFb("4G");
        appActivate(bdlFace);
        toast("Chờ 5 giây để kiểm tra trạng thái...", "center", 2);
        _sleep(5);

        // BƯỚC 3: Kiểm tra giao diện
        toast("Bắt đầu kiểm tra giao diện...", "center", 2);

        // Ưu tiên kiểm tra màn hình trắng trước
        if (waitImage(imgTaoTaiKhoanMoi, 2, "center") != 0) {
            iCheck = 998;
        } else {
            // Nếu không phải, kiểm tra các trường hợp khác
            iCheck = _checkLogin(10);
        }

        // Nếu đã xác định được trạng thái (thành công, lỗi, trắng...) thì thoát vòng lặp
        if (iCheck !== 0) {
            break;
        }

        // Nếu không nhận dạng được gì, reset và thử lại
        toast("Không nhận dạng được trạng thái, reset...", "center", 2);
        _reset(strMode);
    }

    // === BƯỚC 4: XỬ LÝ SAU KHI CÓ KẾT QUẢ ===

    // Trường hợp ĐẶC BIỆT: Màn hình trắng, đi thẳng tới backup, không làm gì khác
    if (iCheck == 998) {
        toast("⚠️ Login trắng, chuyển thẳng qua CCInfo!", "center", 3);
        // Script sẽ không làm gì ở đây và đi thẳng xuống phần backup chung
    }
    // Các trường hợp đăng xuất khác
    else if (iCheck == 1) {
        console.log("dang xuat 1");
        _Click(43, 92); _sleep(2); swiUp(); _sleep(2);
        _Click(385, 1265); _sleep(1);
        _Click(513, 805); _sleep(2);
        _Click(515, 771); _sleep(2);
        _clickTaoTaiKhoanNeuCan();
    }
    else if (iCheck == 2) {
        console.log("dang xuat 2");
        tapUntil(691, 1293, 681, 1274, [550655, 31487, 15922423], 15);
        _sleep(2); swiUp(); _sleep(2);
        _Click(385, 1175); _sleep(1);
        _Click(513, 805); _sleep(2);
        _Click(515, 771); _sleep(2);
    }
    else if (iCheck == 282) {
        console.log("dang xuat 282");
        tapUntil(660, 85, 322, 82, [0, 526345], 3);
        tapUntil(220, 450, 530, 867, [31487], 3);
        tapUntil(520, 850, 370, 178, [550655], 3);
        usleep(1000000);
    }
    else if (iCheck == 283) {
        console.log("dang xuat nvr");
        _Click(55, 90); usleep(1000000);
        _Click(285, 430); usleep(1000000);
    }
    else if (iCheck == 2822) {
        console.log("dang xuat 2822 ");
        tapUntil(660, 85, 322, 82, [0, 526345], 3);
        tapUntil(220, 450, 530, 867, [31487], 3);
        tapUntil(520, 850, 370, 178, [550655], 3);
        usleep(1000000);
    }
    else if (iCheck == 3) {
        console.log("dang xuat 3");
        _Click(370, 703); _sleep(2);
        _Click(385, 844); _sleep(2);
        _Click(260, 771); _sleep(2);
    }

    // === LUỒNG BACKUP CCINFO CHUNG CHO MỌI TRƯỜNG HỢP ===
    appRun("com.ccteam.ccinfo");
    usleep(2000000);
    iCheck = _waitPixel(366, 291, 6112720, 30);

    _Click(209, 833); //Back up
    let tg = _currentTime();
    while (1) {
        _sleep(1);
        if (_inArray(_gcl(381, 833), [31487])) _Click(373, 832);
        if (_timeStart(tg) > 7) break;
    }

    iCheck = tapUntil(375, 1280, 372, 1320, [31487], 30, 2);
    if (iCheck == 0) return 0;

    tg = _currentTime();
    while (1) {
        usleep(500000);
        if (getColor(695, 307)[0][0] == 15329771) {
            _Click(695, 307);
            _sleep(1);
        }
        if (getColor(639, 307)[0][0] == 3458905) break;
        if (_timeStart(tg) > 10) return 0;
    }
    _Click(129, 1279); //Home ccinfo
    _sleep(1);
}

function pickRss() {
    appRun("com.ccteam.ccinfo");
    usleep(2000000);
    _waitPixel(366, 291, 6112720, 30);
    let back = 0;
    if (success1 >= success || fail1 >= fail) {
        success1 = 0;
        fail1 = 0;
        _Click(375, 1280);
        _sleep(1);
        delAllRss();
        updateRss("4G");
        back = 1;
    }
    if (back == 1) {
        appActivate("com.ccteam.ccinfo");
        usleep(1000000);
        _Click(400, 350);
        _sleep(10);
    }

    _Click(543, 823); //Restore
    _sleep(5);
}

function _reset(strMode) {
    let iCheck;
    let proxy = "";
    let version = 0;
    toast("Clear data and fake device", 5);
    if (strMode == "proxy") {
        openURL("shadowrocket://disconnect");
        _waitPixel(658, 204, 15329771, time30);
    }

    _closeFb(strMode);
    _closeCcinfo();
    if (strMode == "4G") {
        let version = 0;
        while (1) {
            iCheck = 0;
            openURL("App-Prefs:AIRPLANE_MODE");
            _sleep(1);
            version = 0;
            for (let y = 400; y < 900; y++)
                if (_inArray(_gcl(92, y), [16749824, 14013910])) {
                    iCheck = y + 25;
                    version = 15;
                    break;
                }
            if (version == 0) {
                for (let y = 400; y < 900; y++)
                    if (_inArray(_gcl(60, y), [14013910, 16749824])) {
                        iCheck = y + 25;
                        version = 14;
                        break;
                    }
            }
            if (iCheck == 0) _closeMail();
            else break;
        }
        //fix
        if (version == 15) {
            while (1) {
                if (_inArray(_gcl(609, iCheck), [3458905])) {
                    _Click(610, iCheck);
                    if (_waitPixel(664, iCheck, 15329771, 5) == 0) return 0;
                }
                usleep(300000);
                //15329771
                if (_inArray(_gcl(664, iCheck), [15329771])) break;
            }
            _sleep(2);
            _Click(660, iCheck); //on
            _sleep(2);
            _Click(610, iCheck); //off
            _sleep(8);
            if (_waitPixel(664, iCheck, 15329771, 5) == 0) return 0;
        }
        if (version == 14) {
            while (1) {
                if (_inArray(_gcl(645, iCheck), [3458905])) {
                    //on
                    _Click(645, iCheck);
                    if (_waitPixel(694, iCheck, 15329771, 5) == 0) return 0;
                }
                usleep(300000);
                if (_inArray(_gcl(694, iCheck), [15329771])) break; //off
            }
            _sleep(2);
            _Click(694, iCheck); //on
            _sleep(2);
            _Click(645, iCheck); //off
            _sleep(8);
            if (_waitPixel(694, iCheck, 15329771, 5) == 0) return 0;
        }
    }

    let tg = _currentTime();
    while (1) {
        appRun("com.ccteam.ccinfo");
        iCheck = _waitPixel(366, 291, 6112720, 5);
        if (iCheck) break;
        if (_timeStart(tg) > 30) return 0;
    }
    _Click(400, 350);
    _sleep(10);

    switch (strMode) {
        case "4G":
            //onoff4G();
            break;
        case "proxy":
            proxy = getProxyNet();
            _addproxyNet(proxy);
            break;
    }

    if (rss != 0) pickRss();

    usleep(1000000);
    return 1;
}

function _currentTime() {
    return new Date().getTime();
}

function openFb(intX, strMode, icheck) {
    let c = [15529467, 25824, 31487, 26073];
    let iCheck = 0;

    while (intX > 0) {
        usleep(1000000);
        appRun(bdlFace);
        let tg = _currentTime();

        while (1) {
            toast("Đang mở FB... " + _timeStart(tg) + "s", "top", 1);

            // Chỉ REG mới được click nút "Bắt đầu"
            if (waitImage(imgThamGiaFacebook, 1, "center") != 0) {
                toast("🎯 Phát hiện giao diện Tham gia Facebook", "top", 2);

                if (icheck != 998) {
                    toast("🟢 REG: Click 'Tôi đã có tk FB'", "top", 2);
                    _Click(400, 1150);
                    usleep(2000000);
                }
            }

            if (
                _inArray(_gcl(329, 1128), c) ||
                waitImage(imgTaoTaiKhoanMoi, 1, "top") != 0
            ) {
                toast("✅ Đã vào màn hình chính (Reg/Login)", "top", 2);
                iCheck = 1;
                break;
            }

            if (_timeStart(tg) > 15) {
                toast("❌ Mở FB thất bại, timeout", "top", 2);
                break;
            }

            usleep(1000000);
        }

        if (iCheck == 1) return 1;
        intX--;
        _closeFb(strMode);
        toast("🔁 Thử lại mở Facebook", "top", 2);
    }

    return 0;
}

function _clickTaoTaiKhoanNeuCan() {
    let found = waitImage(imgTaoTaiKhoanMoi, 2, "top");
    if (found) {
        toast("✅ Nhấn vào 'Tạo tài khoản mới'", "top", 2);
        _Click(400, 1170);
        usleep(2000000);
        return 1;
    }
    return 0;
}


function tapUntil(x, y, x1, y1, arrC, intTime, intSleep) {
    let tg = _currentTime();
    while (1) {
        toast("TapUntil " + _timeStart(tg) + "/" + intTime, 1);
        _Click(x, y);
        _sleep(intSleep);
        if (intLog == 1)
            console.log("tapUntil " + x1 + " " + y1 + " : " + getColor(x1, y1)[0][0]);
        if (_inArray(getColor(x1, y1)[0][0], arrC)) return 1;
        if (_timeStart(tg) > intTime) return 0;
    }
}

function _addproxyNet(proxy) {
    toast("Adding proxy ...", 3);
    openURL("shadowrocket://disconnect");
    _waitPixel(658, 204, 15329771, 30);
    usleep(1000000);
    let urlAdd = "shadowrocket://add/socks://" + base64.encode(proxy);
    openURL(urlAdd);
    usleep(2000000);

    //_delProxy();
    openURL("shadowrocket://connect");
    _waitPixel(612, 203, 2388925, 30);
    changeHttp("https", "pacpac", "F85A1977A820260CACEB47E6E67079F1");
    toast("Added proxy successful ...", 2);
}
function changeHttp(mode, user, pass) {
    _Click(629, 610);
    usleep(2000000);
    if (mode == "https") {
        _Click(581, 198);
        usleep(2000000);
        _Click(400, 926);
        usleep(1000000);
    }
    //Add  user
    _Click(500, 540);
    _gokytuM(user);
    usleep(1000000);
    //_Click(500, 630);
    at.copyText(pass);
    touchDown(1, 500, 630);
    usleep(500000);
    touchUp(1, 500, 630);
    usleep(1000000);
    _Click(259, 541);

    //_gokytuM(pass);

    _Click(653, 88); //Luu
    usleep(3000000);
}

function _gokytuA(strText) {
    strText = strText + "";
    for (let i = 0; i < strText.length; i++) {
        inputText(strText[i]);
        usleep(_ranbw(80000, 100000));
    }
    usleep(1000000);
}
function getProxyNet() {
    let tg = _currentTime();

    let x = exec(
        "curl --location -m 30 'https://api.netproxy.io/api/rotateProxy/getNewProxy?apiKey=F85A1977A820260CACEB47E6E67079F1&country=all&type=residential'"
    );
    let objResult = getObject(x);
    if (intLog == 1) console.log(objResult);
    if (objResult.success == true) {
        tgProxy = _currentTime();
        return objResult.data.proxy;
    }

    let time = objResult.data.nextChange;
    while (time > -1) {
        toast(
            "Getting proxy ..." + _timeStart(tg) + "/" + objResult.data.nextChange,
            "center",
            1
        );
        _sleep(1);
        time--;
    }

    while (1) {
        toast("Getting proxy ...", 1);
        usleep(1000000);
        x = exec(
            "curl --location -m 30 'https://api.netproxy.io/api/rotateProxy/getNewProxy?apiKey=F85A1977A820260CACEB47E6E67079F1&country=all&type=residential'"
        );

        objResult = getObject(x);
        if (intLog == 1) console.log(objResult);
        if (objResult.success == true) {
            tgProxy = _currentTime();
            return objResult.data.proxy;
        }
        if (_timeStart(tg) > 60) return 0;
    }
}

function swiUp1() {
    touchDown(2, 500, 1100);
    usleep(30000);
    for (let y = 1100; y > 800; y -= 30) {
        touchMove(2, 500, y);
        usleep(16500);
    }
    usleep(90000);
    touchUp(2, 500, 800);
    usleep(20000);
}

function swiUp2() {
    touchDown(2, 500, 1100);
    usleep(30000);
    for (let y = 1100; y > 950; y -= 30) {
        touchMove(2, 500, y);
        usleep(16500);
    }
    usleep(90000);
    touchUp(2, 500, 950);
    usleep(20000);
}

function _waitColorInArray(x, y, arrColor, intTime) {
    let tg = _currentTime();
    while (1) {
        if (_inArray(getColor(x, y)[0][0], arrColor)) return 1;
        _sleep(1);
        if (_timeStart(tg) > intTime) return 0;
    }
}

function swiDown() {
    touchDown(7, 400, 450);
    usleep(100000);
    for (let y = 450; y < 1050; y += 30) {
        touchMove(7, 400, y);
        usleep(18000);
    }
    touchUp(7, 400, 1050);
    usleep(300000);
}

function _readCode() {
    let w = 120;
    let kq = "";
    let result = "";

    let arrNum = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    const options = {
        region: { x: 50, y: 407, width: w, height: 45 },
        level: 0,
        debug: false,
    };
    usleep(2000000);
    ocr(options, (result, error) => {
        if (error) {
            console.log("error : " + error);
        } else {
            //
            //console.log(`Got result of recognizeText:\n${JSON.stringify(result, null, '    ')}`)

            if (result[0] != "") kq = result[0].text; //Tim thay
            else kq = 0;
            //tim thay hoac khong
        }
    });
    if (kq == 0) return 0;
    if (kq.length < 5) return 0;
    _Click(315, 438);
    usleep(2000000);
    _Click(21, 80);

    for (let i = 0; i < 5; i++) {
        if (_inArray(kq[i], arrNum)) result = result + kq[i];
    }
    return result;
}

function upSite(intKho) {
    let arrData;
    let strData;

    toast("Getting data faceboo...", 2);
    usleep(2000000);

    let x = at.exec("ccinfo getfb");
    if (x.lastIndexOf("\r\n") > 0) strData = x.split("\r\n");
    else strData = x.split("\n");

    arrData = strData[0].split("|");
    let json = {
        apikey: apiClone,
        type_id: intKho,
        uid: arrData[0],
        pass: passToSave,
        cookie: arrData[2],
        token: arrData[1].slice(6, arrData[1].length),
    };

    at.exec(`curl --location -g -m 30 \
--form 'apikey="${json.apikey}"' \
--form 'type_id="${json.type_id}"' \
--form 'uid="${json.uid}"' \
--form 'pass="${json.pass}"' \
--form 'cookie="${json.cookie}"' \
--form 'token="${json.token}"' \
'https://clonegiare.com/api/uploadproduct'`);
    toast("Gửi Dữ Liệu Thành Công", 3);
}



let test = 0;




if (test == 0) {
    let thoigianhientai = new Date();
    let timein =
        thoigianhientai.getHours() + "h" + thoigianhientai.getMinutes() + "p";
    let timeout = "";

    let iCheck = 0;
    let thanhcong = 0;
    let dem = 0;

    getConfigbyName(nameIphone);
    _init();
    dauso = getPhone(col + 1);
    dausosave = _ranbw(0, dauso.length - 1);

    while (1) {
        dem++;
        iCheck = _regAcc(dausosave, mode);
        if (iCheck == 1) {
            thanhcong++;
            success1++;
            fail1 = 0;
        } else fail1++;

        toast("Thành công : " + thanhcong + "/" + dem, 5);
        thoigianhientai = new Date();
        timeout =
            thoigianhientai.getHours() + "h" + thoigianhientai.getMinutes() + "p";
        upTile(nameIphone, thanhcong, dem - thanhcong, timein, timeout);

        usleep(3000000);
    }
}


