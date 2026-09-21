const express = require('express');
const router = express.Router();
// "database" sementara, disimpan di memori (akan diganti SQL di Sesi 4)
const users = [];
function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

//register
router.post('/register', (req, res) => {
const { email, password } = req.body;
// 1. Validasi field wajib
if (!email || !password) {
return res.status(400).json({ message: 'Email dan password wajib diisi' });
}
// 2. Validasi format email
if (!isValidEmail(email)) {
return res.status(400).json({ message: 'Format email tidak valid' });
}
// 3. Validasi panjang password
if (password.length < 6) {
return res.status(400).json({ message: 'Password minimal 6 karakter' });
}
// 4. Cek duplikasi email
const existing = users.find((u) => u.email === email);
if (existing) {
return res.status(400).json({ message: 'Email sudah terdaftar' });
}
// 5. Simpan user baru
const newUser = { id: users.length + 1, email, password };
users.push(newUser);
return res.status(201).json({ message: 'User berhasil didaftarkan', data: { id: newUser.id,
email: newUser.email } });
});


// untuk tampil user
router.get('/users', (req, res) => {
    // Hapus properti password dari tiap objek user
    const safeUsers = users.map(({ password, ...userWithoutPassword }) => userWithoutPassword);

    return res.status(200).json({
        message: 'Daftar seluruh user',
        data: safeUsers
    });
});

module.exports = router;