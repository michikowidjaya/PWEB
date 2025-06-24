<?php

include("config.php");

// Cek apakah ada parameter 'id' di URL
if( isset($_GET['id']) ){

    // Ambil id dari query string
    $id = $_GET['id'];

    // Buat query hapus
    $sql = "DELETE FROM calon_siswa WHERE id=$id";
    $query = mysqli_query($db, $sql);

    // Apakah query hapus berhasil?
    if( $query ){
        // Jika berhasil, redirect kembali ke halaman list-siswa.php
        header('Location: list-siswa.php');
    } else {
        // Jika gagal, tampilkan pesan
        die("Gagal menghapus...");
    }

} else {
    // Jika tidak ada 'id' di URL
    die("Akses dilarang...");
}

?>