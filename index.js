document.addEventListener("DOMContentLoaded", function(event) {
    var install1 = document.getElementById("install-1");
    var install2 = document.getElementById("install-2");
    var install3 = document.getElementById("install-3");
    var install4 = document.getElementById("install-4");

    var setup1a = document.getElementById("setup-1a");
    var setup1b = document.getElementById("setup-1b");
    var setup1c = document.getElementById("setup-1c");
    var setup1d = document.getElementById("setup-1d");
    
    var setup2a = document.getElementById("setup-2a");
    var setup2b = document.getElementById("setup-2b");
    var setup2c = document.getElementById("setup-2c");

    var setup2xa = document.getElementById("setup-2xa");
    var setup2xb = document.getElementById("setup-2xb");
    var setup2xc = document.getElementById("setup-2xc");

    var setup2ya = document.getElementById("setup-2ya");
    var setup2yb = document.getElementById("setup-2yb");
    var setup2yc = document.getElementById("setup-2yc");
    var setup2yd = document.getElementById("setup-2yd");

    var setup3a = document.getElementById("setup-3a");
    var setup3b = document.getElementById("setup-3b");
    var setup3c = document.getElementById("setup-3c");

    var login1 = document.getElementById("login-1");
    var login2 = document.getElementById("login-2");
    var login3 = document.getElementById("login-3");
    var login4 = document.getElementById("login-4");

    install1.innerHTML = strInstall1;
    install2.innerHTML = strInstall2;
    install3.innerHTML = strInstall3;
    install4.innerHTML = strInstall4;

    setup1a.innerHTML = strSetup1a;
    setup1b.innerHTML = strSetup1b;
    setup1c.innerHTML = strSetup1c;
    setup1d.innerHTML = strSetup1d;

    setup2a.innerHTML = strSetup2a;
    setup2b.innerHTML = strSetup2b;
    setup2c.innerHTML = strSetup2c;
    
    setup2xa.innerHTML = strSetup2xa;
    setup2xb.innerHTML = strSetup2xb;
    setup2xc.innerHTML = strSetup2xc;

    setup2ya.innerHTML = strSetup2ya;
    setup2yb.innerHTML = strSetup2yb;
    setup2yc.innerHTML = strSetup2yc;
    setup2yd.innerHTML = strSetup2yd;

    setup3a.innerHTML = strSetup3a;
    setup3b.innerHTML = strSetup3b;
    setup3c.innerHTML = strSetup3c;

    login1.innerHTML = strLogin1;
    login2.innerHTML = strLogin2;
    login3.innerHTML = strLogin3;
    login4.innerHTML = strLogin4;
});

var strInstall1 = "Buka <b>Google Play Store</b> (untuk Android) atau <b>App Store</b> (untuk iOS) di perangkat selular Anda.";
var strInstall2 = "Cari “<b>Google Authenticator</b>”.";
var strInstall3 = "Instal aplikasi tersebut.";
var strInstall4 = "Setelah berhasil, jalankan aplikasi tersebut hingga Anda melihat daftar yang masih kosong dengan sebuah tombol <b>plus (+)</b> di pojok kanan bawah.";

// ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----

var strSetup1a = "Ketikkan <b>username</b> dan <b>password</b> diikuti dengan menekan tombol <b>LOGIN</b>.";
var strSetup1b = "Muncul pesan untuk mengikuti langkah-langkah yang diperlukan agar akun Anda tetap aman.";
var strSetup1c = "Langkah penginstalan aplikasi MFA sudah dijelaskan di <i>part</i> sebelumnya.";
var strSetup1d = "Jika aplikasi MFA sudah terinstal di handphone Anda lanjutkan dengan menekan tombol <b>NEXT</b> lalu muncul <i>pop-up</i> berjudul “<b>Set Up App</b>”.";

var strSetup2a = "Siapkan aplikasi MFA yang sudah terinstall.";
var strSetup2b = "Pada aplikasi MFA, tekan tombol <b>plus (+)</b> lalu muncul 2 opsi “<b>Scan a QR code</b>” atau “<b>Enter a setup key</b>”.";
var strSetup2c = "Lanjutkan ke langkah <b>2a</b> jika anda akan memindai QR code, atau ke langkah <b>2b</b> jika anda akan melakukan <i>input</i> secara manual.";

var strSetup2xa = "Tekan tombol “<b>Scan a QR code</b>”.";
var strSetup2xb = "Pindai kode QR yang ada di jendela “<b>Set Up App</b>” pada browser anda.";
var strSetup2xc = "Muncul 6 angka acak di aplikasi MFA.";

var strSetup2ya = "Tekan tombol “<b>Enter a setup key</b>”.";
var strSetup2yb = "Untuk <b>nama kode</b>, ketikkan   “AHM LEARNING SUITE”.";
var strSetup2yc = "Untuk <b>kunci anda</b>, salin secret key yang ada di jendela “<b>Set Up App</b>” pada browser anda.";
var strSetup2yd = "Mucul 6 angka acak di aplikasi MFA.";

var strSetup3a = "Masukkan 6 angka tersebut ke dalam 6 kotak yang ada di jendela “<b>Set Up App</b>” pada browser anda.";
var strSetup3b = "Angka acak yang muncul adalah <b>kode keamanan</b> yang akan selalu diperbarui setiap 30 detik. Pastikan kode tersebut belum diperbarui ketika anda menggunakannya.";
var strSetup3c = "Jika pada browser muncul tampilan dashboard maka Anda berhasil melakukan login perdana dan menghubungkan akun Anda dengan aplikasi MFA.";

// ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----

var strLogin1 = "Ke depannya, lakukan langkah-langkah di bawah ini setiap kali anda akan login.";
var strLogin2 = "Siapkan aplikasi MFA.";
var strLogin3 = "Masukkan <b>username</b> dan <b>password</b>.";
var strLogin4 = "Salin kode keamanan yang dihasilkan oleh aplikasi MFA.";


