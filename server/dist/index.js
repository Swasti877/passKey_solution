"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const port = process.env['PORT'] || 5000;
app.get('/', (req, res) => {
    res.send('Send');
});
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
