// 1. Memanggil paket yang kita butuhkan
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const User = require('./models/User'); // Import model User

// 2. Membuat aplikasi express
const app = express();
const port = 3000;

// 3. Middleware
// Agar Express bisa membaca data JSON yang dikirim dalam request body
app.use(express.json());
// Agar Express bisa menyajikan file statis (HTML, CSS, JS) dari folder 'public'
app.use(express.static('public'));

// 4. Koneksi ke database
mongoose.connect(process.env.DATABASE_URL)
  .then(() => console.log("Berhasil terhubung ke MongoDB Atlas!"))
  .catch(error => console.error("Gagal terhubung ke database.", error));

// 5. API ROUTES (Jalur API)

// Rute untuk mendapatkan semua user (READ)
app.get('/api/users', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Rute untuk membuat user baru (CREATE)
app.post('/api/users', async (req, res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        age: req.body.age,
        hobbies: req.body.hobbies
    });

    try {
        const newUser = await user.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Rute untuk halaman /store
app.get('/store', (req, res) => {
    res.send('<h1>Selamat Datang di Toko Kami!</h1><p>Halaman ini masih dalam pengembangan.</p>');
});

// 6. Menjalankan server
app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});