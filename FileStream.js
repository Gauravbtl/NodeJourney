import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const fileReadStream = fs.createReadStream(path.join(__dirname, 'files','test2.txt'), 'utf8');
fileReadStream.on('data', (chunk) => {
  console.log(chunk);
});


