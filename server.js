import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

// Explicit route for CV PDF to force immediate file download
app.get(['/Ankit_Yadav_CV.pdf', '/images/Ankit_Yadav_CV.pdf', '/cv'], (req, res) => {
  const pdfPath = path.join(__dirname, 'Ankit_Yadav_CV.pdf');
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'attachment; filename="Ankit_Yadav_CV.pdf"');
  res.download(pdfPath, 'Ankit_Yadav_CV.pdf');
});

// Serve static assets from the current directory
app.use(express.static(__dirname));

// Single-page application fallback to index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Portfolio server running on http://0.0.0.0:${PORT}`);
});
