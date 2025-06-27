<?php include 'koneksi.php'; ?>
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>Data Siswa Terdaftar</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 40px; }
        h1, h2 { text-align: center; }
        table { width: 80%; margin: 20px auto; border-collapse: collapse; }
        th, td { padding: 12px; border: 1px solid #ddd; text-align: left; }
        th { background-color: #4CAF50; color: white; }
        tr:nth-child(even) { background-color: #f2f2f2; }
        img { width: 80px; height: auto; border-radius: 5px; }
        .tambah-link { display: block; text-align: center; margin: 20px; }
    </style>
</head>
<body>
    <h1>Data Siswa Terdaftar</h1>
    <div class="tambah-link">
        <a href="tambah_siswa.php">Tambah Siswa Baru</a>
    </div>
    <table>
        <thead>
            <tr>
                <th>No</th>
                <th>Foto</th>
                <th>Nama</th>
                <th>NIS</th>
                <th>Alamat</th>
            </tr>
        </thead>
        <tbody>
            <?php
            $query = "SELECT * FROM siswa ORDER BY id DESC";
            $result = mysqli_query($koneksi, $query);
            $no = 1;

            if(mysqli_num_rows($result) > 0) {
                while($row = mysqli_fetch_assoc($result)) {
                    echo "<tr>";
                    echo "<td>" . $no++ . "</td>";
                    // Tampilkan gambar dari folder 'images'
                    echo "<td><img src='images/" . htmlspecialchars($row['foto']) . "' alt='Foto " . htmlspecialchars($row['nama']) . "'></td>";
                    echo "<td>" . htmlspecialchars($row['nama']) . "</td>";
                    echo "<td>" . htmlspecialchars($row['nis']) . "</td>";
                    echo "<td>" . htmlspecialchars($row['alamat']) . "</td>";
                    echo "</tr>";
                }
            } else {
                echo "<tr><td colspan='5' style='text-align:center;'>Belum ada data siswa.</td></tr>";
            }
            ?>
        </tbody>
    </table>
</body>
</html>