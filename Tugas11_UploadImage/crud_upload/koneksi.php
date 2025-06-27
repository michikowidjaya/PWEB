<?php
// Konfigurasi Database
$host = 'localhost';    // Biasanya 'localhost'
$user = 'root';         // User default XAMPP
$pass = '';             // Password default XAMPP (kosong)
$db   = 'db_pendaftaran'; // Nama database yang sudah dibuat

// Membuat koneksi
$koneksi = mysqli_connect($host, $user, $pass, $db);

// Cek koneksi
if (!$koneksi) {
    die("Koneksi gagal: " . mysqli_connect_error());
}
?>