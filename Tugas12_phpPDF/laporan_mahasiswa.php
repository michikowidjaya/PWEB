<?php
// Memanggil library FPDF
require('fpdf.php');
// Memanggil file koneksi
include 'koneksi.php';

// intance object dan memberikan pengaturan halaman PDF
// 'L' untuk Lanskap, 'P' untuk Potret
// 'mm' untuk satuan milimeter
// 'A5' untuk ukuran kertas
$pdf = new FPDF('l','mm','A5');

// membuat halaman baru
$pdf->AddPage();

// setting jenis font yang akan digunakan
$pdf->SetFont('Arial','B',16);

// mencetak string kop surat
$pdf->Cell(190,7,'SEKOLAH MENENGAH KEJURUAN NEGERI 2 LANGSA',0,1,'C');
$pdf->SetFont('Arial','B',12);
$pdf->Cell(190,7,'DAFTAR SISWA KELAS IX JURUSAN REKAYASA PERANGKAT LUNAK',0,1,'C');

// Memberikan space kebawah agar tidak terlalu rapat
$pdf->Cell(10,7,'',0,1);

// Membuat header tabel
$pdf->SetFont('Arial','B',10);
$pdf->Cell(20,6,'NIM',1,0,'C'); // 'C' untuk center
$pdf->Cell(85,6,'NAMA MAHASISWA',1,0,'C');
$pdf->Cell(27,6,'NO HP',1,0,'C');
$pdf->Cell(40,6,'TANGGAL LAHIR',1,1,'C'); // Disesuaikan lebarnya dan tambah enter (1)

// Mengatur font untuk isi tabel
$pdf->SetFont('Arial','',10);

// Query untuk mengambil data mahasiswa
$query = "SELECT * FROM mahasiswa";
$result = mysqli_query($connect, $query);

// Looping untuk menampilkan data
while ($row = mysqli_fetch_array($result)){
    $pdf->Cell(20,6,$row['nim'],1,0);
    $pdf->Cell(85,6,$row['nama_lengkap'],1,0);
    $pdf->Cell(27,6,$row['no_hp'],1,0);
    // Mengubah format tanggal agar lebih rapi (opsional)
    $tanggal_lahir = date('d-m-Y', strtotime($row['tanggal_lahir']));
    $pdf->Cell(40,6,$tanggal_lahir,1,1); 
}

// Menghasilkan output file PDF
$pdf->Output();
?>