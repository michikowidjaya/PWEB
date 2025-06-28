<?php
// Pengaturan koneksi database
$host = "localhost"; // Nama host server database
$user = "root";      // Username database (default XAMPP adalah "root")
$pass = "";          // Password database (default XAMPP kosong)
$db   = "tutorial";  // Nama database yang telah dibuat

// Membuat koneksi ke database
$connect = mysqli_connect($host, $user, $pass, $db);

// Memeriksa apakah koneksi berhasil
if (!$connect) {
    die("Koneksi Gagal: " . mysqli_connect_error());
}
?>