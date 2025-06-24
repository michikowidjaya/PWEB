<?php

// Variabel untuk koneksi ke database
$server = "localhost";
$user = "root";
$password = "";
$nama_database = "pendaftaran_siswa";

// ----> PERHATIKAN BARIS INI <----
// Pastikan nama variabelnya adalah $db, bukan $DB, $database, atau yang lain.
$db = mysqli_connect($server, $user, $password, $nama_database);

// Cek koneksi
// ----> PASTIKAN BLOK INI JUGA ADA <----
if( !$db ){
    die("Gagal terhubung dengan database: " . mysqli_connect_error());
}

?>