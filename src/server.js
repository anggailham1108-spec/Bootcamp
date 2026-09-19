const express = require('express');
const app = express();
const port = 3000;

app.get('/health-check', (req, res) => {
    res.send('hallo')
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
});

