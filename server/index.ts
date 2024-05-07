import { Request, Response, Express } from 'express';

const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app: Express = express();
const port = process.env['PORT'] || 5000;

app.get('/', (req: Request, res: Response) => {
  res.send('Send');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
