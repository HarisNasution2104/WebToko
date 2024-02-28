const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Set up static files (CSS, images, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Define routes
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public', 'index.html')));
app.get('/produk', (req, res) => res.sendFile(path.join(__dirname, 'public', 'produk.html')));
app.get('/kontak', (req, res) => res.sendFile(path.join(__dirname, 'public', 'kontak.html')));

// Start the server
app.listen(port, () => console.log(`Server is running on http://localhost:${port}`));
