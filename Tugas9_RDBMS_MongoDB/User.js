const mongoose = require('mongoose');

// Membuat Skema (Struktur) untuk User
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    // Kolom ini tidak wajib, untuk menunjukkan fleksibilitas
    hobbies: {
        type: [String] // Tipe data Array of Strings
    }
});

// Membuat Model dari Skema dan mengekspornya
module.exports = mongoose.model('User', userSchema);