import PDFDocument from 'pdfkit';
import fs from 'fs';
import path from 'path';

function createCV(outputPath) {
  const doc = new PDFDocument({
    size: 'A4',
    margins: { top: 40, bottom: 40, left: 45, right: 45 },
    info: {
      Title: 'Ankit Yadav — CV',
      Author: 'Ankit Yadav',
      Subject: 'Curriculum Vitae',
      Keywords: 'Software Developer, Computer Science, Full Stack, Founder'
    }
  });

  const stream = fs.createWriteStream(outputPath);
  doc.pipe(stream);

  const primaryColor = '#1e3a8a'; // Executive Navy
  const accentColor = '#2563eb'; // Tech Blue
  const darkTextColor = '#0f172a'; // Deep slate
  const mutedTextColor = '#475569'; // Neutral slate
  const lightLineColor = '#cbd5e1';

  // Header
  doc.font('Helvetica-Bold').fontSize(22).fillColor(darkTextColor).text('ANKIT YADAV', { align: 'center' });
  doc.moveDown(0.25);

  // Subhead Contact
  doc.font('Helvetica').fontSize(9.5).fillColor(mutedTextColor);
  
  const contactY = doc.y;
  doc.text('ankit1424yadav@gmail.com', 45, contactY, {
    link: 'mailto:ankit1424yadav@gmail.com',
    underline: true,
    continued: true
  });
  doc.fillColor(mutedTextColor).text('   |   ', { underline: false, continued: true });
  doc.fillColor(accentColor).text('linkedin.com/in/ankit-2025x', {
    link: 'https://www.linkedin.com/in/ankit-2025x',
    underline: true,
    continued: true
  });
  doc.fillColor(mutedTextColor).text('   |   ', { underline: false, continued: true });
  doc.fillColor(accentColor).text('github.com/ankit-on-git', {
    link: 'https://github.com/ankit-on-git',
    underline: true
  });

  doc.moveDown(0.8);

  function sectionHeader(title) {
    doc.moveDown(0.5);
    doc.font('Helvetica-Bold').fontSize(11).fillColor(primaryColor).text(title.toUpperCase(), { characterSpacing: 1.5 });
    const y = doc.y + 2;
    doc.strokeColor(accentColor).lineWidth(1.5).moveTo(45, y).lineTo(550, y).stroke();
    doc.moveDown(0.5);
  }

  // SKILLS
  sectionHeader('Skills');
  doc.font('Helvetica').fontSize(9.5).fillColor(darkTextColor).text(
    'C  •  C++  •  JavaScript  •  HTML5  •  Python  •  Vercel  •  MySQL  •  MongoDB  •  Postgres  •  Canva  •  GitHub  •  GitLab  •  Selenium  •  Arduino',
    { lineGap: 3 }
  );

  // EXPERIENCE
  sectionHeader('Experience');
  doc.font('Helvetica-Bold').fontSize(10.5).fillColor(darkTextColor).text('Founder — Onlyfools', { continued: true });
  doc.font('Helvetica-Bold').fillColor(mutedTextColor).text('   |   Present', { align: 'right' });
  
  doc.moveDown(0.2);
  doc.font('Helvetica').fontSize(9).fillColor(mutedTextColor).text(
    '• Founded and currently building Onlyfools, an AI-run news media platform where autonomous AI agents research, write, and publish news content without manual intervention.\n' +
    '• Designed the end-to-end automation pipeline that lets AI agents source, draft, and publish articles independently, reducing manual editorial effort.\n' +
    '• Growing visibility for the platform, including public engagement and media attention around its coverage.',
    { lineGap: 2.5 }
  );
  doc.moveDown(0.2);
  doc.font('Helvetica-Bold').fontSize(9).fillColor(accentColor).text('View Onlyfools', {
    link: 'https://onlyfoolls.blogspot.com/',
    underline: true
  });

  // PROJECTS
  sectionHeader('Projects');

  const projects = [
    {
      name: 'QR Code Generator',
      tech: 'JavaScript  •  CSS  •  HTML',
      desc: 'A web app that generates QR codes from any text or URL input.',
      live: 'https://qr-code-gen-gules.vercel.app/',
      github: 'https://github.com/ankit-on-git/QR-Code-Creater'
    },
    {
      name: 'Quote Generator',
      tech: 'JavaScript  •  CSS  •  HTML',
      desc: 'Generates quotes on demand with one-click copy for easy sharing.',
      live: 'https://quote-generator-flame-omega.vercel.app/',
      github: 'https://github.com/ankit-on-git/quote-generator'
    },
    {
      name: 'Password Generator',
      tech: 'HTML  •  CSS  •  JavaScript  •  Python',
      desc: 'Generates secure random passwords with a clean, card-style UI, plus a downloadable access slip.',
      live: 'https://pass-generator1.vercel.app/',
      github: 'https://github.com/ankit-on-git/password-generator'
    },
    {
      name: 'Modern Calculator',
      tech: 'JavaScript  •  CSS  •  HTML',
      desc: 'A scientific + standard calculator with currency, temperature, area, EMI/loan, and PPP conversion tools in a sidebar-based UI.',
      live: 'https://modern-calculex.vercel.app/',
      github: 'https://github.com/ankit-on-git/Modern-Calculator'
    },
    {
      name: 'Ultron',
      tech: 'AI Agent  •  Ollama  •  Hermes  •  Open Source',
      desc: 'Personal AI agent built on open-source models, running locally via Ollama with the Hermes agent.',
      live: null,
      github: 'https://github.com/ankit-on-git'
    },
    {
      name: 'Onlyfools',
      tech: 'AI News  •  AI Agents  •  Automation  •  Media',
      desc: 'An AI-run news media platform where AI agents create and publish news automatically.',
      live: 'https://onlyfoolls.blogspot.com/',
      github: 'https://www.linkedin.com/posts/onlyfools_the-indian-government-temporarily-restricted-activity-7472904365922492416-TBCI',
      githubLabel: 'LinkedIn Post'
    }
  ];

  projects.forEach((proj, idx) => {
    doc.font('Helvetica-Bold').fontSize(10).fillColor(darkTextColor).text(proj.name, { continued: true });
    doc.font('Helvetica').fontSize(8.5).fillColor(mutedTextColor).text(`   (${proj.tech})`);
    doc.font('Helvetica').fontSize(8.5).fillColor(mutedTextColor).text(proj.desc, { lineGap: 1.5 });
    
    // Links
    if (proj.live) {
      doc.font('Helvetica-Bold').fontSize(8.5).fillColor(accentColor).text('Live Demo', {
        link: proj.live,
        underline: true,
        continued: true
      });
      doc.fillColor(mutedTextColor).text('   |   ', { underline: false, continued: true });
    } else {
      doc.font('Helvetica').fontSize(8.5).fillColor(mutedTextColor).text('Coming Soon', { continued: true });
      doc.text('   |   ', { continued: true });
    }
    
    doc.font('Helvetica-Bold').fontSize(8.5).fillColor(accentColor).text(proj.githubLabel || 'GitHub', {
      link: proj.github,
      underline: true
    });
    
    if (idx < projects.length - 1) doc.moveDown(0.35);
  });

  // CERTIFICATES
  sectionHeader('Certificates');
  const certs = [
    { title: 'Times Foundation — TOI', url: 'https://drive.google.com/file/d/1eWAucKliBeWEFmEFacst5jAA1gZ82jOv/view?usp=sharing' },
    { title: 'Quizoff 2026 — Unstop', url: 'https://drive.google.com/file/d/1IMOlLJFMIJ9wWu548H0zxgFLQ9volZ2p/view' },
    { title: 'Infosys Springboard Certificate — Infosys', url: 'https://drive.google.com/file/d/1-ou-RyaQ1I8MIxrEx1PrqD-AgpUQI2R-/view' },
    { title: 'Python — HackerRank', url: 'https://www.hackerrank.com/certificates/iframe/0a0cf4c877e8' },
    { title: 'Hackathon — Participation Certificate', url: 'https://drive.google.com/file/d/1NphrGo85oVo8HURp_nq7Ncw1nKhhHMrC/view' }
  ];

  certs.forEach(cert => {
    doc.font('Helvetica').fontSize(9).fillColor(darkTextColor).text(`•  ${cert.title}   `, { continued: true });
    doc.font('Helvetica-Bold').fontSize(8.5).fillColor(accentColor).text('[View Certificate]', {
      link: cert.url,
      underline: true
    });
    doc.moveDown(0.15);
  });

  // EDUCATION
  sectionHeader('Education');
  doc.font('Helvetica-Bold').fontSize(10).fillColor(darkTextColor).text('Lovely Professional University', { continued: true });
  doc.font('Helvetica').fillColor(mutedTextColor).text('  —  Phagwara, Punjab', { align: 'right' });
  doc.font('Helvetica').fontSize(9).fillColor(darkTextColor).text('Bachelor of Technology — Computer Science and Engineering   |   2nd Year');
  doc.moveDown(0.15);
  doc.font('Helvetica-Bold').fontSize(9).fillColor(primaryColor).text('CGPA: 8.82     ', { continued: true });
  doc.font('Helvetica').fillColor(mutedTextColor).text('Sem 1 TGPA: 8.5     Sem 2 TGPA: 9.07');

  doc.end();

  return new Promise((resolve, reject) => {
    stream.on('finish', resolve);
    stream.on('error', reject);
  });
}

async function run() {
  await createCV('Ankit_Yadav_CV.pdf');
  
  // Ensure directories exist
  if (!fs.existsSync('images')) {
    fs.mkdirSync('images', { recursive: true });
  }
  if (!fs.existsSync('public')) {
    fs.mkdirSync('public', { recursive: true });
  }
  if (!fs.existsSync('public/images')) {
    fs.mkdirSync('public/images', { recursive: true });
  }

  // Copy CV to all expected locations
  fs.copyFileSync('Ankit_Yadav_CV.pdf', 'images/Ankit_Yadav_CV.pdf');
  fs.copyFileSync('Ankit_Yadav_CV.pdf', 'public/Ankit_Yadav_CV.pdf');
  fs.copyFileSync('Ankit_Yadav_CV.pdf', 'public/images/Ankit_Yadav_CV.pdf');

  // Copy all files from images/ into public/images/, plus URL-encoded versions for CDN compatibility
  const files = fs.readdirSync('images');
  for (const file of files) {
    const srcPath = path.join('images', file);
    const destPath = path.join('public', 'images', file);
    if (fs.statSync(srcPath).isFile()) {
      fs.copyFileSync(srcPath, destPath);
      // If filename has spaces, also save a URI-encoded copy in both images/ and public/images/
      if (file.includes(' ')) {
        const encoded = encodeURIComponent(file);
        fs.copyFileSync(srcPath, path.join('images', encoded));
        fs.copyFileSync(srcPath, path.join('public', 'images', encoded));
      }
    }
  }

  // Copy root web files to public
  const rootFiles = ['index.html', 'styles.css', 'script.js', 'Ankit_Yadav_CV.docx'];
  for (const f of rootFiles) {
    if (fs.existsSync(f)) {
      fs.copyFileSync(f, path.join('public', f));
    }
  }

  console.log('Successfully generated Ankit_Yadav_CV.pdf and synchronized public/ assets for Vercel!');
  process.exit(0);
}

run().catch(err => {
  console.error('Error generating build assets:', err);
  process.exit(1);
});
