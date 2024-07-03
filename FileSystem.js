import fs from 'fs';
import promises from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const fileOpen = async() => {
  try{
    const data = await promises.readFile(path.join(__dirname, 'files','test.txt'), 'utf8');
    console.log(data);
    const write = await promises.writeFile(path.join(__dirname, 'files','test.txt'), 'Write > Hello from Node.js');
    const append = await promises.appendFile(path.join(__dirname, 'files','test.txt'), 'Append > Hello from Node.js');
    const rename = await promises.rename(path.join(__dirname,'files','test.txt'),path.join(__dirname,'files','test2.txt'));
    const newData = await promises.readFile(path.join(__dirname,'files','test2.txt'),'utf8');
  }
  catch(err){
    console.error(err);
  }
}
fileOpen();
// fs.readFile(path.join(__dirname, 'files','test.txt'), 'utf8', (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   fs.writeFile(path.join(__dirname, 'files','test.txt'), 'Write > Hello from Node.js', (err) => {
//     if (err) {
//       console.error(err);
//       return;
//     }
//       fs.appendFile(path.join(__dirname, 'files','test.txt'), 'Append > Hello from Node.js', (err) => {
//           if (err) {
//               console.error(err);
//               return;
//           }
//       });
//   });
// });



