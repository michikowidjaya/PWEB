<?php
// Sertakan file koneksi.php
include 'koneksi.php';

// Cek apakah tombol submit sudah ditekan
if (isset($_POST['submit'])) {
    
    // Ambil data dari formulir
    $nama = mysqli_real_escape_string($koneksi, $_POST['nama']);
    $nis = mysqli_real_escape_string($koneksi, $_POST['nis']);
    $alamat = mysqli_real_escape_string($koneksi, $_POST['alamat']);

    // Proses data file yang diupload
    $foto_nama = $_FILES['foto']['name'];
    $foto_tmp = $_FILES['foto']['tmp_name'];
    $foto_size = $_FILES['foto']['size'];
    $foto_error = $_FILES['foto']['error'];

    // Cek apakah ada file yang diupload
    if ($foto_error === 0) {
        // Tentukan ekstensi file yang diizinkan
        $allowed_extensions = array('jpg', 'jpeg', 'png');
        $file_extension = strtolower(pathinfo($foto_nama, PATHINFO_EXTENSION));

        // Validasi ekstensi file
        if (in_array($file_extension, $allowed_extensions)) {
            // Validasi ukuran file (misal, maks 1MB)
            if ($foto_size < 1048576) { // 1MB = 1024 * 1024 bytes
                
                // Buat nama file baru yang unik untuk menghindari konflik nama
                $foto_nama_baru = uniqid() . '-' . $foto_nama;
                $tujuan_upload = 'images/' . $foto_nama_baru;

                // Pindahkan file dari temporary location ke folder 'images'
                if (move_uploaded_file($foto_tmp, $tujuan_upload)) {
                    
                    // Jika upload file berhasil, simpan data ke database
                    $query = "INSERT INTO siswa (nama, nis, alamat, foto) VALUES ('$nama', '$nis', '$alamat', '$foto_nama_baru')";
                    
                    if (mysqli_query($koneksi, $query)) {
                        echo "<script>alert('Pendaftaran berhasil! Data siswa telah disimpan.'); window.location.href='tambah_siswa.php';</script>";
                    } else {
                        echo "<script>alert('Gagal menyimpan data ke database: " . mysqli_error($koneksi) . "'); window.history.back();</script>";
                    }

                } else {
                    echo "<script>alert('Gagal memindahkan file foto.'); window.history.back();</script>";
                }

            } else {
                echo "<script>alert('Ukuran file terlalu besar! Maksimal 1MB.'); window.history.back();</script>";
            }
        } else {
            echo "<script>alert('Tipe file tidak diizinkan! Hanya JPG, JPEG, dan PNG.'); window.history.back();</script>";
        }
    } else {
        echo "<script>alert('Terjadi kesalahan saat mengupload file.'); window.history.back();</script>";
    }
} else {
    // Jika tidak ada request POST, kembalikan ke halaman form
    header('Location: tambah_siswa.php');
}
?>