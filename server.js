const express = require('express');
const app = express();
const PORT = 3000;
const authRoutes = require('./src/routes/authRoutes');

app.use(express.json()); // supaya req.body bisa dibaca dalam format JSON
app.use('/', authRoutes);


app.get('/', (req, res) => {
res.json({ message: 'API berjalan dengan baik' });
});

app.listen(PORT, () => {
console.log(`Server berjalan di http://localhost:${PORT}`);
});

