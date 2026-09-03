import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

// Explicit route for CV PDF to force immediate file download
app.get(['/Ankit_Yadav_CV.pdf', '/images/Ankit_Yadav_CV.pdf', '/cv', '/resume'], (req, res) => {
  const pdfPath = path.join(__dirname, 'Ankit_Yadav_CV.pdf');
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'attachment; filename="Ankit_Yadav_CV.pdf"');
  res.download(pdfPath, 'Ankit_Yadav_CV.pdf');
});

// Explicit routes for styles.css and script.js to guarantee exact MIME types
app.get('/styles.css', (req, res) => {
  res.setHeader('Content-Type', 'text/css; charset=utf-8');
  res.sendFile(path.join(__dirname, 'styles.css'));
});

app.get('/script.js', (req, res) => {
  res.setHeader('Content-Type', 'application/javascript; charset=utf-8');
  res.sendFile(path.join(__dirname, 'script.js'));
});

// Serve static assets from the current directory with proper headers
app.use(express.static(__dirname, {
  setHeaders: (res, filePath) => {
    if (filePath.endsWith('.css')) {
      res.setHeader('Content-Type', 'text/css; charset=utf-8');
    } else if (filePath.endsWith('.js')) {
      res.setHeader('Content-Type', 'application/javascript; charset=utf-8');
    }
  }
}));

// Fallback: Never return index.html for missing assets (prevents MIME mismatch)
app.get('*', (req, res) => {
  if (req.path.match(/\.(css|js|png|jpg|jpeg|svg|webp|ico|json|pdf|woff|woff2|ttf|map)$/i)) {
    return res.status(404).send('Asset not found');
  }
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Only start listening if not running in serverless environment
if (process.env.NODE_ENV !== 'test' && !process.env.VERCEL) {
  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Portfolio server running on http://0.0.0.0:${PORT}`);
  });
}

export default app;
