const express = require('express');
const cors = require('cors');
const DBRoutes = require('./routes/DBRoutes');
const PenRoutes = require('./routes/PenRoutes');
const PengabdianRoutes = require('./routes/PengabdianRoutes');
const app = express();

// Mengaktifkan CORS
app.use(cors());

// Middleware untuk mengurai JSON
app.use(express.json());

app.use('/api',
    DBRoutes,
    PenRoutes,
    PengabdianRoutes
);

module.exports = app;
