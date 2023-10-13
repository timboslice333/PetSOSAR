const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const PORT = 8080;

// Connect to the SQLite database
let db = new sqlite3.Database('./petsosar.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) console.error(err.message);
    console.log('Connected to the petsosar_database.');
});

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to PetSOSAR!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
