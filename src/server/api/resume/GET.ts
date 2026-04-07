import type { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';

export default async function handler(req: Request, res: Response) {
  try {
    const filePath = path.resolve('public/data/Shivani_Resume.pdf');

    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ error: 'Resume not found' });
    }

    const fileBuffer = fs.readFileSync(filePath);

    res.setHeader('Content-Type', 'application/octet-stream');
    res.setHeader('Content-Disposition', "attachment; filename=\"Shivani_Resume.pdf\"; filename*=UTF-8''Shivani_Resume.pdf");
    res.setHeader('Content-Length', fileBuffer.length);
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');

    return res.send(fileBuffer);
  } catch (error) {
    return res.status(500).json({ error: 'Failed to serve resume' });
  }
}
