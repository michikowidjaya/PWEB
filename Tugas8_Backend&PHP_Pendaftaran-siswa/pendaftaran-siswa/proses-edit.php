<?php

include("config.php");

// Cek apakah tombol simpan sudah diklik atau belum?
if(isset($_POST['simpan'])){

    // Ambil data dari formulir
    $id = $_POST['id'];
    $nama = $_POST['nama'];
    $alamat = $_POST['alamat'];
    $jenis_kelamin = $_POST['jenis_kelamin'];
    $agama = $_POST['agama'];
    $sekolah_asal = $_POST['sekolah_asal'];

    // Buat query update
    $sql = "UPDATE calon_siswa SET nama='$nama', alamat='$alamat', jenis_kelamin='$jenis_kelamin', agama='$agama', sekolah_asal='$sekolah_asal' WHERE id=$id";
    $query = mysqli_query($db, $sql);

    // Apakah query update berhasil?
    if( $query ) {
        // Kalau berhasil alihkan ke halaman list-siswa.php
        header('Location: list-siswa.php');
    } else {
        // Kalau gagal tampilkan pesan
        die("Gagal menyimpan perubahan...");
    }


} else {
    die("Akses dilarang...");
}

?>