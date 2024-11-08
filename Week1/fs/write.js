/*
// Writing Synchronously
const fs = require('fs');

const content = `
Here is some
content.

I am writing some content\n

This is content lol.

`;

fs.writeFileSync('a.txt', content.trim());
*/

// Writing Asynchronously
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
