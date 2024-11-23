import express from 'express';
import { router } from './Router/router.js';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

// Required for ES Modules to resolve __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT =  4000; // Use environment variable for port
const app = express();

app.use(cors());
app.use(express.json());

// Serve React build files
app.use(express.static(path.join(__dirname, 'client', 'dist')));

app.use('/', router);

// Handle React routing (SPA)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
