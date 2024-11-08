# FS Module  
  
## Aside:  try/catch  - error handling  
  
try/catch syntax:
```js
try {
    try_statements
} catch (e) {
    catch_statements(e);
} finally {
    finally_statements
}
```
example:
```js
try {
    throw 'myException';
} catch(e) {
    console.error(e);
}
```

## Read a file

```js
const fs = require('fs');

try {
    const myFile = 'a.txt';
    const fileFormat = 'utf-8';
    const data = fs.readFileSync(myFile, fileFormat);
    console.log(data)
} catch (e) {
    console.log(`There was an error reading the file: ${e}`);
}
```

Asynchronously  
  
```js
const fs = require('fs'), path = require('path');

const filePath = path.join(__dirname, 'lib', 'first.html');
const stats = fs.statSync(filePath);

if(stats.isFile()) {
    fs.readFile(filePath, "utf-8", (err, contents) => {
        console.log(contents);
    });
}

```

## Write to a file  
  
```js
const fs = require('fs');

const content = `
Here is some
content.

I am writing some content\n

This is content lol.

`;

fs.writeFileSync('a.txt', content.trim());
```

Asynchronously  

```js
const fs = require('fs'), path = require('path');

const content = `
<h1>My Amazing WebPage</h1>

<ul>
  <li>item one</li>
  <li>item two</li>
</ul>

<p><a href="https://www.google.com">Google</a></p> 
`;

const filePath = path.join(__dirname, "lib", "second.html");

fs.writeFile(filePath, content.trim(), err => {
    if (err) console.log(err);
    else console.log('File created');
});

```

use [`appendFile`](https://nodejs.org/api/fs.html#filehandleappendfiledata-options) to append to a file...  
  
## Serve a File  
  
```js
const http = require('http');
const fs = require('fs'), const path = require('path');

http.createServer((req, res) => {
    fs.readFile('./lib/second.html', (err, data) => {
        res.setHeader('Content-Type', 'text/html').end(data);
    });
}).listen(3000);
```
