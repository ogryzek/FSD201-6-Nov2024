
const fs = require('fs');

try {
    const myFile = 'lib/second.html';
    const fileFormat = 'utf-8';
    const data = fs.readFileSync(myFile, fileFormat);
    console.log(data)
} catch (e) {
    console.log(`There was an error reading the file: ${e}`);
}


// const fs = require('fs'), path = require('path');

// const filePath = path.join(__dirname, 'lib', 'first.html');
// const stats = fs.statSync(filePath);

// if(stats.isFile()) {
//     fs.readFile(filePath, "utf-8", (err, contents) => {
//         console.log(contents);
//     });
// }
