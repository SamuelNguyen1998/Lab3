var GIA_CAOVOI = 100000;
var GIA_TAYTRANG = 1200000;
var GIA_CHUPHINHRANG = 80000;
var GIA_TRAMRANG = 80000;
var eFullname = document.getElementById("edtTen");
var soRang = document.getElementById("edtsoRang");
function TinhTien() {
    // Lay dich vu
    var tongTien = 0;
    var fullname = eFullname.value;

    var caoVoi = document.getElementById("caoVoi");
    var tayTrang = document.getElementById("tayTrang");
    var chupHinhRang = document.getElementById("chupHinhRang");
    var soRang = document.getElementById("soRang").value;
    if (fullname.length < 1) {
        alert("vui lòng nhập tên");
        return;
    }

    if (caoVoi.checked) {
        tongTien += GIA_CAOVOI;
    } if (tayTrang.checked) {
        tongTien += GIA_TAYTRANG;
    } if (chupHinhRang.checked) {
        tongTien += GIA_TRAMRANG;
    }
    tongTien += soRang * 80000;

    var divThanhTien = document.getElementById("divThanhTien");
    divThanhTien.style.display = "block";
    divThanhTien.style.backgroundColor = "pink";
    var xuatTien = document.getElementById("xuatTien");
    xuatTien.innerHTML = tongTien;
}

function Luu() {
    localStorage.setItem("ten", eFullname.value);13
}

function Lay() {
    eFullname.value = localStorage.getItem("ten");
}
