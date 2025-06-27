<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tambah Siswa Baru</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 40px; }
        .container { max-width: 500px; margin: auto; padding: 20px; border: 1px solid #ccc; border-radius: 10px; }
        .form-group { margin-bottom: 15px; }
        label { display: block; margin-bottom: 5px; }
        input[type="text"], textarea { width: 100%; padding: 8px; box-sizing: border-box; }
        input[type="file"] { padding: 3px; }
        button { background-color: #4CAF50; color: white; padding: 10px 15px; border: none; border-radius: 5px; cursor: pointer; }
        button:hover { background-color: #45a049; }
    </style>
</head>
<body>

<div class="container">
    <h2>Formulir Pendaftaran Siswa Baru</h2>
    <p>Silakan upload pas foto ukuran 3x4.</p>
    <hr>
    <form action="proses_tambah.php" method="POST" enctype="multipart/form-data">
        <div class="form-group">
            <label for="nama">Nama Lengkap:</label>
            <input type="text" id="nama" name="nama" required>
        </div>
        <div class="form-group">
            <label for="nis">NIS:</label>
            <input type="text" id="nis" name="nis" required>
        </div>
        <div class="form-group">
            <label for="alamat">Alamat:</label>
            <textarea id="alamat" name="alamat" rows="3" required></textarea>
        </div>
        <div class="form-group">
            <label for="foto">Pas Foto (3x4):</label>
            <input type="file" id="foto" name="foto" accept="image/jpeg, image/png" required>
            <small>Tipe file yang diizinkan: JPG, PNG. Ukuran maks: 1MB.</small>
        </div>
        <button type="submit" name="submit">Daftar</button>
    </form>
</div>

</body>
</html>